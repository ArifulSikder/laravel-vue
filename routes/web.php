<?php

use App\Http\Controllers\CategoryController;
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
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// Route::get('/{anypath}', [App\Http\Controllers\HomeController::class, 'index'])->where('path', '.*');

Route::post('/store-category', [CategoryController::class, 'store'])->name('/store-category');
Route::get('/index-category', [CategoryController::class, 'index'])->name('index-category');
Route::get('/delete-category/{category_id}', [CategoryController::class, 'deleteCategory']);
Route::get('/edit-category/{category_id}', [CategoryController::class, 'editCategory']);
Route::post('/update-category', [CategoryController::class, 'update']);
