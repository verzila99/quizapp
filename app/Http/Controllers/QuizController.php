<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;

class QuizController extends Controller
{
    public function index($id): Response
    {

        $statistics =DB::table('quizzes')->
        select(DB::raw('category_id,count(category_id) as rounds,avg(correct_answers) as correct_answers,categories.name'
        ))->where('user_id',$id)
            ->join('categories','quizzes.category_id','=','categories.id')
            ->groupBy('category_id','categories.name')->get();

        return Inertia::render('Statistics', ['statistics' => $statistics]);

    }



    public function store(Request $request): bool|string
    {
        $request->validate([
            'user' => 'required|numeric',
            'category_id' => 'required|numeric|max:255',
            'correct_answers' => 'required|numeric',
        ]);

        Quiz::create(['user_id'=>$request->user,'category_id'=>$request->category_id,
            'correct_answers'=>$request->correct_answers]);

        return json_encode(['message'=>'success']);
    }
}
