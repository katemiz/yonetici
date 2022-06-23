<div class="section container">

    <script src="{{ asset('/js/delete.js') }}"></script>


    <header class="my-6">
        <h1 class="title has-text-weight-light is-size-1">Harcama Kalemleri</h1>
        <h2 class="subtitle has-text-weight-light">{{$bina->name}} için harcama/fatura kalemleri</h2>
    </header>

    {{-- NOTIFICATION --}}
    @if ($notification)
        <div class="notification {{$notification["type"]}} is-light">{!! $notification["message"] !!}</div>
    @endif

    <x-table-filter add="Kalem Ekle" addlink="/kalem-form/{{ $bina->id }}" showsearch="{{$kalemler->total() > 0 ? true:false}}"/>

    @if ($kalemler->total() > 0)

    <!-- ************************ -->
    <!-- TABLE                    -->
    <!-- ************************ -->

    <table class="table is-fullwidth">

        <caption>Bu yerleşke için <b>{{ $kalemler->total() }}</b> harcama kalem tanımı bulunmaktadır</caption>

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

            @foreach ($kalemler as $kalem)
                <tr>
                    <td>{{ $kalem->title }}</td>

                    <td>{{ $kalem->created_at }}</td>

                    <td class="has-text-right">

                        <a href="/kalem-form/{{$bina->id}}/{{$kalem->id}}" class="icon">
                            <x-icon icon="edit" fill="{{config('constants.icons.color.active')}}"/>
                        </a>


                        <a onclick="swalConfirm('kalem','{{$bina->id}}','{{ $kalem->id }}')" class="icon">
                            <x-icon icon="delete" fill="{{config('constants.icons.color.danger')}}"/>
                        </a>

                    </td>
                </tr>
            @endforeach

        </tbody>

    </table>

    {{ $kalemler->links()}}

    @else
        <div class="notification is-warning is-light">Bu bina için harcama kalem tanımı yapılmamıştır.</div>
    @endif

</div>

