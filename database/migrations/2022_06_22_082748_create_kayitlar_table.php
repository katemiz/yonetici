<?php

use App\Models\Bina;
use App\Models\Sakin;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kayitlar', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->foreignIdFor(Bina::class);
            $table->foreignIdFor(Sakin::class)->nullable();
            $table->string('tur');
            $table->string('aciklama');
            $table->string('donem')->nullable();
            $table->string('son_odeme')->nullable();
            $table->json('dokum')->nullable();
            $table->float('tutar', 12, 2);
            $table->string('remarks')->nullable();
            $table->string('status')->default('KAYIT');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kayitlar');
    }
};
