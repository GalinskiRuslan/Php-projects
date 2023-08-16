@extends('layout.layout')

@section('title', 'Вход')

@section('content')
    <section>
        <div class="container">
            <div class="card-body">
                <x-form header_form="Вход" form_action="{{ route('login.store') }}" form_method="POST">
                    <div class="mb-3">
                        <x-label required>{{ __('Почта') }}</x-label>
                        <x-forms.input type="email" name="email" placeholder="email" autofocus />
                    </div>
                    <div class="mb-3">
                        <x-label required>{{ __('Пароль') }}</x-label>
                        <input type="text" name="password" placeholder="{{ __('Пароль') }}" class="form-control">
                    </div>
                    <button class="btn btn-primary" type="submit">{{ __('Войти') }}</button>
                </x-form>
            </div>
        </div>
    </section>
@endsection
