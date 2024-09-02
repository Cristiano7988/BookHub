<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class LivroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Livros/Index');
    }

    
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('Livros/Show', [
            'id' => $id
        ]);
    }
}
