@extends('layout.layout')

@section('title', 'Login')

@section('content')
    <x-card>
        <form>
            <input type="text" name="email" placeholder="Email">
        </form>
    </x-card>
@endsection
