@extends('layouts.app')
@section('title', 'Edit Profile')
@section('content')

    <link rel="stylesheet" href="{{ URL::asset('profile.css') }}">
    <div class="flex1">
        <div class="bigbox">
            @if (session('alert'))
                <div class="alert alert-success" role="alert">
                    {{ session('alert') }}
                </div>
            @endif

            <div class="card">
                <div class="cardheader">
                    <h1>Profiel Bijwerken</h1>
                </div>

                <div class="card-body">
                    <div>
                        <div class="flex1">
                            <div class="gegevens">
                                <h3>Gegevens</h3>
                                <div>
                                    <form action="/users/{{$user->id}}" method="POST">                                @csrf
                                        <input id="id"
                                               name="id"
                                               type="hidden"
                                               value="{{$user->id}}}">
                                        <label for="name">Naam: </label>
                                        <input id="name"
                                               name="name"
                                               type="text"
                                               value="{{old("name", $user->name)}}"
                                               class="input-group input-group-text @error("name") is-invalid @enderror">
                                        @error('name')
                                        <div class="alert alert-danger">{{ $message }}</div>
                                        @enderror
                                        <br>
                                        <label for="email">E-mail: </label>
                                        <input id="email"
                                               name="email"
                                               type="text"
                                               value="{{old("description", $user->email)}}"
                                               class="input-group input-group-text @error("email") is-invalid @enderror">
                                        @error("description")
                                        <div class="alert alert-danger">{{ $message }}</div>
                                        @enderror
                                        <br>
                                        <label for="password">Wachtwoord: </label>
                                        <input id="password"
                                               name="password"
                                               type="password"
                                               value=""
                                               class="input-group input-group-text @error("password") is-invalid @enderror">
                                        @error("description")
                                        <div class="alert alert-danger">{{ $message }}</div>
                                        @enderror
                                        @if ($errors->any())
                                            <div class="alert alert-danger">
                                                <ul>
                                                    @foreach ($errors->all() as $error)
                                                        <li>{{ $error }}</li>
                                                    @endforeach
                                                </ul>
                                            </div>
                                    @endif
                                </div>
                                <br>
                                <hr>
                                <br>
                                <div class="bijles">
                                    <h3>Bijles</h3>
                                    <div class="row mb-3">
                                        <label for="take"
                                               class="col-md-4 col-form-label text-md-end">{{ __('Ik wil bijles krijgen in:') }}</label>
                                        <div class="col-md-6">
                                            <select id="take"
                                                    class="form-control @error('give') is-invalid @enderror"
                                                    name="take">
                                                <option value="nederlands">Nederlands</option>
                                                <option value="engels">Engels</option>
                                                <option value="wiskunde_a">Wiskunde A</option>
                                                <option value="wiskunde_b">Wiskunde B</option>
                                                <option value="frans">Frans</option>
                                                <option value="duits">Duits</option>
                                                <option value="spaans">Spaans</option>
                                                <option value="maatschappijleer">Maatschappijleer</option>
                                                <option value="geschiedenis">Geschiedenis</option>
                                                <option value="biologie">Biologie</option>
                                                <option value="aardrijkskunde">Aardrijkskunde</option>
                                                <option value="scheikunde">Scheikunde</option>
                                                <option value="natuurkunde">Natuurkunde</option>
                                                <option value="economie">Economie</option>
                                                <option value="filosofie">Filosofie</option>
                                            </select>

                                            @error('take')
                                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $take }}</strong>
                                    </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row mb-3">
                                        <label for="give"
                                               class="col-md-4 col-form-label text-md-end">{{ __('Ik wil bijles geven in:') }}</label>
                                        <div class="col-md-6">
                                            <select id="give"
                                                    class="form-control @error('give') is-invalid @enderror"
                                                    name="give">
                                                <option value="nederlands">Nederlands</option>
                                                <option value="engels">Engels</option>
                                                <option value="wiskunde_a">Wiskunde A</option>
                                                <option value="wiskunde_b">Wiskunde B</option>
                                                <option value="frans">Frans</option>
                                                <option value="duits">Duits</option>
                                                <option value="spaans">Spaans</option>
                                                <option value="maatschappijleer">Maatschappijleer</option>
                                                <option value="geschiedenis">Geschiedenis</option>
                                                <option value="biologie">Biologie</option>
                                                <option value="aardrijkskunde">Aardrijkskunde</option>
                                                <option value="scheikunde">Scheikunde</option>
                                                <option value="natuurkunde">Natuurkunde</option>
                                                <option value="economie">Economie</option>
                                                <option value="filosofie">Filosofie</option>
                                            </select>

                                            @error('give')
                                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $give }}</strong>
                                    </span>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>

                            <div class="cijfers">
                                <div class="row mb-3">
                                    <h3 class="col-md-4 text-md-center">Cijferlijst</h3>
                                </div>

                                <div class="row mb-3">
                                    <text class="text-md-center">
                                        Graag de cijferlijst invullen zonder de komma. Als voorbeeld, ik heb een 6,8 voor
                                        Nederlands dus ik vul 68 in. Indien je een vak uit deze lijst niet hebt, laat dit
                                        veld
                                        leeg.
                                    </text>
                                </div>

                                <div class="row mb-3">
                                    <label for="nederlands"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Nederlands') }}</label>

                                    <div class="col-md-6">
                                        <input id="nederlands" type="number"
                                               class="form-control @error('nederlands') is-invalid @enderror"
                                               name="nederlands"
                                               min="10" max="100" step="1"
                                               value="{{old("description", $user->nederlands)}}">

                                        @error('nederlands')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $nederlands }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="engels"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Engels') }}</label>

                                    <div class="col-md-6">
                                        <input id="engels" type="number"
                                               class="form-control @error('engels') is-invalid @enderror" name="engels"
                                               min="10"
                                               max="100" step="1" value="{{old("description", $user->engels)}}">

                                        @error('engels')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $engels }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="wiskunde_a"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Wiskunde A') }}</label>

                                    <div class="col-md-6">
                                        <input id="wiskunde_a" type="number"
                                               class="form-control @error('wiskunde_a') is-invalid @enderror"
                                               name="wiskunde_a"
                                               min="10" max="100" step="1"
                                               value="{{old("description", $user->wiskunde_a)}}">

                                        @error('wiskunde_a')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $wiskunde_a }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="wiskunde_b"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Wiskunde B') }}</label>

                                    <div class="col-md-6">
                                        <input id="wiskunde_b" type="number"
                                               class="form-control @error('wiskunde_b') is-invalid @enderror"
                                               name="wiskunde_b"
                                               min="10" max="100" step="1"
                                               value="{{old("description", $user->wiskunde_b)}}">

                                        @error('wiskunde_b')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $wiskunde_b }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="frans" class="col-md-4 col-form-label text-md-end">{{ __('Frans') }}</label>

                                    <div class="col-md-6">
                                        <input id="frans" type="number"
                                               class="form-control @error('frans') is-invalid @enderror" name="frans"
                                               min="10"
                                               max="100" step="1" value="{{old("description", $user->frans)}}">

                                        @error('frans')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $frans }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="duits" class="col-md-4 col-form-label text-md-end">{{ __('Duits') }}</label>

                                    <div class="col-md-6">
                                        <input id="duits" type="number"
                                               class="form-control @error('duits') is-invalid @enderror" name="duits"
                                               min="10"
                                               max="100" step="1" value="{{old("description", $user->duits)}}">

                                        @error('duits')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $duits }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="spaans"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Spaans') }}</label>

                                    <div class="col-md-6">
                                        <input id="spaans" type="number"
                                               class="form-control @error('spaans') is-invalid @enderror" name="spaans"
                                               min="10"
                                               max="100" step="1" value="{{old("description", $user->spaans)}}">

                                        @error('spaans')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $spaans }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="maatschappijleer"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Maatschappijleer') }}</label>

                                    <div class="col-md-6">
                                        <input id="maatschappijleer" type="number"
                                               class="form-control @error('maatschappijleer') is-invalid @enderror"
                                               name="maatschappijleer" min="10" max="100" step="1"
                                               value="{{old("description", $user->maatschappijleer)}}">

                                        @error('maatschappijleer')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $maatschappijleer }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="geschiedenis"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Geschiedenis') }}</label>

                                    <div class="col-md-6">
                                        <input id="geschiedenis" type="number"
                                               class="form-control @error('geschiedenis') is-invalid @enderror"
                                               name="geschiedenis"
                                               min="10" max="100" step="1"
                                               value="{{old("description", $user->geschiedenis)}}">

                                        @error('geschiedenis')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $geschiedenis }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="biologie"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Biologie') }}</label>

                                    <div class="col-md-6">
                                        <input id="biologie" type="number"
                                               class="form-control @error('biologie') is-invalid @enderror" name="biologie"
                                               min="10" max="100" step="1" value="{{old("description", $user->biologie)}}">

                                        @error('biologie')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $biologie }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="aardrijkskunde"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Aardrijkskunde') }}</label>

                                    <div class="col-md-6">
                                        <input id="aardrijkskunde" type="number"
                                               class="form-control @error('aardrijkskunde') is-invalid @enderror"
                                               name="aardrijkskunde" min="10" max="100" step="1"
                                               value="{{old("description", $user->aardrijkskunde)}}">

                                        @error('aardrijkskunde')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $aardrijkskunde }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="scheikunde"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Scheikunde') }}</label>

                                    <div class="col-md-6">
                                        <input id="scheikunde" type="number"
                                               class="form-control @error('scheikunde') is-invalid @enderror"
                                               name="scheikunde"
                                               min="10" max="100" step="1"
                                               value="{{old("description", $user->scheikunde)}}">

                                        @error('scheikunde')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $scheikunde }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="natuurkunde"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Natuurkunde') }}</label>

                                    <div class="col-md-6">
                                        <input id="natuurkunde" type="number"
                                               class="form-control @error('natuurkunde') is-invalid @enderror"
                                               name="natuurkunde" min="10" max="100" step="1"
                                               value="{{old("description", $user->natuurkunde)}}">

                                        @error('natuurkunde')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $natuurkunde }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="economie"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Economie') }}</label>

                                    <div class="col-md-6">
                                        <input id="economie" type="number"
                                               class="form-control @error('economie') is-invalid @enderror" name="economie"
                                               min="10" max="100" step="1" value="{{old("description", $user->economie)}}">

                                        @error('economie')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $economie }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="filosofie"
                                           class="col-md-4 col-form-label text-md-end">{{ __('Filosofie') }}</label>

                                    <div class="col-md-6">
                                        <input id="filosofie" type="number"
                                               class="form-control @error('filosofie') is-invalid @enderror"
                                               name="filosofie"
                                               min="10" max="100" step="1" value="{{old("description", $user->filosofie)}}">

                                        @error('filosofie')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $filosofie }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                                <input class="btn btn-primary" type="submit" value="Sla gegevens op">
                            </div>
                        </div>

                        <br>
                        @can('delete', $user)
                            <div class="card">
                                <div class="card-header bg-warning">
                                    <h1>Delete account</h1>
                                </div>
                                <div class="card-body">
                                    <h5>Are you sure you want to delete your account, {{$user->name}}? We will miss you..
                                        :(</h5>
                                    <br>
                                    <form action="{{route('users.destroy', $user->id)}}" method="POST">
                                        @method('DELETE')
                                        @csrf

                                        <input id="id"
                                               name="id"
                                               type="hidden"
                                               value="{{$user->id}}">
                                        <input type="submit" value="Yes, I'm sure" class="btn btn-warning">
                                    </form>
                                </div>
                            </div>
                        @endcan
                    </div>
@endsection
