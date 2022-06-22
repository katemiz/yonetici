<x-app-layout>

    <section class="section container">


        <header class="my-6">
            <h1 class="title has-text-weight-light is-size-1">Yönettiğim Binalarım</h1>
            <h2 class="subtitle has-text-weight-light">{{config('constants.app.welcome_subtitle')}}</h2>
        </header>


        @if (session('selected_bina'))

        <p>Selected</p>

        @else

        <h1 class="title">{{ __('Dashboard') }}</h1>
        <div class="notification is-success">
                    You're logged in!
        </div>

        @endif


    </section>
</x-app-layout>
