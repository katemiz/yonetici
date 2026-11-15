<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * The legacy "dosyalar" attachment table has been retired.
     * All file attachments now live in the Spatie Media table ("media").
     */
    public function up(): void
    {
        Schema::dropIfExists('dosyalar');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        // The legacy "dosyalar" table cannot be restored (files now live in Spatie Media).
    }
};
