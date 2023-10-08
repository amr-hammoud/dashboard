<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard.io</title>
    @vite('resources/css/app.css')
</head>

<body class="h-full w-full">
    <header>
        <div class="bg-primary-700 h-fit px-5 py-5">
            <div class="flex flex-wrap content-center gap-3">
                <div class="flex flex-wrap content-center">
                    <img class="h-6" src="{{ asset('icons/logo_white.svg') }}" alt="logo" />
                </div>
                <div class="flex flex-wrap content-center text-3xl text-neutral-50 font-coolvetica">Dashboard.io</div>
            </div>
        </div>
    </header>

    <main class="h-full w-full">
        @yield('content')
    </main>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    @vite('resources/js/app.js')
</body>

</html>
