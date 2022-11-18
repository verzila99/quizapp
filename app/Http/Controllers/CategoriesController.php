<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class CategoriesController extends Controller
{
//    public $categories = [
//        ["id"=>9,"name"=>"General Knowledge"],
//        ["id"=>10,"name"=>"Entertainment: Books"],
//        ["id"=>11,"name"=>"Entertainment: Film"],
//        ["id"=>12,"name"=>"Entertainment: Music"],
//        ["id"=>14,"name"=>"Entertainment: Television"],
//        ["id"=>15,"name"=>"Entertainment: Video Games"],
//        ["id"=>16,"name"=>"Entertainment: Board Games"],
//        ["id"=>17,"name"=>"Science & Nature"],
//        ["id"=>18,"name"=>"Science: Computers"],
//        ["id"=>19,"name"=>"Science: Mathematics"],
//        ["id"=>20,"name"=>"Mythology"],
//        ["id"=>21,"name"=>"Sports"],
//        ["id"=>22,"name"=>"Geography"],
//        ["id"=>23,"name"=>"History"],
//        ["id"=>24,"name"=>"Politics"],
//        ["id"=>25,"name"=>"Art"],
//        ["id"=>26,"name"=>"Celebrities"],
//        ["id"=>27,"name"=>"Animals"],
//        ["id"=>28,"name"=>"Vehicles"],
//        ["id"=>29,"name"=>"Entertainment: Comics"],
//        ["id"=>30,"name"=>"Science: Gadgets"],
//        ["id"=>31,"name"=>"Entertainment: Japanese Anime & Manga"],
//        ["id"=>32,"name"=>"Entertainment: Cartoon & Animations"]
//    ];


    public function index(){

//        foreach ($this->categories as $category){

//                $response = Http::get('https://opentdb.com/api.php?amount=50&category='
//                    .$category['id']);
//                if($response->ok()){
//
//                    foreach ($response->object()->results as $result) {
//
//                    Db::table('questions')->insert([
//                        'question'=> $result->question,
//                        'correct_answer'=> $result->correct_answer,
//                        'incorrect_answers'=> implode('|',$result->incorrect_answers),
//                        'category_id'=> $category['id'],
//                    ]);
//
//                    }
//
//                }
//                sleep(10);

//        }

//                    return Inertia::render('Questions',
//                        ['questions' => $response->object()->results]);

        $results = DB::table('categories')->get();

                return Inertia::render('Categories',
                ['categories' => $results]);



    }

}
