@extends('layout.layout')
@section('title', 'Создание поста')
@section('content')


    <div class="container">
        {{--  <x-errors /> --}}
        <x-form header_form="Добавление поста" form_action="{{ route('posts.store') }}" form_method="POST">
            <x-label required>Название поста</x-label><br />
            <input type="text" name="title">
            @error('title')
                <div class="small text-danger">
                    {{ $message }}
                </div>
            @enderror
            <br /><br /><br />
            <x-label required>Текст поста</x-label><br />
            <input id="x" type="hidden" name="body">

            <trix-editor input="x"></trix-editor>
            @error('body')
                <div class="small text-danger">
                    {{ $message }}
                </div>
            @enderror
            <br />

            <x-forms.button type="submit">Создать</x-forms.button>
        </x-form>
    </div>
    @push('css')
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.0/dist/trix.css">
    @endpush
    @push('js')
        <script type="text/javascript" src="https://unpkg.com/trix@2.0.0/dist/trix.umd.min.js"></script>
    @endpush
@endsection
