<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $post = (object) [
            "id" => '1',
            'title' => 'Post 1',
            'body' => 'This is post 1 body'
        ];
        $posts = array_fill(0, 10, $post);
        return view('posts.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = (object) [
            "id" => '1',
            'title' => 'Post 1',
            'body' => 'This is post 1 body'
        ];
        return view('posts.show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $post)
    {

        $post = (object) [
            "id" => '1',
            'title' => 'Post 1',
            'body' => 'This is post 1 body'
        ];
        return view('posts.edit', compact('post'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
