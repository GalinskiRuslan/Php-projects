@extends('layout.layout')

@section('title', $post->title)

@section('content')


    <div>
        <x-button-link href="{{ route('posts.edit', $post->id) }}">Редактировать!</x-button-link>

        <h1>{{ $post->title }}</h1>

        <p>{{ $post->body }}</p>

    </div>


@endsection
