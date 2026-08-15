<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Default Admin User
        User::firstOrCreate(
            ['email' => 'admin@sentramedizin.co.id'],
            [
                'name' => 'Administrator Sentra Medizin',
                'phone_number' => '081234567890',
                'company_name' => 'PT Sentra Medizin Indonesia',
                'role' => 'admin',
                'password' => Hash::make('password123'),
            ]
        );

        // Default Demo Client User
        User::firstOrCreate(
            ['email' => 'klien@sentramedizin.co.id'],
            [
                'name' => 'Budi Santoso',
                'phone_number' => '089876543210',
                'company_name' => 'PT Sejahtera Medika',
                'role' => 'client',
                'password' => Hash::make('password123'),
            ]
        );

        $this->call([
            ServiceSeeder::class,
            FaqSeeder::class,
        ]);
    }
}
