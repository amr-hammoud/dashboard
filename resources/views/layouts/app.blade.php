<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard.io</title>
    @vite('resources/css/app.css')
</head>

<body class="h-screen w-full">
    <header>
        <nav>
            <!-- Your navigation menu goes here -->
        </nav>
    </header>

    <main class="h-full w-screen">
        @yield('content')
    </main>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    @vite('resources/js/app.js')
</body>

</html>
