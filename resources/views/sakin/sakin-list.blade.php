<div class="section container">

    <header class="my-6">
        <h1 class="title has-text-weight-light is-size-1">Bina Sakinleri</h1>
        <h2 class="subtitle has-text-weight-light">{{$bina->name}} oturan sakinler</h2>
    </header>

    {{-- NOTIFICATION --}}
    @if ($notification)
        <div class="notification {{$notification["type"]}} is-light">{!! $notification["message"] !!}</div>
    @endif

    <x-table-filter add="Bina Sakini Ekle" addlink="/sakin-form/{{ $bina->id }}" showsearch="{{$sakinler->total() > 0 ? true:false}}"/>

    @if ($sakinler->total() > 0)

    <!-- ************************ -->
    <!-- TABLE                    -->
    <!-- ************************ -->

    <table class="table is-fullwidth">

        <caption>Bu yerleşkede <b>{{ $sakinler->total() }}</b> sakin oturmaktadır</caption>

        <thead>
            <tr>

                <th>
                    <span class="icon-text" wire:click="sortBy('title')">
                        <span class="icon {{ $sortDirection === 'asc' ? 'is-hidden' : ''}}">
                            <x-icon icon="arrow-up" fill="{{config('constants.icons.color.active')}}"/>
                        </span>
                        <span class="icon {{ $sortDirection === 'desc' ? 'is-hidden' : ''}}">
                            <x-icon icon="arrow-down" fill="{{config('constants.icons.color.active')}}"/>
                        </span>
                        <span>İsim</span>
                    </span>
                </th>

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

                <th class="has-text-right is-2">İşlemler</th>
            </tr>
        </thead>

        <tbody>

            @foreach ($sakinler as $sakin)
                <tr>
                    <td>
                        <a href="/sakin-view/{{$bina->id}}/{{$sakin->id}}">{{ $sakin->name }}</a>
                    </td>

                    <td>{{ $sakin->created_at }}</td>

                    <td class="has-text-right">
                        <a href="/sakin-view/{{$bina->id}}/{{$sakin->id}}" class="icon">
                            <x-icon icon="eye" fill="{{config('constants.icons.color.active')}}"/>
                        </a>
                        <a href="/sakin-form/{{$bina->id}}/{{$sakin->id}}" class="icon">
                            <x-icon icon="edit" fill="{{config('constants.icons.color.active')}}"/>
                        </a>
                    </td>
                </tr>
            @endforeach

        </tbody>

    </table>

    {{ $sakinler->links()}}

    @else
        <div class="notification is-warning is-light">Bu bina/yerleşke için oturan tanımı yapılmamıştır.</div>
    @endif

</div>

