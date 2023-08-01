<nav>
    <header class="d-flex justify-content-between">
        <div><a href="{{ route('home') }}">{{ config('app.name') }}</a></div>
        <div><a href="{{ route('posts.index') }}">Посты</a></div>
        <div>
            <a href="{{ route('login') }}"> Login</a>
            <a href="{{ route('register.index') }}"> Register</a>
        </div>
    </header>
</nav>
