<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Your Laravel App')</title>
    @vite('resources/css/app.css')
</head>

<body>
    <header>
        <nav>
            <!-- Your navigation menu goes here -->
        </nav>
    </header>

    <main>
        @yield('content')
    </main>
</body>

</html>
