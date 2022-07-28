<x-app-layout>
    <div class="section container">

        <script src="{{ asset('/js/ckeditor5/ckeditor.js') }}"></script>
        <script src="{{ asset('/js/tabs.js') }}"></script>

        @if ($tur == 'aidat')
            <h1 class="title mt-6 has-text-weight-light is-size-1 has-text-left">Aylık Ödeme - Aidatlar</h1>
            <h2 class="subtitle">Toplu Aidat Kaydı Oluşturma</h2>
        @else

            @if ($tur == 'alacak')
                <h1 class="title mt-6 has-text-weight-light is-size-1 has-text-left">{{ $kayit ? 'Alacak Kaydı Güncelle' :'Alacak Kaydı Ekle' }}</h1>
                <h2 class="subtitle">Alacak Kayıtları</h2>
            @endif

            @if ($tur == 'fatura')
                <h1 class="title mt-6 has-text-weight-light is-size-1 has-text-left">{{ $kayit ? 'Ödenecek Fatura Güncelle' :'Ödenecek Fatura Ekle' }}</h1>
                <h2 class="subtitle">Ödenecek Fatura Kayıtları</h2>
            @endif

            @if ($tur == 'gelir')
                <h1 class="title mt-6 has-text-weight-light is-size-1 has-text-left">{{ $kayit ? 'Gelir Kaydı Güncelle' :'Gelir Kaydı Ekle' }}</h1>
                <h2 class="subtitle">Gelir Kaydı</h2>
            @endif


            @if ($tur == 'gider')
                <h1 class="title mt-6 has-text-weight-light is-size-1 has-text-left">{{ $kayit ? 'Gider Kaydı Güncelle' :'Gider Kaydı Ekle' }}</h1>
                <h2 class="subtitle">Gider Kaydı</h2>
            @endif

        @endif

        <form action="{{ $kayit ? '/kayit-update/'.$tur.'/'.$kayit->id : '/kayit-add/'.$tur }}" method="POST" enctype="multipart/form-data">
        @csrf


            <input type="hidden" id="hiddenTur" name="hiddenTur" value="{{$tur}}" />


            <div class="box">

                @if ($tur == 'alacak')
                <div class="field">
                    <label class="label">Borçlu Sakin</label>
                    <div class="control">
                        <div class="select" >
                            <select name="borclu">
                                @foreach ($bina->sakinler as $sakin )
                                    <option value="{{$sakin->id}}">{{$sakin->name}} {{$sakin->lastname}} {{ $sakin->door_no}} numaralı sakin</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>
                @endif

                @if ($tur == 'aidat')

                    <div class="column field">
                        <label class="label" for="giris">Ait olduğu dönem</label>
                        <div class="control" id="giris">
                            <input type="date" name="donem" value="{{$kayit ? $kayit->son_odeme: date('Y-m-d')}}">
                        </div>
                    </div>

                    <div class="column">
                        <table class="table is-fullwidth">
                            @foreach ($bina->sakinler as $sakin)
                                <tr>
                                    <td>{{$sakin->door_no}}</td>
                                    <td>{{$sakin->name}}</td>
                                    <td>{{$sakin->lastname}}</td>
                                    <td>Aylık aidat ödemesi</td>
                                    <td>{{$tutarlar[$sakin->id]}}</td>
                                </tr>
                            @endforeach
                        </table>
                    </div>
                @endif


                @if ($tur != 'aidat')
                <div class="columns">

                    <div class="column field is-half">
                        <label class="label" for="name">Açıklama</label>
                        <div class="control" id="name">
                            <input class="input" name="aciklama" type="text" placeholder="Açıklama" list='kalemler' value="{{ $kayit ? $kayit->aciklama :''}}">

                            @if ($tur == 'gider' || $tur == 'fatura')
                            <datalist id='kalemler'>
                                @foreach ($bina->kalemler as $kalem)
                                    <option label='{{$kalem->title}}' value='{{$kalem->title}}'>
                                @endforeach
                            </datalist>
                            @endif

                        </div>
                    </div>

                    <div class="column field">
                        <label class="label" for="surname">Tutar, {{$bina->pbirimi}}</label>
                        <div class="control" id="surname">
                            <input class="input" name="tutar" type="text" placeholder="650,25 örnek" value="{{ $kayit ? $kayit->tutar :''}}">
                        </div>
                    </div>

                    @if ($tur == 'fatura')
                    <div class="column field is-3 has-text-right">
                        <label class="label" for="giris">Son Ödeme</label>
                        <div class="control" id="giris">
                            <input type="date" name="sonodeme" value="{{$kayit ? $kayit->son_odeme: ''}}">
                        </div>
                    </div>
                    @endif
                </div>
                @endif


                <div class="field" id="ck">
                    <input type="hidden" name="editor_data" id="ckeditor" value="{{$kayit ? $kayit->remarks : ''}}">
                    <label class="label">Notlar</label>
                    <div class="column" id="editor">{!!$kayit ? $kayit->remarks: ''!!}</div>
                </div>

                <div class="buttons is-right">
                    <button class="button is-link">{{ $kayit ? 'Güncelle' : 'Kaydet'}}</button>
                </div>

            </div>

        </form>

        <script src="{{ asset('/js/ckeditoradd.js') }}"></script>

    </div>
</x-app-layout>
