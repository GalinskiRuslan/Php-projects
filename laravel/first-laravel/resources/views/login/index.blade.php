@extends('layout.layout')

@section('title', 'Вход')

@section('content')
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 offset-md-3">
                    <x-card>
                        <div class="card-header">
                            <h4>{{ __('Вход') }}</h4>
                        </div>
                        <div class="card-body">
                            <form action="{{ route('login.store') }}" method="POST">
                                <div class="mb-3">
                                    <x-label required>{{ __('Почта') }}</x-label>
                                    <input type="email" name="email" placeholder="Email" class="form-control" autofocus>
                                </div>
                                <div class="mb-3">
                                    <x-label required>{{ __('Пароль') }}</x-label>
                                    <input type="text" name="password" placeholder="{{ __('Пароль') }}"
                                        class="form-control">
                                </div>
                                <button class="btn btn-primary" type="submit">{{ __('Войти') }}</button>
                            </form>
                        </div>
                        <x-forms.input />
                    </x-card>
                </div>
            </div>
        </div>
    </section>
@endsection
