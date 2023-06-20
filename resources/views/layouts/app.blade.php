<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>StudyBuddy</title>
    <link rel="icon" href="{{ asset('images/icon.png') }}" type="image/png">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <style>
        /* Add custom styles for the header and navigation */
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
        }

        .header {
            height: 108px; /* Increased height for the header */
            background-color: #afe373;
            display: flex;
            align-items: center;
            justify-content: center; /* Center align the header content */
            padding: 0 20px;
            font-weight: bold; /* Make the header text bold */
            font-size: 24px; /* Increase the font size */
        }

        .navigation {
            width: 250px;
            height: 100vh;
            background-color: #6ba240;
            color: #333;
            padding: 20px;
            position: fixed;
            left: -250px;
            top: 0;
            transition: left 0.3s ease-in-out;
        }

        .navigation.open {
            left: 0;
        }

        .connect-button {
            background-color: #afce88;
            color: #fff;
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
            float: right;
        }

        .connect-button:hover {
            background-color: #8fbf55;
        }


        .navigation .custom-card {
            background-color: #C5EC8B;
            padding: 5px;
            margin: 5px;
            width: 100%; /* Set the width to 100% */
            height: 2cm;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            cursor: pointer;
        }

        .navigation .custom-card:hover {
            background-color: #096C09;
        }

        .navigation .custom-card a {
            color: #333;
            text-decoration: none;
            font-weight: bold;
            font-size: 18px; /* Increase the font size */
        }

        .card-deck {
            display: flex;
            flex-wrap: wrap;
            margin: -5px;
        }

        /*.card {*/
        /*    flex-basis: calc(33.33% - 10px);*/
        /*    margin: 5px;*/
        /*    width: 4cm;*/
        /*    height: 2cm;*/
        /*}*/

        .custom-card {
            background-color: #fff;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .custom-card .card-header {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .custom-card .card-body {
            font-size: 16px;
            line-height: 1.5;
        }

        .custom-card .description {
            margin-bottom: 20px;
        }

        .custom-card .description h2 {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .custom-card .description p {
            margin-bottom: 10px;
        }

        .custom-card .description ul {
            margin-left: 20px;
            margin-bottom: 10px;
        }

        .custom-card .description li {
            margin-bottom: 5px;
        }



    </style>

    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>
<body>
<div id="app">
    <!-- Empty Header Bar -->
    <div class="header">STUDYBUDDY</div>


    <!-- Navigation Bar -->
    <div class="navigation" id="navigation">
        <!-- Navigation content goes here -->
        <div class="custom-card">
            <a href="/match">Match</a>
        </div>
        <div class="custom-card">
            <a href="/users/profile">Account</a>
        </div>
        <div class="custom-card">
            <a href="/home">Home</a>
        </div>
        @guest
        @if (Route::has('login'))
        <div class="custom-card">
                <a href="{{ route('login') }}">{{ __('Inloggen') }}</a>
        </div>
        <div class="custom-card">
                <a  href="{{ route('register') }}">{{ __('Registreren') }}</a>
        </div>
        @endif
        @else
            <div class="custom-card">
                <a href="{{ route('logout') }}"
                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                    {{ __('Logout') }}
                </a>
                <form id="logout-form" action="{{ route('Uitloggen') }}" method="POST" class="d-none">
                    @csrf
                </form>
            </div>
    @endguest
        <!-- Right Side Of Navbar -->
        <ul>

        </ul>
    </div>

    <main class="py-4">
        @yield('content')
    </main>
</div>

<script>
    var navigation = document.getElementById('navigation');
    var isNavigationOpen = false;
    var threshold = 250;

    document.addEventListener('mousemove', function (event) {
        var mouseX = event.clientX;
        if (mouseX <= threshold && !isNavigationOpen) {
            navigation.classList.add('open');
            isNavigationOpen = true;
        } else if (mouseX > threshold && isNavigationOpen) {
            navigation.classList.remove('open');
            isNavigationOpen = false;
        }
    });
</script>

</body>
</html>
