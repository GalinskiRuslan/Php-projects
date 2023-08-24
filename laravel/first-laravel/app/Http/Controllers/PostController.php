<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');
        $category = $request->input('category');


        $post = (object) [
            "id" => '1',
            'title' => 'Post 1',
            'body' => 'This is post 1 body',
            'category_id' => '1'
        ];
        $posts = array_fill(0, 10, $post);
        $posts = array_filter($posts, function ($post) use ($search, $category) {
            if ($search && !str_contains(strtolower($post->title), strtolower($search))) {

                return false;
            }
            if ($category && $post->category_id !== $category) {

                return false;
            }

            return true;
        });
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
        $validated = validator($request->all(), [
            'title' => ['required', 'string', 'max:80'],
            'body' => ['required', 'string', 'max:255'],
        ])->validate();
        dd($validated);
        if (false) {
            return redirect()->back()->withInput();
        }
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
