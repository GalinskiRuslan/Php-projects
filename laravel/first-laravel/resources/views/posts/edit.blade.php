@extends('layout.layout')


@section('title', 'Редактирование поста')

@section('content')
    <div class="container">
        <h2> Изменение поста</h2>
        <form>
            <x-label required>Название поста</x-label><br />
            <input type="text" name="title" value={{ $post->title }}><br /><br /><br />
            <x-label required>Текст поста</x-label><br />
            <input id="x" type="hidden" name="content" value={{ $post->body }}>
            <trix-editor input="x"></trix-editor><br />
            <x-forms.button type="submit">Изменить</x-forms.button>

        </form>
    </div>
    @push('css')
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.0/dist/trix.css">
    @endpush
    @push('js')
        <script type="text/javascript" src="https://unpkg.com/trix@2.0.0/dist/trix.umd.min.js"></script>
    @endpush
@endsection
