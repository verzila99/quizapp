<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionsController extends Controller
{
    public function index($id){

        $results = Question::where('category_id',$id)->inRandomOrder()->limit(10)->get();

        return Inertia::render('Questions',
            ['questions' => $results]);

    }
}
