<?php

namespace App\Http\Controllers;

use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class DemoController extends Controller
{
    public function Demo() : View
    {
        return view('verified.demo'); 
    }
}
