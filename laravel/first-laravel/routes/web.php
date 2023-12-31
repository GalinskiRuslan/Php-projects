<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Posts\CommentController;
use App\Http\Controllers\RegisterController;


Route::view('/', 'home.index')->name('home');

/* Route::view('/login', 'login.index')->name('login'); */

Route::resource('/register', RegisterController::class);


Route::resource('user', RegisterController::class);
// Посты 

Route::resource('/posts', PostController::class);

// Коменты к постам 

Route::resource('/posts/{post}/comments', CommentController::class);

Route::resource('/login', LoginController::class);
