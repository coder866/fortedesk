<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        @prod
          <link rel="stylesheet" href="{{vite('app.css')}}">
          <script type="module" src="{{vite('app.js')}}"></script>
        @else
            <script type="module" src="http://localhost:3001/@vite/client"></script>
            <script type="module" src="http://localhost:3001/resources/js/app.js"></script>
        @endprod

        <title class="app-title">ForteDesk</title>
        
    </head>
    <body>
        <div class="content">
            <div id="app"></div>
        </div>
    </body>
</html>
</div>
