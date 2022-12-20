<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <link  rel="icon" type="image/svg+xml" href="{{ asset(Config::get('constants.favicon')) }}" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link  href="{{ asset('/css/app.css') }}" rel="stylesheet" />
    <link  href="{{ asset('/css/bulma.css') }}" rel="stylesheet" />
    <script src="{{ asset('/js/js.js') }}"></script>

    <link rel="stylesheet" href="{{ asset('/css/sweetalert2_min.css') }}">
    <script src="{{ asset('/js/sweetalert2.min.js') }}"></script>

    <style>
        .pbreak {
            page-break-after: always;
        }
        .makbuz {
            border:1px solid black;
        }
        .rotate {
            transform: rotate(-90deg);
        }
    </style>
  </head>
    <body onload="window.print()">



        <div class="section pbreak">


    <x-makbuz :bina="$bina" :record="$record" :sakinler="$sakinler" :yazi="$yazi"/>
    <x-makbuz :bina="$bina" :record="false"/>
        </div>















  </body>
</html>
