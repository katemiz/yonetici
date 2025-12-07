<footer class="footer has-background-light">

    <div class="columns ">
        <div class="column has-text-left has-text-centered-mobile">
            <img src="/images/{{config('constants.company.logo')}}" width="28px" alt="Company Icon"><br>
            <a href="{{config('constants.company.link')}}" class="has-text-weight-light">
                {{config('constants.company.name')}}
            </a>
            <p class="has-text-weight-light is-size-7">{{config('constants.company.motto')}}</p>
        </div>

        <div class="column has-text-centered has-text-centered-mobile">
            {{config('constants.app.title')}}
        </div>

        <div class="column has-text-right has-text-centered-mobile">
            {{config('constants.app.copyright')}}<br>
            <span class="is-size-7 has-text-grey">{{config('constants.app.version')}}</span>
        </div>
    </div>

</footer>