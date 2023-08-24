@if ($errors->any())
    <div class="alert alert-danger small p-2 col-10 col-md-5 offset-md-3">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
