<x-app-layout>
    <script src="{{ asset('/js/ckeditor5/ckeditor.js') }}"></script>

    <div class="section container">

        @if ($type == 'aidat')
            <h1 class="title mt-6 has-text-weight-light is-size-1 has-text-left">Aylık Ödeme - Aidatlar</h1>
            <h2 class="subtitle">Toplu Aidat Ödeme Girişi</h2>
        @endif



        @if ($type == 'alacak')
            <h1 class="title mt-6 has-text-weight-light is-size-1 has-text-left">{{ $kayit ? 'Alacak Kaydı Güncelle' :'Alacak Kaydı Ekle' }}</h1>
            <h2 class="subtitle">Alacak Kayıtları</h2>
        @endif


        @if ($type == 'verecek')
            <h1 class="title mt-6 has-text-weight-light is-size-1 has-text-left">{{ $kayit ? 'Ödenecek Fatura Güncelle' :'Ödenecek Fatura Ekle' }}</h1>
            <h2 class="subtitle">Ödenecek Fatura Kayıtları</h2>
        @endif

        <form action="{{ $kayit ? '/kayit-update/'.$type.'/'.$kayit->id : '/kayit-add/'.$type }}" method="{{ $kayit ? 'POST' : 'POST' }}" enctype="multipart/form-data">
        @csrf

            <div class="box">


                @if ($type == 'alacak')
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


                @if ($type == 'aidat')
                    {{-- <div class="columns"> --}}
                        {{-- <div class="column field is-10">
                            <label class="label" for="name">Açıklama</label>
                            <div class="control" id="name">
                                <input class="input" name="aciklama" type="text" placeholder="Açıklama" value="{{ $kayit ? $kayit->aciklama :''}}">
                            </div>
                        </div> --}}

                        <div class="column field">
                            <label class="label" for="giris">Ait olduğu dönem</label>
                            <div class="control" id="giris">
                                <input type="date" name="donem" value="{{$kayit ? $kayit->son_odeme: date('Y-m-d')}}">
                            </div>
                        </div>
                    {{-- </div> --}}

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


                @if ($type != 'aidat')
                <div class="columns">

                    <div class="column field is-half">
                        <label class="label" for="name">Açıklama</label>
                        <div class="control" id="name">
                            <input class="input" name="aciklama" type="text" placeholder="Açıklama" value="{{ $kayit ? $kayit->aciklama :''}}">
                        </div>
                    </div>

                    <div class="column field">
                        <label class="label" for="surname">Tutar, {{$bina->ayarlar->para_birimi}}</label>
                        <div class="control" id="surname">
                            <input class="input" name="tutar" type="text" placeholder="650,25 örnek" value="{{ $kayit ? $kayit->tutar :''}}">
                        </div>
                    </div>

                    @if ($type == 'verecek')
                    <div class="column field is-2 has-text-right">
                        <label class="label" for="giris">Son Ödeme Tarihi</label>
                        <div class="control" id="giris">
                            <input type="date" name="giristarihi" value="{{$kayit ? $kayit->son_odeme: ''}}">
                        </div>
                    </div>
                    @endif
                </div>
                @endif


                <div class="field">
                    <input type="hidden" name="editor_data" id="ckeditor" value="{{$kayit ? $kayit->remarks : ''}}">
                    <label class="label">Notlar</label>
                    <div class="column" id="editor">{!!$kayit ? $kayit->remarks: ''!!}</div>
                </div>

                <div class="buttons is-right">
                    <button class="button is-link">{{ $kayit ? 'Güncelle' : 'Kaydet'}}</button>
                </div>

            </div>

        </form>
    </div>

    <script>
        ClassicEditor
        .create( document.querySelector('#editor') )
        .then( editor => {
            // console.log(editor);
            let icerik = document.getElementById('ckeditor').value

            if (icerik.length>0) {
                editor.setData(icerik)
            }

            editor.model.document.on('change:data', ( evt, data ) => {
                document.getElementById("ckeditor").value = editor.getData()
            });
        })
        .catch( error => {
            console.error(error);
        });
    </script>

</x-app-layout>

