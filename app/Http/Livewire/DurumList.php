<?php

namespace App\Http\Livewire;

use App\Models\Kayit;
use App\Models\Bina;
use App\Models\Fatura;
use App\Models\Gelir;
use App\Models\Gider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Livewire\Component;

class DurumList extends Component
{
    public $alacakverecek;

    public $search = '';
    public $tur = false;

    public $sortField = 'title';
    public $sortDirection = 'asc';

    public $sortTimeField = 'created_at';
    public $sortTimeDirection = 'desc';

    public function render(Request $request)
    {
        $this->tur = $request->tur;

        $bina = Bina::find(session('bina_id'));

        if ($request->tur == 'ozet') {
            $ozet = $this->ozet($request);

            return view('durum.durum', [
                'notification' => false,
                'alacaklar' => $ozet['alacak'],
                'verecekler' => $ozet['verecek'],
                'gelirler' => $ozet['gelir'],
                'giderler' => $ozet['gider'],
                'nakit' => $ozet['nakit'],
            ]);
        }

        switch ($request->tur) {
            case 'alacaklar':
                $html['h1'] = 'Alacaklar';
                $html['h2'] = $bina->name . ': Alacak Kayıtları';
                $html['addcommand'] = 'Alacak Ekle';
                $html['addlink'] = '/bina-form';
                $html['noitem'] = 'Alacak Kaydı Yoktur';

                $table['door_no'] = true;
                $table['sakin_id'] = true;
                $table['aciklama'] = true;
                $table['donem'] = true;
                $table['son_odeme'] = true;
                $table['tutar'] = true;
                $table['remarks'] = true;
                $table['created_at'] = true;

                $q = $this->listAlacaklar($request);

                break;

            case 'verecekler':
                $html['h1'] = 'Ödenecek Fatura ve Borçlar';
                $html['h2'] = $bina->name . ': Verecek Kayıtları';
                $html['addcommand'] = 'Fatura Ekle';
                $html['addlink'] = '/bina-form';
                $html['noitem'] = 'Ödenecek Fatura ve Borç Kaydı Yoktur';

                $table['door_no'] = false;
                $table['sakin_id'] = false;
                $table['aciklama'] = true;
                $table['donem'] = false;
                $table['son_odeme'] = true;
                $table['tutar'] = true;
                $table['remarks'] = true;
                $table['created_at'] = false;

                $q = $this->listVerecekler($request);
                break;

            case 'gelirler':
                $q = $this->listGelirler($request);

                $html['h1'] = 'Gelirler';
                $html['h2'] = $bina->name . ': Gelir Kayıtları';
                $html['addcommand'] = 'Gelir Ekle';
                $html['addlink'] = '/bina-form';
                $html['noitem'] = 'Gelir kaydı yoktur';

                $table['door_no'] = false;
                $table['sakin_id'] = false;
                $table['aciklama'] = true;
                $table['donem'] = false;
                $table['son_odeme'] = true;
                $table['tutar'] = true;
                $table['remarks'] = true;
                $table['created_at'] = false;

                break;

            case 'giderler':
                $q = $this->listGiderler($request);

                $html['h1'] = 'Giderler';
                $html['h2'] = $bina->name . ': Gider Kayıtları';
                $html['addcommand'] = 'Gider Ekle';
                $html['addlink'] = '/bina-form';
                $html['noitem'] = 'Gider kaydı yoktur';

                $table['door_no'] = false;
                $table['sakin_id'] = false;
                $table['aciklama'] = true;
                $table['donem'] = false;
                $table['son_odeme'] = true;
                $table['tutar'] = true;
                $table['remarks'] = true;
                $table['created_at'] = false;
                break;

            default:
                # code...
                break;
        }

        $kayitlar = $q->paginate(Config::get('constants.table.no_of_results'));

        return view('durum.durum-list', [
            'notification' => false,
            'html' => (object) $html,
            'table' => (object) $table,
            'bina' => Bina::find(session('bina_id')),
            'type' => $this->tur,
            'kayitlar' => $kayitlar,
        ]);
    }

