<div class="section container">

    <header class="my-6">
        <h1 class="title has-text-weight-light is-size-1">Genel Durum</h1>
        <h2 class="subtitle has-text-weight-light">{{session('selected_bina')}}</h2>
    </header>

    <nav class="level my-6 box has-background-grey-light">

        <div class="level-item has-text-centered">
            <div>
                <p class="heading">TOPLAM GELİR</p>
                <p class="title has-text-link">{{$gelirler}} {{$bina->ayarlar->para_birimi}}</p>
            </div>
        </div>

        <div class="level-item has-text-centered">
            <div>
                <p class="heading">TOPLAM GİDER</p>
                <p class="title has-text-link">{{$giderler}} {{$bina->ayarlar->para_birimi}}</p>
            </div>
        </div>

        <div class="level-item has-text-centered">
            <div>
                <p class="heading">BAKİYE</p>
                <p class="title has-text-link">{{$nakit}} {{$bina->ayarlar->para_birimi}}</p>
            </div>
        </div>

    </nav>

    <nav class="level my-6 box has-background-light">

        <div class="level-item has-text-centered">
            <div>
                <p class="heading">TOPLAM ALACAKLAR</p>
                <p class="title">{{$alacaklar}} {{$bina->ayarlar->para_birimi}}</p>
            </div>
        </div>

        <div class="level-item has-text-centered">
            <div>
                <p class="heading">TOPLAM BORÇLAR</p>
                <p class="title">{{$verecekler}} {{$bina->ayarlar->para_birimi}}</p>
            </div>
        </div>

    </nav>

</div>
