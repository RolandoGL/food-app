<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet">
</head>

<body class="antialiased">
    <div id="app">
        <app></app>      
    </div>
    <style scoped>
        * {
            margin: 0;
            padding: 0;
            font-family: 'Roboto Condensed', sans-serif;
        }
    </style>
    <script src=" {{ asset('js/app.js') }} "></script>
</body>

</html>
