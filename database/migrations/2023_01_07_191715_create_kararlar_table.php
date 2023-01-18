<?php

use App\Models\User;
use App\Models\Bina;

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
        Schema::create('kararlar', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->foreignIdFor(Bina::class);
            $table->string('title');
            $table->text('karar');
            $table->string('status')->default('TASLAK');
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
        Schema::dropIfExists('kararlar');
    }
};
