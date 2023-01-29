<article class="box column m-0 p-0 card">

    <div class="column">

        <div class="columns is-vcentered has-background-light">

            <div class="column is-narrow">
                <img src="{{ asset('/images/favicon.svg') }}" alt="{{ config('constants.app.app_header_logo') }}">
            </div>

            <div class="column is-4">

                <header>
                    <h1 class="title is-size-6">{{$bina->name}}</h1>
                    <h2 class="subtitle has-text-weight-light is-size-7">{{$bina->address}}</h2>
                </header>

            </div>

            <div class="column">
                <h1 class="subtitle is-size-5 has-text-right">BİNA GELİR-GİDER MAKBUZU</h1>
            </div>

        </div>
    </div>

    <div class="column">


        <div class="columns">

            {{-- <div class="column is-4 ">

                <table class="table is-bordered is-fullwidth ">
                    <thead>
                        <tr>
                            <th class="is-size-7 my-0">Cinsi</th>
                            <th class="has-text-right is-size-7 my-0">Tutar</th>
                        </tr>
                    </thead>

                    <tbody class="is-size-7 my-0">
                        <tr><td>Yakıt</td><td>&nbsp;</td></tr>
                        <tr><td>Su</td><td>&nbsp;</td></tr>
                        <tr><td>Elektrik/Asansör</td><td>&nbsp;</td></tr>
                        <tr><td>Sabit Giderler</td><td>&nbsp;</td></tr>
                    </tbody>

                    <tfoot>
                        <tr class="is-size-7 my-0">
                            <th>Toplam</th><th class="has-text-right">{{$record ? number_format($record->tutar, 2, ',', ' ') : '       '}}</th>
                        </tr>
                    </tfoot>
                </table>

            </div> --}}

            <div class="column ">

                <div class="column">
                <div class="columns">

                    <div class="column is-2">
                        <figure class="image">
                            {!! QrCode::size(70)->generate(Request::url()); !!}
                        </figure>
                        {{date('d/m/Y',time())}}
                    </div>

                    <div class="column has-text-right ">
                        <span class="title is-size-1">{{$record ? number_format($record->tutar, 2, ',', ' ') : '__________'}} &#8378;</span><br>
                        <span class="has-text-right">Daire No <strong>{{$record ? $record->sakin_id : '___ '}}</strong>, Dönem <strong>{{$record ? $record->donem : '____________'}}</strong></span>
                    </div>

                </div>
                </div>

                <div class="column has-text-centered">

                    @if ($record && $record->sakin_id)

                        Sayın <strong>{{$record ? $sakinler[$record->sakin_id] : '___ '}}</strong>
                        (Daire No : <strong>{{$record ? $record->sakin_id : '___ '}}</strong>)
                        {{$record ? $record->aciklama : '___ '}} olarak <strong>{{$record ? $yazi : '____'}}</strong> TL alınmıştır.

                    @else

                        {{$record ? $record->aciklama : '___ '}} olarak <strong>{{$record ? $yazi : '____'}}</strong>

                    @endif

                </div>

                <div class="column">

                    <div class="columns is-vcentered has-background-light mt-4">
                        <div class="column is-8 is-size-7">{{$bina->name}} Yöneticisi <br><span class="has-text-grey">[Makbuzu Veren]</span></div>
                        <div class="column is-4 is-size-7 has-text-grey has-text-right">İmza<br><br><br></div>
                    </div>

                </div>

            </div>

        </div>
    </div>

</article>

<div class="columns py-0 mt-1">

    <div class="column is-half help">Bina Yönetim Sistemi</div>

    <div class="column has-text-right help">
        <a href="https://yonetici.kapkara.one" class="help is-link">https://yonetici.kapkara.one</a>
    </div>

</div>
