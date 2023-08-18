@props(['header_form' => '', 'form_action', 'form_method' => 'GET', 'form_items'])

@php($form_method = strtoupper($form_method))

@php($_method = in_array($form_method, ['GET', 'POST']))
<section>
    <div class="container">
        <div class="row">
            <div class="col-10 col-md-5 offset-md-3">
                <x-card>
                    <div class="card-header">
                        <h4>{{ $header_form }}</h4>
                    </div>
                    <div class="card-body">
                        <form action={{ $form_action }} method={{ $_method ? $form_method : 'POST' }}>
                            @unless ($_method)
                                @method($form_method)
                            @endunless
                            @if ($form_method !== 'GET')
                                @csrf
                            @endif
                            {{ $slot }}
                        </form>
                    </div>

                </x-card>
            </div>
        </div>
    </div>
</section>
