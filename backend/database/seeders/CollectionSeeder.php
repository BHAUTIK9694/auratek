<?php

namespace Database\Seeders;

use App\Models\Collection;
use Illuminate\Database\Seeder;

class CollectionSeeder extends Seeder
{
    /**
     * Seed the collections table with initial data.
     */
    public function run(): void
    {
        $collections = [
            [
                'name' => 'Engagement Rings',
                'slug' => 'engagement-rings',
                'description' => 'Exquisite engagement rings crafted to mark life\'s most precious moment.',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Fine Necklaces',
                'slug' => 'fine-necklaces',
                'description' => 'Statement necklaces and delicate pendants for every occasion.',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'Luxury Earrings',
                'slug' => 'luxury-earrings',
                'description' => 'From classic studs to dramatic drops, elevate any ensemble.',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 3,
            ],
            [
                'name' => 'Designer Bracelets',
                'slug' => 'designer-bracelets',
                'description' => 'Handcrafted bracelets that combine elegance with modern design.',
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 4,
            ],
            [
                'name' => 'Limited Edition',
                'slug' => 'limited-edition',
                'description' => 'Exclusive pieces available in limited quantities. True collector\'s items.',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 5,
            ],
        ];

        foreach ($collections as $collection) {
            Collection::create($collection);
        }
    }
}
