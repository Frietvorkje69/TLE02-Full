@extends('layouts.app')

@section('content')
    <link rel="stylesheet" href="{{ URL::asset('home.css') }}">
    <section>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="custom-card">
                        <div class="card-header">{{ __('Dashboard') }}</div>

                        <div class="card-body">
                            @if (session('status'))
                                <div class="alert alert-success" role="alert">
                                    {{ session('status') }}
                                </div>
                            @endif

                            <div class="description">
                                <h2>Welkom bij StudyBuddy</h2>
                                <p>StudyBuddy is een platform dat studenten samenbrengt en samenwerkend leren faciliteert. Ons machine learning-algoritme helpt je de perfecte studiepartner te vinden op basis van je cijfers en vakken.</p>
                                <p>Met StudyBuddy kun je:</p>
                                <ul>
                                    <li>Verbinding maken met andere studenten die uitblinken in vakken waarin je wilt verbeteren.</li>
                                    <li>Samenwerken aan opdrachten, projecten en examenvoorbereiding.</li>
                                    <li>Kennis uitwisselen en elkaar ondersteunen in het leerproces.</li>
                                </ul>
                                <p>Begin vandaag nog en ontgrendel de kracht van samenwerkend leren met StudyBuddy!</p>
                            </div>
                        </div>
                    </div>
                    <a href="users/profile" class="buttonmatch">Naar gegevens</a>
                </div>
            </div>
        </div>
    </section>
@endsection
