<?php

namespace App\Http\Livewire;

use App\Models\Okuma;
use App\Models\Sakin;
use App\Models\Bedel;
use App\Models\Kayit;

use Livewire\Component;
// use Livewire\Attributes\Rule;

class SayacOkuma extends Component
{

    public $current_bina_id;
    public $current_bina_name;
    public $action;
    public $sakinler;
    public $okumalar = [];

    public $okumaModal = false;
    public $bedelModal = false;


    public $currentSakin ;
    public $okuma = false;

    public $idOkuma = false;
    public $okumaTarihi = null;


    public $okumaDegeri = null;

    public $sayacliOkumaTurleri = [];
    public $activeSayacTab;
    public $bedel_id;



    public $bedel = [
        'user_id' => '',
        'bina_id' => '',
        'sakin_id' => '',
        'tur' => '',
        'aciklama' => '',
        'donem' => '',
        'son_odeme' => '',
        'dokum' => '',
        'tutar' => '',
        'remarks' => '',
        'birim_bedel' => '',
        'ilk_okuma' => '',
        'son_okuma' => '',
        'unit' => '',
        'status' => ''
    ];

    protected $rules = [
        // Specify the Livewire property name as the key
        'okumaDegeri' => ['required', 'numeric', 'min:0'],
        'okumaTarihi' => ['required'],
    ];


    public function mount ()
    {
        $this->action = request()->route('action');

        if ( empty(session()->get(key: 'bina_id'))) {
            redirect('/bina-list');
        }

        $this->current_bina_id = session()->get(key: 'bina_id');
        $this->current_bina_name = session()->get(key: 'selected_bina');

        $this->getSayacliTurler();

        $this->getSakinler();
    }



    public function getSayacliTurler()
    {
        $this->sayacliOkumaTurleri = Bedel::where(
            'bina_id', '=', $this->current_bina_id)->where(
            'tur','=','SAYAC'
        )->get()->toArray();

        $this->activeSayacTab = $this->sayacliOkumaTurleri['0']['id'];

        return true;
    }




    public function render()
    {
        $this->getOkumalar();
        return view('livewire.sayac-okuma');
    }


    public function getSakinler()
    {
        $bina_id = $this->current_bina_id;

        $sakinler = Sakin::where('bina_id', '=', $bina_id)
            ->where('is_active', '=', 1)
            ->orderBy('door_no', 'ASC')
            ->get()->toArray();

        $this->sakinler = $sakinler;
    }



    public function getOkumalar()
    {
        foreach ($this->sayacliOkumaTurleri as $key => $sayacTuru) {

            foreach ($this->sakinler as $sakin) {

                $this->okumalar[$sayacTuru['id']][$sakin['id']] = Okuma::where('sakin_id','=',$sakin['id'])
                    ->where('bedel_id','=',$sayacTuru['id'])
                    ->orderBy('created_at','DESC')
                    ->get()
                    ->toArray();

            }
        }
    }




    public function toggleModal($idModal)
    {
        if ( $idModal == 'okumaModal' ) {
            $this->okumaModal = !$this->okumaModal;
        }

        if ( $idModal == 'bedelModal' ) {
            $this->bedelModal = !$this->bedelModal;
        }

    }



    public function yeniOkuma($idSayacTur,$idSakin)
    {
        $this->bedel_id = $idSayacTur;
        $this->currentSakin = Sakin::find(id: $idSakin);
        $this->toggleModal('okumaModal');
    }



    public function okumaKayit($idOkuma = false)
    {


        if ( !$this->currentSakin ) {

            dd('$this->currentSakin yok');
            return;
        }



        // $this->validate();

        //         dd('wwww',$this->currentSakin);

        //dd($this->bedel);

        $dokum = json_encode([
            'son_okuma' =>$this->bedel['son_okuma'],
            'ilk_okuma' => $this->bedel['ilk_okuma'],
            'birim_bedel' => $this->bedel['birim_bedel'],
            'unit' => $this->bedel['unit']
        ]);


        // Yeni ALACAK kaydı ekle
        $alacak['user_id'] = auth()->id();
        $alacak['bina_id'] = $this->current_bina_id;
        $alacak['sakin_id'] = $this->currentSakin->id;
        $alacak['tur'] = 'alacak';
        $alacak['aciklama'] = $this->bedel['aciklama'];
        $alacak['donem'] = date('M Y', time());
        $alacak['son_odeme'] = '';
        $alacak['dokum'] = $dokum;
        $alacak['tutar'] = $this->bedel['tutar'];
        $alacak['status'] = 'KAYIT';

        $kayit = Kayit::create($alacak);

        $okumaGuncelle = [
            'kayit_id' => $kayit->id,
        ];

                //dd($alacak,$idOkuma);


        // Güncelle
        $okuma = Okuma::find($idOkuma);
        $okuma = $okuma->update($okumaGuncelle);

        $this->toggleModal('bedelModal');



        // Yeniden okumaları yükle
        $this->getOkumalar();

        return true;
    }   






    public function okumaDuzenle($idOkuma)
    {

        $this->idOkuma = $idOkuma;


        // if ( !$this->okuma ) {
        //     return;
        // }

        $okuma = Okuma::find($idOkuma);

        $this->currentSakin = Sakin::find(id: $okuma->sakin_id);



        $this->okumaTarihi = $okuma->okuma_tarihi;
        $this->okumaDegeri = $okuma->okuma_degeri;

        $this->toggleModal('okumaModal');

        //dd(vars: $this->okumaTarihi);


    }       



    public function bedelEkle($bedel_id,$idOkuma,$idSakin)
    {

        $okumaObject = Bedel::find($bedel_id);

        $this->idOkuma = $idOkuma;


        $this->currentSakin = Sakin::find(id: $idSakin);
        $this->toggleModal('bedelModal');

        $lastTwo = Okuma::where('sakin_id', '=', $idSakin)
            ->where('id', '<', $idOkuma)
            ->orderBy('okuma_tarihi', 'DESC')
            ->limit(2)
            ->get();
            // ->toArray();


            //dd($lastTwo);

        $ilkOkuma = $lastTwo[1]->okuma_degeri;
        $sonOkuma = $lastTwo[0]->okuma_degeri;


        $toplamTuketim = $ilkOkuma - $sonOkuma;

        $aciklama = $okumaObject->title;

        $tutar = $toplamTuketim * $okumaObject->bedel;


        $this->bedel = [
            'user_id' => auth()->id(),
            'bina_id' => $this->current_bina_id,
            'sakin_id' => $idSakin,
            'tur' => 'alacak',
            'aciklama' => $aciklama,
            'donem' => '',
            'son_odeme' => '',
            'dokum' => '',
            'tutar' => $tutar,
            'remarks' => '',
            'birim_bedel' => $okumaObject->bedel,
            'ilk_okuma' => $ilkOkuma,
            'son_okuma' => $sonOkuma,
            'unit' => $okumaObject->unit,
            'status' => 'KAYIT'
        ];

       // dd($this->bedel);






        // foreach ( $lastTwo as $okuma ) {



        // }


            //dd([$lastTwo,$idSakin]);


        // Find last 2 okuma;


    }



    public function setActiveSayacTab($idTab) {

        $this->activeSayacTab  = $idTab;

    }

}
