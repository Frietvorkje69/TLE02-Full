<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new user as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect user after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],

//            'nederlands' => ['min:0', 'max:100'],
//            'engels' => ['min:0', 'max:100'],
//            'duits' => ['min:0', 'max:100'],
//            'frans' => ['min:0', 'max:100'],
//            'spaans' => ['min:0', 'max:100'],
//            'wiskunde_a' => ['min:0', 'max:100'],
//            'wiskunde_b' => ['min:0', 'max:100'],
//            'biologie' => ['min:0', 'max:100'],
//            'aardrijkskunde' => ['min:0', 'max:100'],
//            'scheikunde' => ['min:0', 'max:100'],
//            'natuurkunde' => ['min:0', 'max:100'],
//            'economie' => ['min:0', 'max:100'],
//            'filosofie' => ['min:0', 'max:100'],
//            'maatschappijleer' => ['min:0', 'max:100'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
//            'nederlands' => $data['nederlands'],
//            'engels' => $data['engels'],
//            'duits' => $data['duits'],
//            'frans' => $data['frans'],
//            'spaans' => $data['spaans'],
//            'wiskunde_a' => $data['wiskunde_a'],
//            'wiskunde_b' => $data['wiskunde_b'],
//            'biologie' => $data['biologie'],
//            'aardrijkskunde' => $data['aardrijkskunde'],
//            'scheikunde' => $data['scheikunde'],
//            'natuurkunde' => $data['natuurkunde'],
//            'economie' => $data['economie'],
//            'filosofie' => $data['filosofie'],
//            'maatschappijleer' => $data['maatschappijleer'],
            'password' => Hash::make($data['password']),
        ]);
    }
}