    public function ozet($request)
    {
        $this->isBinaSelected();

        $this->alacakverecek = $request->tur;

        // Alacaklar
        $alacak_top_tutar = Kayit::where(
            'bina_id',
            '=',
            session('bina_id')
        )->sum('tutar');

        // Verecekler - Faturalar
        $verecek_top_tutar = Fatura::where(
            'bina_id',
            '=',
            session('bina_id')
        )->sum('tutar');

        // Gelirler
        $gelirler_top_tutar = Gelir::where(
            'bina_id',
            '=',
            session('bina_id')
        )->sum('tutar');

        // Giderler
        $giderler_top_tutar = Gider::where(
            'bina_id',
            '=',
            session('bina_id')
        )->sum('tutar');

        $nakit = $gelirler_top_tutar - $giderler_top_tutar;

        $ozet['alacak'] = number_format($alacak_top_tutar, 2, ',', ' ');
        $ozet['verecek'] = number_format($verecek_top_tutar, 2, ',', ' ');
        $ozet['gelir'] = number_format($gelirler_top_tutar, 2, ',', ' ');
        $ozet['gider'] = number_format($giderler_top_tutar, 2, ',', ' ');
        $ozet['nakit'] = number_format($nakit, 2, ',', ' ');

        return $ozet;
    }

    public function listAlacaklar($request)
    {
        $this->isBinaSelected();

        $q = Kayit::query()->orderBy(
            $this->sortTimeField,
            $this->sortTimeDirection
        );

        $q->where('bina_id', '=', session('bina_id'));
        $q->where('tur', '=', 'alacak');

        if (strlen($this->search) > 0) {
            $q->where('aciklama', 'like', '%' . $this->search . '%');
            $q->orWhere('remarks', 'like', '%' . $this->search . '%');
        }

        return $q;
    }

    public function listVerecekler($request)
    {
        $this->isBinaSelected();

        $q = Kayit::query()->orderBy(
            $this->sortTimeField,
            $this->sortTimeDirection
        );

        $q->where('bina_id', '=', session('bina_id'));
        $q->where('tur', '=', 'verecek');

        if (strlen($this->search) > 0) {
            $q->where('aciklama', 'like', '%' . $this->search . '%');
            $q->orWhere('remarks', 'like', '%' . $this->search . '%');
        }

        return $q;
    }

    public function listGelirler($request)
    {
        $this->isBinaSelected();

        $q = Kayit::query()->orderBy(
            $this->sortTimeField,
            $this->sortTimeDirection
        );

        $q->where('bina_id', '=', session('bina_id'));
        $q->where('tur', '=', 'gelir');

        if (strlen($this->search) > 0) {
            $q->where('aciklama', 'like', '%' . $this->search . '%');
            $q->orWhere('remarks', 'like', '%' . $this->search . '%');
        }

        return $q;
    }

    public function listGiderler($request)
    {
        $this->isBinaSelected();

        $q = Kayit::query()->orderBy(
            $this->sortTimeField,
            $this->sortTimeDirection
        );

        $q->where('bina_id', '=', session('bina_id'));
        $q->where('tur', '=', 'gider');

        if (strlen($this->search) > 0) {
            $q->where('aciklama', 'like', '%' . $this->search . '%');
            $q->orWhere('remarks', 'like', '%' . $this->search . '%');
        }

        return $q;
    }

    public function ara(Request $request, $query)
    {
        $this->search = $query;
        $request->type = $this->type;
    }

    public function resetFilter(Request $request)
    {
        $this->search = '';
        $request->type = $this->type;

        //$this->resetPage();
    }

    public function isBinaSelected()
    {
        if (!session('bina_id')) {
            return redirect()->route('binalar');
        }

        return true;
    }
}
