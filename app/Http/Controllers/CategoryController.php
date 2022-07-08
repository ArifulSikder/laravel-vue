<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function index()
    {
        $data = Category::latest()->get();
        return response()->json([
            'categories' => $data
        ], 200);
    }
    function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:categories',
            'status' => 'required',
        ]);
        Category::create([
            'name' => $request->name,
            'slug' => $request->name,
            'status' => $request->status,
        ]);

        return response()->json(['status' => 'success', 'msg' => 'Your Form Submitted!']);
    }

    function deleteCategory($category_id)
    {
        Category::findOrFail($category_id)->delete();
        return response()->json([
            'success' => 'Successfully deleted category!',
        ], 200);
    }

    function editCategory($category_id)
    {
        $category = Category::findOrFail($category_id);
        return response()->json([
            'success' => $category,
        ], 200);
    }

    function update(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'status' => 'required',
        ]);
        Category::findOrFail($request->id)->update([
            'name' => $request->name,
            'slug' => $request->name,
            'status' => $request->status,
        ]);

        return response()->json(['status' => 'success', 'msg' => 'Your Form Updated!']);
    }
}
