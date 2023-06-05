<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/users/profile', [UserController::class, 'edit'])->name('users.edit');
Route::get('/index', [UserController::class, 'index']);
Route::post('/users/{user}', [UserController::class, 'update'])->name('users.update');
Route::get('/students', [UserController::class, 'json'])->name('users.json');
