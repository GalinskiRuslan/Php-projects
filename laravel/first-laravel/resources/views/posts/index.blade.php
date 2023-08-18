@extends('layout.layout')

@section('title', 'Посты')

@section('content')


    <div>
        <form action="{{ route('posts.index') }}" class="col-10 col-md-5 offset-md-3"> <x-forms.input
                value="{{ request('search') }}" name="search" placeholder="Поиск" />
        </form>
        <x-button-link href="{{ route('posts.create') }}">Добавить</x-button-link>
        @foreach ($posts as $post)
            <a href="{{ route('posts.show', $post->id) }}">
                <h1>{{ $post->title }}</h1>
            </a>
        @endforeach

    </div>


@endsection
