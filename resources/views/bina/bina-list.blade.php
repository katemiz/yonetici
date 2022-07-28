<div class="section container">

    <header class="my-6">
        <h1 class="title has-text-weight-light is-size-1">Binalarım</h1>
        <h2 class="subtitle has-text-weight-light">Yöneticiliğini yaptığım binalar</h2>
    </header>

    {{-- NOTIFICATION --}}
    @if ($notification)
        <div class="notification {{$notification["type"]}} is-light">{!! $notification["message"] !!}</div>
    @endif

    <x-table-filter add="Bina Ekle" addlink="/bina-form" showsearch="{{$binalar->total() > 0 ? true:false}}"/>

    @if ($binalar->total() > 0)

    <!-- ************************ -->
    <!-- TABLE                    -->
    <!-- ************************ -->
    <table class="table is-fullwidth">

        <caption>Yönettiğiniz <b>{{ $binalar->total() }}</b> bina vardır</caption>

        <thead>
            <tr>

                <th>&nbsp;</th>

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

            @foreach ($binalar as $bina)

            <tr class="{{ $selected_bina && $selected_bina == $bina->id ? 'is-selected' :''}}">

                <td>
                    <a href="/select-active/{{$bina->id}}">
                        Seç
                    </a>
                </td>

                <td>
                <a href="/bina-view/{{$bina->id}}">
                    {{ $bina->name }}
                </a>
                </td>

                <td>
                    {{ $bina->created_at }}
                </td>


                <td class="has-text-right">
                <a href="/bina-view/{{$bina->id}}" class="icon">
                    <x-icon icon="eye" fill="{{config('constants.icons.color.active')}}"/>

                </a>
                <a href="/bina-form/{{$bina->id}}" class="icon">
                    <x-icon icon="edit" fill="{{config('constants.icons.color.active')}}"/>
                </a>
                </td>
            </tr>

            @endforeach

        </tbody>

    </table>


    {{ $binalar->links()}}



    @else
        <div class="notification is-warning is-light">Yönettiğiniz bina bulunmamaktadır.</div>
    @endif

</div>
