<?php

namespace App\Http\Livewire;

use App\Models\Kayit;
use App\Models\Bina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Livewire\Component;
use Livewire\WithPagination;

class DurumList extends Component
{
    use WithPagination;

    public $alacakverecek;

    public $search = '';
    public $tur = false;

    public $sortField = 'title';
    public $sortDirection = 'asc';

    public $sortTimeField = 'created_at';
    public $sortTimeDirection = 'desc';

    protected $listeners = [
        'alacakToGelir' => 'alacakToGelir',
        'verecekToGider' => 'verecekToGider',
    ];

    public function paginationView()
    {
        return 'livewire::my-pagination';
    }

    public function mount()
    {
        $this->tur = request('tur');
    }

    public function render(Request $request)
    {
        $action = false;

        $bina = Bina::find(session('bina_id'));

        if ($this->tur == 'ozet') {
            $ozet = $this->ozet($request);

            return view('durum.durum', [
                'bina' => $bina,
                'notification' => false,
                'alacaklar' => $ozet['alacak'],
                'verecekler' => $ozet['verecek'],
                'gelirler' => $ozet['gelir'],
                'giderler' => $ozet['gider'],
                'nakit' => $ozet['nakit'],
            ]);
        } else {
            switch ($this->tur) {
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
                    $table['son_odeme'] = false;
                    $table['tutar'] = true;
                    $table['remarks'] = true;
                    $table['created_at'] = true;

                    $q = $this->listAlacaklar();

                    $action['alindi'] = true;

                    break;

                case 'verecekler':
                    $html['h1'] = 'Ödenecek Fatura ve Borçlar';
                    $html['h2'] = $bina->name . ': Verecek Kayıtları';
                    $html['addcommand'] = 'Fatura Ekle';
                    $html['addlink'] = '/kayit-form/fatura';
                    $html['noitem'] = 'Ödenecek Fatura ve Borç Kaydı Yoktur';

                    $table['door_no'] = false;
                    $table['sakin_id'] = false;
                    $table['aciklama'] = true;
                    $table['donem'] = false;
                    $table['son_odeme'] = true;
                    $table['tutar'] = true;
                    $table['remarks'] = true;
                    $table['created_at'] = false;

                    $action['ödendi'] = true;

                    $q = $this->listVerecekler();
                    break;

                case 'gelirler':
                    $q = $this->listGelirler();

                    $html['h1'] = 'Gelirler';
                    $html['h2'] = $bina->name . ': Gelir Kayıtları';
                    $html['addcommand'] = 'Gelir Ekle';
                    $html['addlink'] = '/bina-form';
                    $html['noitem'] = 'Gelir kaydı yoktur';

                    $table['door_no'] = true;
                    $table['sakin_id'] = true;
                    $table['aciklama'] = true;
                    $table['donem'] = false;
                    $table['son_odeme'] = false;
                    $table['tutar'] = true;
                    $table['remarks'] = false;
                    $table['created_at'] = false;

                    break;

                case 'giderler':
                    $q = $this->listGiderler();

                    $html['h1'] = 'Giderler';
                    $html['h2'] = $bina->name . ': Gider Kayıtları';
                    $html['addcommand'] = 'Gider Ekle';
                    $html['addlink'] = '/kayit-form/gider';
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
            }

            $kayitlar = $q->paginate(
                Config::get('constants.table.no_of_results')
            );

            return view('durum.durum-list', [
                'notification' => false,
                'html' => (object) $html,
                'table' => (object) $table,
                'action' => $action,
                'bina' => Bina::find(session('bina_id')),
                // 'type' => $this->tur,
                'kayitlar' => $kayitlar,
            ]);
        }
    }

    public function ozet($request)
    {
        $this->isBinaSelected();

        $this->alacakverecek = $request->tur;

        // Alacaklar
        $alacak_top_tutar = Kayit::where([
            ['bina_id', '=', session('bina_id')],
            ['tur', '=', 'alacak'],
        ])->sum('tutar');

        // Verecekler - Faturalar
        $verecek_top_tutar = Kayit::where([
            ['bina_id', '=', session('bina_id')],
            ['tur', '=', 'verecek'],
        ])->sum('tutar');

        // Gelirler
        $gelirler_top_tutar = Kayit::where([
            ['bina_id', '=', session('bina_id')],
            ['tur', '=', 'gelir'],
        ])->sum('tutar');

        // Giderler
        $giderler_top_tutar = Kayit::where([
            ['bina_id', '=', session('bina_id')],
            ['tur', '=', 'gider'],
        ])->sum('tutar');

        $nakit = $gelirler_top_tutar - $giderler_top_tutar;

        $ozet['alacak'] = number_format($alacak_top_tutar, 2, ',', ' ');
        $ozet['verecek'] = number_format($verecek_top_tutar, 2, ',', ' ');
        $ozet['gelir'] = number_format($gelirler_top_tutar, 2, ',', ' ');
        $ozet['gider'] = number_format($giderler_top_tutar, 2, ',', ' ');
        $ozet['nakit'] = number_format($nakit, 2, ',', ' ');

        return $ozet;
    }

    public function listAlacaklar()
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

    public function listVerecekler()
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

    public function listGelirler()
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

    public function listGiderler()
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

    public function ara($query)
    {
        $this->search = $query;
    }

    public function resetFilter()
    {
        $this->search = '';
    }

    public function isBinaSelected()
    {
        if (!session('bina_id')) {
            return redirect()->route('binalar');
        }

        return true;
    }

    public function alacakToGelir(Request $request, $binaId, $kayitId)
    {
        $props['tur'] = 'gelir';

        Kayit::find($kayitId)->update($props);

        $request->tur = $this->tur;
    }

    public function verecekToGider(Request $request, $binaId, $kayitId)
    {
        $props['tur'] = 'gider';

        Kayit::find($kayitId)->update($props);

        $request->tur = $this->tur;
    }
}
