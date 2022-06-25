<div class="section container">

    <header class="my-6">
        <h1 class="title has-text-weight-light is-size-1">Bina Hizmet Bedelleri</h1>
        <h2 class="subtitle has-text-weight-light">Sabit ve/veya sayaçlı hizmet/ürünlere ait bedeller</h2>
    </header>

    <a href="/bina-view/{{$bina->id}}">
        <span class="icon-text">
            <span class="icon">
                <x-icon icon="arrow-back" fill="{{config('constants.icons.color.active')}}"/>
            </span>
            <span>Geri<span>
        </span>
    </a>

    {{-- NOTIFICATION --}}
    @if ($notification)
        <div class="notification {{$notification["type"]}} is-light">{!! $notification["message"] !!}</div>
    @endif

    <x-table-filter add="Ürün/Hizmet Bedeli Ekle" addlink="/bedel-form/{{$bina->id}}" showsearch="{{$bedeller->total() > 0 ? true:false}}"/>

    @if ($bedeller->total() > 0)

    <!-- ************************ -->
    <!-- TABLE                    -->
    <!-- ************************ -->
    <table class="table is-fullwidth">

        <caption>Toplam <b>{{ $bedeller->total() }}</b> ürün/hizmet bedeli vardır</caption>

        <thead>
            <tr>

                <th>Hizmet/Ürün Tanımı</th>
                <th>Hizmet/Ürün Türü</th>
                <th>Birimi</th>
                <th>Bedel</th>

                {{-- <th>
                    <span class="icon-text" wire:click="sortBy('title')">
                        <span class="icon {{ $sortDirection === 'asc' ? 'is-hidden' : ''}}">
                            <x-icon icon="arrow-up" fill="{{config('constants.icons.color.active')}}"/>
                        </span>
                        <span class="icon {{ $sortDirection === 'desc' ? 'is-hidden' : ''}}">
                            <x-icon icon="arrow-down" fill="{{config('constants.icons.color.active')}}"/>
                        </span>
                        <span>İsim</span>
                    </span>
                </th> --}}

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

            @foreach ($bedeller as $bedel)
                <tr>
                    <td>{{ $bedel->title }}</td>
                    <td>{{ $bedel->tur }}</td>
                    <td>{!! $bedel->unit !!}</td>
                    <td>{{ $bedel->bedel }}</td>
                    <td>{{ $bedel->created_at }}</td>

                    <td class="has-text-right">
                        <a href="/bedel-form/{{$bina->id}}/{{$bedel->id}}" class="icon">
                            <x-icon icon="edit" fill="{{config('constants.icons.color.active')}}"/>
                        </a>
                    </td>
                </tr>
            @endforeach

        </tbody>

    </table>


    {{ $bedeller->links()}}



    @else
        <div class="notification is-warning is-light">Yönettiğiniz bina bulunmamaktadır.</div>
    @endif

</div>
