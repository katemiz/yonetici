<x-app-layout>

    <div class="section container">

        <header class="my-6">
            <h1 class="title has-text-weight-light is-size-1">{{ $bina ? 'Okuma Güncelle' : 'Yeni Okuma Ekle' }}</h1>
        </header>

        <div class="column box mt-6">

            <form action="{{ $bina ? '/okuma-upd/'.$bina->id : '/okuma-add' }}" method="POST" enctype="multipart/form-data">
            @csrf

            <table class="table is-fullwidth">
                <tr>
                    <th>No</th>
                    <th>Bina Sakini</th>
                    <th>Önceki Okuma</th>
                    <th>Son Okunan Değer</th>
                </tr>

            @foreach ($bina->sakinler as $sakin)

            <tr>
                <th>{{$sakin->door_no}}</th>
                <th>{{ $sakin->name}} {{$sakin->lastname}}</th>
                <th>234</th>
                <td>
                <input class="input" type="text" name="binaname"
                placeholder="Son Okuma Değeri"
                value="{{$bina ? $bina->name : ''}}">
                </td>
            </tr>

            @endforeach
        </table>

















                <div class="column has-text-right">
                    <button type="submit" class="button is-link is-light">{{$bina ? 'Güncelle' : 'Kaydet'}}</button>
                </div>

            </form>

        </div>
    </div>

</x-app-layout>
