<div class="section container">

    <header class="my-6">
        <h1 class="title has-text-weight-light is-size-1">Genel Durum</h1>
        <h2 class="subtitle has-text-weight-light">{{session('selected_bina')}}</h2>
    </header>

    <nav class="level mt-6 box">

        <div class="level-item has-text-centered">
            <div>
                <p class="heading">TOPLAM ALACAKLAR</p>
                <p class="title">{{$alacaklar}}</p>
            </div>
        </div>

        <div class="level-item has-text-centered">
            <div>
                <p class="heading">TOPLAM BORÇLAR</p>
                <p class="title">{{$verecekler}}</p>
            </div>
        </div>

        <div class="level-item has-text-centered">
            <div>
                <p class="heading">TOPLAM GELİR</p>
                <p class="title">{{$gelirler}}</p>
            </div>
        </div>

        <div class="level-item has-text-centered">
            <div>
                <p class="heading">TOPLAM GİDER</p>
                <p class="title">{{$giderler}}</p>
            </div>
        </div>

        <div class="level-item has-text-centered">
            <div>
                <p class="heading">TOPLAM NAKİT</p>
                <p class="title">{{$nakit}}</p>
            </div>
        </div>

    </nav>

</div>
