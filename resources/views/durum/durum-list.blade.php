<div class="section container">

    <script>

        function searchFunction() {

            if (document.getElementById('queryInput').value.length > 1) {
                @this.call('ara',document.getElementById('queryInput').value)
            }

            return true
        }

        function resetFilter() {
            document.getElementById('queryInput').value = ''
            @this.call('resetFilter')
        }

        function alindiKaydi(binaId,kayitId) {

            Swal.fire({
                title: 'Bu alacak gelir kaydına dönüştürülecektir.',
                text: 'Onaylıyor musunuz?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Evet',
                cancelButtonText: 'İptal',

            }).then((result) => {
                if (result.isConfirmed) {
                    window.livewire.emit('alacakToGelir', binaId, kayitId)
                } else {
                return false
                }
            })
        }

        function odendiKaydi(binaId,kayitId) {

            Swal.fire({
                title: 'Ödendi Kaydı?',
                text: 'Bu fatura/borç/verecek gider kaydına dönüştürülecektir. Onaylıyor musunuz?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Evet',
                cancelButtonText: 'İptal',

            }).then((result) => {
                if (result.isConfirmed) {
                    window.livewire.emit('verecekToGider', binaId, kayitId)
                } else {
                return false
                }
            })
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
                    <th class="has-text-right">Tutar</th>
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

                    @if ($action)
                    <th class="has-text-right is-2">İşlemler</th>
                    @endif

                </tr>
            </thead>

            <tbody>

                @foreach ($kayitlar as $kayit)

                <tr>
                    @if ($table->door_no)
                    <td>
                        @foreach ($bina->sakinler as $sakin)
                            @if ($sakin->id == $kayit->sakin_id )
                                {{ $sakin->door_no }}
                            @endif
                        @endforeach
                    </td>
                    @endif

                    @if ($table->sakin_id)
                    <td>
                        @foreach ($bina->sakinler as $sakin)
                            @if ($sakin->id == $kayit->sakin_id )
                                {{ $sakin->name }} {{ $sakin->lastname }}
                            @endif
                        @endforeach
                    </td>
                    @endif

                    @if ($table->aciklama)
                        <td>
                            {!! $kayit->aciklama !!}
                        </td>
                    @endif

                    @if ($table->tutar)
                        <td class="has-text-right">
                            {{ number_format($kayit->tutar, 2, ',', ' ') }}
                        </td>
                    @endif

                    @if ($table->son_odeme)
                        <td>
                            {{ $kayit->son_odeme }}
                        </td>
                    @endif

                    @if ($table->created_at)
                        <td>
                            {{ $kayit->created_at }}
                        </td>
                    @endif

                    @if ($action)
                    <td class="has-text-right">

                        @if (isset($action['view']) && $action['view'])
                        <a href="/bina-view/{{$kayit->id}}" class="icon">
                            <x-icon icon="eye" fill="{{config('constants.icons.color.active')}}"/>
                        </a>
                        @endif

                        @if (isset($action['edit']) && $action['edit'])
                        <a href="/sakinler-form/{bina.id}/{item.id}" class="icon">
                            <x-icon icon="edit" fill="{{config('constants.icons.color.active')}}"/>
                        </a>
                        @endif

                        @if (isset($action['alindi']) && $action['alindi'])
                        <a onclick="alindiKaydi('{{$bina->id}}','{{$kayit->id}}')" class="icon">
                            <x-icon icon="income" fill="{{config('constants.icons.color.active')}}"/>
                        </a>
                        @endif

                        @if (isset($action['ödendi']) && $action['ödendi'])
                        <a onclick="odendiKaydi('{{$bina->id}}','{{$kayit->id}}')" class="icon">
                            <x-icon icon="outbox" fill="{{config('constants.icons.color.active')}}"/>
                        </a>
                        @endif

                    </td>
                    @endif

                </tr>

                @endforeach

            </tbody>

        </table>

        {{ $kayitlar->links()}}

    @else
        <div class="notification is-warning is-light">{{$html->noitem}}</div>
    @endif

</div>
