@extends('layout.layout')

@section('title', 'Посты')

@section('content')


    <div>
        @foreach ($posts as $post)
            <a href="{{ route('posts.show', $post->id) }}">
                <h1>{{ $post->title }}</h1>
            </a>
        @endforeach

    </div>


@endsection
