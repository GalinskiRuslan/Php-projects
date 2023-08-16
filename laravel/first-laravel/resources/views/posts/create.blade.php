@extends('layout.layout')
@section('title', 'Создание поста')
@section('content')
    <div class="container">
        <h2> Добавление поста</h2>
        <form>
            <x-label required>Название поста</x-label><br />
            <input type="text" name="title"><br /><br /><br />
            <x-label required>Текст поста</x-label><br />
            <input id="x" type="hidden" name="content">
            <trix-editor input="x"></trix-editor><br />
            <x-forms.button type="submit">Создать</x-forms.button>
        </form>
    </div>
    @push('css')
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.0/dist/trix.css">
    @endpush
    @push('js')
        <script type="text/javascript" src="https://unpkg.com/trix@2.0.0/dist/trix.umd.min.js"></script>
    @endpush
@endsection
