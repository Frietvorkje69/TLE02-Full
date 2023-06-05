<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
<<<<<<< HEAD
        return view('index')->with('index', $users);
    }

    public function json(){
        $users = User::all();
        return view('students')->with('students', $users);
    }


=======
        return view('user')->with('user', $users);
    }

>>>>>>> origin/master
    public function edit()
    {
        $user = auth()->user();
        return view('user.edit', compact('user'));
    }

    public function update(Request $request)
    {
        $validated = $this->validate($request,
            [
                'id' => 'bail|required|exists:users',
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'exists:users'],
                'password' => ['required', 'string', 'min:8'],
                //grade list
                'nederlands' => ['numeric', 'min:0', 'max:100'],
                'engels' => ['numeric', 'min:10', 'max:100'],
                'duits' => ['numeric', 'min:10', 'max:100'],
                'frans' => ['numeric', 'min:10', 'max:100'],
                'spaans' => ['numeric', 'min:10', 'max:100'],
                'wiskunde_a' => ['numeric', 'min:10', 'max:100'],
                'wiskunde_b' => ['numeric', 'min:10', 'max:100'],
                'geschiedenis' => ['numeric', 'min:10', 'max:100'],
                'biologie' => ['numeric', 'min:10', 'max:100'],
                'aardrijkskunde' => ['numeric', 'min:10', 'max:100'],
                'scheikunde' => ['numeric', 'min:10', 'max:100'],
                'natuurkunde' => ['numeric', 'min:10', 'max:100'],
                'economie' => ['numeric', 'min:10', 'max:100'],
                'filosofie' => ['numeric', 'min:10', 'max:100'],
                'maatschappijleer' => ['numeric', 'min:10', 'max:100'],
                'give' => ['string', 'max:100'],
                'take' => ['string', 'max:100']
            ]);
        $user = User::find($validated['id']);
        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->password = Hash::make($validated['password']);
        //gradelist
        $user->nederlands = $validated['nederlands'];
        $user->geschiedenis = $validated['geschiedenis'];
        $user->engels = $validated['engels'];
        $user->duits = $validated['duits'];
        $user->frans = $validated['frans'];
        $user->spaans = $validated['spaans'];
        $user->wiskunde_b = $validated['wiskunde_b'];
        $user->wiskunde_a = $validated['wiskunde_a'];
        $user->biologie = $validated['biologie'];
        $user->aardrijkskunde = $validated['aardrijkskunde'];
        $user->scheikunde = $validated['scheikunde'];
        $user->natuurkunde = $validated['natuurkunde'];
        $user->economie = $validated['economie'];
        $user->filosofie = $validated['filosofie'];
        $user->maatschappijleer = $validated['maatschappijleer'];
        $user->give = $validated['give'];
        $user->take = $validated['take'];

        $user->save();
        return redirect(route('users.edit'));
    }

    public function destroy(Request $request)
    {
        $validated = $this->validate($request,
            [
                'id' => 'bail|required|exists:user'
            ]);
        User::destroy($validated);
        return redirect('/home');
    }
}
<<<<<<< HEAD
=======

>>>>>>> origin/master
