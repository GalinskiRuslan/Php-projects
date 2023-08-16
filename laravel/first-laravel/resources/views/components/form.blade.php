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
                            @csrf
                            {{ $slot }}
                        </form>
                    </div>

                </x-card>
            </div>
        </div>
    </div>
</section>
