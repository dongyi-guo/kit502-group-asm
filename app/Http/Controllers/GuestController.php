<?php

namespace App\Http\Controllers;

use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class GuestController extends Controller
{
    public function TermsAndConditions() : View
    {
        return view('guest.terms-and-conditions'); 
    }
}
