<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\MyFirstContoller;
use App\Http\Controllers\Posts\CommentController;
use App\Http\Controllers\RegisterController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::view('/', 'home.index')->name('home');

Route::view('/login', 'login.index')->name('login');

Route::get('/myFirstRoute', [MyFirstContoller::class, 'index']);

Route::resource('/register', RegisterController::class);
// Посты 

Route::resource('/posts', PostController::class);

// Коменты к постам 

Route::resource('/posts/{post}/comments', CommentController::class);
