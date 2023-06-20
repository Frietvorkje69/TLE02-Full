@if(!auth())
    @extends('layouts.app')
@section('content')
    @php
        $give = $user->give;
        $take = $user->take;
    @endphp

    <link rel="stylesheet" href="{{ URL::asset('match.css') }}">
    <section>

        <div class="Subheader"> Op basis van jouw cijfers en voorkeuren zal je gematcht worden met een andere student
            via Machine learning.
            <br>
            Er wordt in ons systeem gezocht naar de beste student die bij jouw past! Dit wordt gedaan door te kijken
            naar jullie cijfers en op basis hiervan jullie te matchen als jullie voorkeuren overeenkomen.
            Deze student kan jouw helpen met het vak waar jij bijles in wil krijgen. En zelf kan jij deze student ook
            helpen met waar jij bijles in kan geven.
        </div>
        <div class="matchcard2">
            <form id="form">
                <h4>Jouw gegevens</h4>
                @if($user->give && $user->take)
                    <label class="pgreen" for="{{($user->give)}}"
                           class="col-md-4 col-form-label text-md-end">{{($user->give)}}
                        <input name="{{($user->give)}}" min="0" max="100" value="{{old("description", $user->$give)}}"
                               readonly/>
                    </label> <br>
                    <label class="pred" for="{{($user->take)}}"
                           class="col-md-4 col-form-label text-md-end">{{($user->take)}}
                        <input name="{{($user->take)}}" min="0" max="100" value="{{old("description", $user->$take)}}"
                               readonly/>
                    </label>
                    <input type="hidden" name="give" value="{{($user->give)}}" readonly/>
                    <input type="hidden" name="take" value="{{($user->take)}}" readonly/>
                    <br>
                    <br>
                    <button class="buttonsmall" type="submit">Zoeken!</button>
                @else
                    <p>No data available. Please add your data to continue.</p>
                @endif
            </form>
        </div>
        <h2 id="feedback"></h2>
        <h2 id="feedback2"></h2>
    </section>

    <script>
        let retrievedId = document.getElementById('feedback2').innerHTML;

        console.log(retrievedId);
    </script>

    <canvas id="myChart" width="300" height="200"></canvas>

    <script src="https://stud.hosted.hr.nl/1028402/knear.js"></script>
    <script src="https://stud.hosted.hr.nl/1028402/scatterplot.js"></script>
    <script src="https://stud.hosted.hr.nl/1028402/predict.js"></script>
@endsection
@else
    <meta http-equiv="refresh" content="0; url='/home'"/>
@endif
