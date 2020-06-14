<?php

use Illuminate\Support\Facades\Route;

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
    return view('login_register');
});

Route::get('/login_register', 'LoginRegistrationController@show');
Route::post('register', 'RegistrationController@store');
Route::post('/login', 'LoginController@store');
// Route::get('/logout', 'LoginController@destroy');


Route::resource('products', 'ProductController');

//Route::get('login/{provider}', 'SocialController@redirect');
//Route::get('login/{provider}/callback','SocialController@Callback');

