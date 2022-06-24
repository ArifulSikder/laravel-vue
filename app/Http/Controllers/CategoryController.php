<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'status' => 'required',
        ]);
        Category::create([
            'name' => $request->name,
            'slug' => $request->name,
            'status' => $request->status,
        ]);

        return response()->json(['status' => 'success', 'msg' => 'Your Form Submitted!']);
    }
}
