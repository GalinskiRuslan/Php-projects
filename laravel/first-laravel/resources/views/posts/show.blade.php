@extends('layout.layout')

@section('title', $post->title)

@section('content')


    <div>


        <h1>{{ $post->title }}</h1>

        <p>{{ $post->body }}</p>

    </div>


@endsection