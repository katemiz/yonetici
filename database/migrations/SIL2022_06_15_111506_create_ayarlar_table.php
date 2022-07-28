<?php

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
        Schema::create('ayarlar', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Bina::class);
            $table->string('para_birimi')->default('TL');
            $table->float('yakit', 12, 2)->default(0);
            $table->float('su', 12, 2)->default(0);
            $table->float('sicak_su', 12, 2)->default(0);
            $table->float('elektrik', 12, 2)->default(0);
            $table->float('asansor', 12, 2)->default(0);
            $table->float('hizmetli', 12, 2)->default(0);
            $table->float('vergi', 12, 2)->default(0);
            $table->float('bakim', 12, 2)->default(0);
            $table->float('onarim', 12, 2)->default(0);
            $table->float('aidat', 12, 2)->default(0);
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
        Schema::dropIfExists('ayarlar');
    }
};
