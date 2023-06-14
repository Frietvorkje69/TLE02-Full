@extends('layouts.app')
@section('content')
    <section>
        <h1>STUDY BUDDY RECOMMENDER</h1>
        <p>Vul je cijfers in en vind een study buddy!</p>
        <form id="form">
            <label for="wiskunde" class="col-md-4 col-form-label text-md-end">{{ __('Wiskunde') }}
                <input type="number" name="wiskunde" min="0" max="100" value="{{old("description", $user->wiskunde_a)}}" />
            </label>
            <label for="geschiedenis" class="col-md-4 col-form-label text-md-end">{{ __('Geschiedenis') }}
                <input type="number" name="geschiedenis" min="0" max="100" value="{{old("description", $user->geschiedenis)}}" />
            </label>
            <label for="nederlands" class="col-md-4 col-form-label text-md-end">{{ __('Nederlands') }}
                <input type="number" name="nederlands" min="0" max="100" value="{{old("description", $user->nederlands)}}" />
            </label>
            <label for="engels" class="col-md-4 col-form-label text-md-end">{{ __('Engels') }}
                <input type="number" name="engels" min="0" max="100" value="{{old("description", $user->engels)}}" />
            </label>
            <button type="submit">Find your match!</button>
        </form>
        <div id="feedback"></div>
        <div id="feedback2"></div>
        <div id="feedback3"></div>
        <div id="feedback4"></div>
    </section>
    <canvas id="myChart" width="300" height="200"></canvas>

    <script src="{{ asset('css/app.css') }}"></script>
    <script src="https://stud.hosted.hr.nl/1028402/knear.js"></script>
    <script src="https://stud.hosted.hr.nl/1028402/scatterplot.js"></script>
    <script src="https://stud.hosted.hr.nl/1028402/predict.js"></script>
@endsection
