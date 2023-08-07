{{-- <nav>
    <header class="d-flex justify-content-between">
        <div><a href="{{ route('home') }}">{{ config('app.name') }}</a></div>
        <div><a href="{{ route('posts.index') }}">Посты</a></div>
        <div>
            <a href="{{ route('login') }}"> Вход</a>
            <a href="{{ route('register.index') }}"> Регистрация</a>
        </div>
    </header>
</nav> --}}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <div class="container-lg">
            <a class="navbar-brand" href="{{ route('home') }}">{{ config('app.name') }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page"
                            href="{{ route('home') }}">{{ __('Главная') }}</a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('posts.index') }}" class="nav-link">{{ __('Посты') }}</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page"
                            href="{{ route('login.index') }}">{{ __('Вход') }}</a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('register.index') }}" class="nav-link">{{ __('Регистрация') }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
