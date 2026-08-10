<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class CollectionController extends Controller
{
    /**
     * Display a listing of collections.
     */
    public function index(): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Collections endpoint ready',
            'data' => [],
        ]);
    }

    /**
     * Display the specified collection.
     */
    public function show(string $slug): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Collection detail endpoint ready',
            'data' => null,
        ]);
    }
}
