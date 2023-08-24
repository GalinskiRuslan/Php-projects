@extends('layout.layout')

@section('title', 'Register')


@section('content')
    <x-errors />
    <x-form header_form="Регистрация" form_action="{{ route('register.index') }}" form_method="POST">

        <x-label required>{{ __('E-mail') }} </x-label>
        <x-forms.input required type="email" name="email" placeholder="email" value="{{ old('email') }}" autofocus />
        <x-label>{{ __('Имя') }} </x-label>
        <x-forms.input name="name" placeholder="Имя" value="{{ old('name') }}" />
        <x-label required>{{ __('Пароль') }} </x-label>
        <x-forms.input required type="password" name="password" placeholder="Пароль" />
        <x-label required>{{ __('Повторите пароль') }} </x-label>
        <x-forms.input required type="password" name="password_confirmation" placeholder="Повторите пароль" />
        <x-label required>{{ __('Никнейм') }} </x-label>
        <x-forms.input required name="nickname" placeholder="никнейм" value="{{ old('nickname') }}" />
        <x-forms.button type="submit">{{ __('Зарегистрироваться') }}</x-forms.button>

    </x-form>
@endsection
