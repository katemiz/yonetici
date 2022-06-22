<div class="section container">



    <script>

        function searchFunction() {

            if (document.getElementById('queryInput').value.length > 1) {
                @this.call('ara',document.getElementById('queryInput').value)
            }

            return true
        }

        function resetFilter() {
            let type = document.getElementById('hiddenType').value
            document.getElementById('queryInput').value = ''
            @this.call('resetFilter',type)
        }

    </script>












    <header class="my-6">
        <h1 class="title has-text-weight-light is-size-1">{{$html->h1}}</h1>
        <h2 class="subtitle has-text-weight-light">{{$html->h2}}</h2>
    </header>

    {{-- NOTIFICATION --}}
    @if ($notification)
        <div class="notification {{$notification["type"]}} is-light">{!! $notification["message"] !!}</div>
    @endif

    <x-table-filter add="{{$html->addcommand}}" addlink="{{$html->addlink}}" showsearch="{{$kayitlar->total() > 0 ? true:false}}"/>

    @if ($kayitlar->total() > 0)

        <table class="table is-fullwidth">

            <caption>Toplam <b>{{ $kayitlar->total() }}</b> kayıt vardır</caption>

            <thead>
                <tr>
                    @if ($table->door_no)
                    <th>Kapı No</th>
                    @endif

                    @if ($table->sakin_id)
                    <th>Borçlu</th>
                    @endif





                    @if ($table->aciklama)
                    <th>
                        <span class="icon-text" wire:click="sortBy('title')">
                            <span class="icon {{ $sortDirection === 'asc' ? 'is-hidden' : ''}}">
                                <x-icon icon="arrow-up" fill="{{config('constants.icons.color.active')}}"/>
                            </span>
                            <span class="icon {{ $sortDirection === 'desc' ? 'is-hidden' : ''}}">
                                <x-icon icon="arrow-down" fill="{{config('constants.icons.color.active')}}"/>
                            </span>
                            <span>Açıklama</span>
                        </span>
                    </th>
                    @endif

                    @if ($table->tutar)
                    <th>Tutar</th>
                    @endif

                    @if ($table->son_odeme)
                    <th>Son Ödeme</th>
                    @endif



                    @if ($table->created_at)
                    <th class="is-2">
                        <span class="icon-text" wire:click="sortBy('created_at')">
                            <span class="icon {{ $sortTimeDirection === 'asc' ? 'is-hidden' : ''}}">
                                <x-icon icon="arrow-up" fill="{{config('constants.icons.color.active')}}"/>
                            </span>
                            <span class="icon {{ $sortTimeDirection === 'desc' ? 'is-hidden' : ''}}">
                                <x-icon icon="arrow-down" fill="{{config('constants.icons.color.active')}}"/>
                            </span>
                            <span>Eklenme Zamanı</span>
                        </span>
                    </th>
                    @endif


                    <th class="has-text-right is-2">İşlemler</th>
                </tr>
            </thead>

            <tbody>

                @foreach ($kayitlar as $alacak)

                <tr>
                    @if ($table->door_no)
                        @foreach ($bina->sakinler as $sakin)
                            @if ($sakin->id == $alacak->sakin_id )
                                <td>{{ $sakin->door_no }} </td>
                            @endif
                        @endforeach
                    @endif

                    @if ($table->sakin_id)
                        @foreach ($bina->sakinler as $sakin)
                            @if ($sakin->id == $alacak->sakin_id )
                                <td>{{ $sakin->name }} {{ $sakin->lastname }}</td>
                            @endif
                        @endforeach
                    @endif

                    @if ($table->aciklama)
                        <td>
                            <a href="/bina-view/{{$alacak->id}}">
                                {{ $alacak->aciklama }}
                            </a>
                        </td>
                    @endif

                    @if ($table->tutar)
                        <td>
                            {{ number_format($alacak->tutar, 2, ',', ' ') }}
                        </td>
                    @endif


                    @if ($table->son_odeme)
                        <td>
                            {{ $alacak->son_odeme }}
                        </td>
                    @endif



                    @if ($table->created_at)
                        <td>
                            {{ $alacak->created_at }}
                        </td>
                    @endif



                    <td class="has-text-right">
                    <a href="/bina-view/{{$alacak->id}}" class="icon">
                        <x-icon icon="eye" fill="{{config('constants.icons.color.active')}}"/>

                    </a>
                    <a href="/sakinler-form/{bina.id}/{item.id}" class="icon">
                        <x-icon icon="edit" fill="{{config('constants.icons.color.active')}}"/>
                    </a>
                    </td>
                </tr>

                @endforeach

            </tbody>

        </table>

        {{ $kayitlar->links()}}

    @else
        <div class="notification is-warning is-light">{{$html->noitem}}</div>
    @endif

</div>
