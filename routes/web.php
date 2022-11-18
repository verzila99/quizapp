<?php

use App\Http\Controllers\QuestionsController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\CategoriesController;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/categories', [CategoriesController::class,'index'])->name('categories.index');
Route::get('/categories/{id}', [QuestionsController::class,'index'])->name('questions.index');

Route::get('/statistics/{id}', [QuizController::class,'index'])->name('quiz.index');
Route::post('/quiz', [QuizController::class,'store'])->name('quiz.store');

require __DIR__.'/auth.php';
