<article class="column m-0 mb-6 p-0 makbuz">

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

            <div class="column is-4 ">





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



            </div>

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

                    Sayın <strong>{{$record ? $sakinler[$record->sakin_id] : '___ '}}</strong> (Daire No : <strong>{{$record ? $record->sakin_id : '___ '}}</strong>) Aralık 2022 aidat bedeli olarak <strong>{{$record ? $yazi : '____'}}</strong> TL alınmıştır.


                    {{-- <p class="title has-text-centered is-size-1"> 750.00 &#8378;</p> --}}
                    {{-- <p class="has-text-centered"> Sayın Celal ÇETİNDAĞ (Daire No : 5) Aralık 2022 aidat bedeli olarak <strong>yedi yüz elli</strong> TL alınmıştır.</p> --}}

                </div>


                <div class="column">



                    <div class="columns is-vcentered has-background-light mt-4">

                        <div class="column is-8 is-size-7"><strong>{{ Auth::user()->name }} {{ strtoupper(Auth::user()->lastname) }}</strong><br>{{$bina->name}} Yöneticisi <br><span class="has-text-grey">[Makbuzu Veren]</span></div>
                        <div class="column is-4 is-size-7 has-text-grey has-text-centered">İmza<br><br><br></div>


                    </div>

                </div>












            </div>

        </div>
    </div>

    <div class="column py-0">

        <table class="table is-fullwidth my-0" >

            <tbody>
                <tr>
                    <td class="is-size-7 has-text-grey">Bina Yönetim Sistemi</td>
                    <td class="is-size-7 has-text-grey has-text-right">https://yonetici.kapkara.one</td>
                </tr>
            </tbody>

        </table>
    </div>

</article>
