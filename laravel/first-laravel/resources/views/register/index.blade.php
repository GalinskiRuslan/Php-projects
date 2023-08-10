@extends('layout.layout')

@section('title', 'Register')

$form_items = [
'email' => 'email',
'password' => 'password',
'password_confirmation' => 'password_confirmation',
];

@section('content')
    <h1>Register</h1>
    <form>
        <input type="text" name="email" placeholder="Email">
    </form>
    {{-- <x-form header_form="Регистрация" form_action="{{ route('register.store') }}" form_method="POST"
        form_items= "['email', 'password', 'password_confirmation']" /> --}}
@endsection
