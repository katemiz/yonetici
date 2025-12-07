<?php
use App\Models\Bedel;
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
        Schema::create('okumalar', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->foreignIdFor(Bina::class);
            $table->foreignIdFor(Bedel::class);

            $table->foreignIdFor(Sakin::class);
            $table->float('okuma_degeri', 12, 2);
            $table->string('okuma_tarihi')->nullable();
            $table->text('note')->nullable();
            $table->string('status')->default('OKUNDU');
            $table->integer('kayit_id')->default(0);
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
        Schema::dropIfExists('okumalar');
    }
};
