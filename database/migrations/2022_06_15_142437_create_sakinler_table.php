<?php

use App\Models\Bina;
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
        Schema::create('sakinler', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->foreignIdFor(Bina::class);
            $table->string('name');
            $table->string('lastname');
            $table->integer('door_no');
            $table->boolean('is_evsahibi')->default(1);
            $table->string('phone', 16)->nullable();
            $table->float('payratio', 12, 4)->default(100);
            $table->string('giris_tarihi')->nullable();
            $table->string('remarks')->nullable();
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
        Schema::dropIfExists('sakinler');
    }
};
