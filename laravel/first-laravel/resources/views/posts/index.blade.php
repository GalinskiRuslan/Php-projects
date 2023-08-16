@extends('layout.layout')

@section('title', 'Посты')

@section('content')


    <div>
        <x-button-link href="{{ route('posts.create') }}">Добавить</x-button-link>
        @foreach ($posts as $post)
            <a href="{{ route('posts.show', $post->id) }}">
                <h1>{{ $post->title }}</h1>
            </a>
        @endforeach

    </div>


@endsection
