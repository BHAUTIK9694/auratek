<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    /**
     * Display a listing of products.
     */
    public function index(): JsonResponse
    {
        // Placeholder - will be implemented with models
        return response()->json([
            'status' => 'success',
            'message' => 'Products endpoint ready',
            'data' => [],
        ]);
    }

    /**
     * Display the specified product.
     */
    public function show(string $id): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Product detail endpoint ready',
            'data' => null,
        ]);
    }
}
