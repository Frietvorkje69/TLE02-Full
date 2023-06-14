@extends('layouts.app')

@section('content')
    <section>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card-deck">
                        @foreach ($users as $user)
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">{{ $user->name }}</h5>
                                    <p class="card-text">Geeft hulp in: {{ $user->give}}</p>
                                    <p class="card-text">Wilt hulp met: {{ $user->take}}</p>
                                </div>
                                <div class="card-footer">
                                    <button class="connect-button">Connect</button>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
