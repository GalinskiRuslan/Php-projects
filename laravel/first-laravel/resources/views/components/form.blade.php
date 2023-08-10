@props(['header_form', 'form_action', 'form_method', 'form_items'])

<section>
    <div class="container">
        <div class="row">
            <div class="col-10 col-md-5 offset-md-3">
                <x-card>
                    <div class="card-header">
                        <h4>{{ $header_form }}</h4>
                    </div>
                    <div class="card-body">
                        <form action={{ $form_action }} method={{ $form_method }}>
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
                            @foreach ($form_items as $item)
                                <div class="mb-3">
                                    <x-label {{ $item->required }}>{{ $item->label }}</x-label>
                                    <input type={{ $item->input_type }} name={{ $item->input_name }}
                                        placeholder={{ $item->input_placeholder }} class="form-control"
                                        placeholder={{ $item->input_placeholder }}>
                                </div>
                            @endforeach
                        </form>
                    </div>

                </x-card>
            </div>
        </div>
    </div>
</section>
