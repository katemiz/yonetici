<?php

namespace Database\Seeders;

use App\Models\Bina;
use App\Models\Kayit;
use App\Models\Sakin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Bina::create([
            'user_id' => 1,
            'name' => 'Pembeköşk Apartmanı',
            'address' => 'Beste Sokak 2 Aşağı Eğlence, Etlik',
            'city' => 6,
        ]);

        Sakin::create([
            'user_id' => 1,
            'bina_id' => 1,
            'name' => 'Nafiye',
            'lastname' => 'Genç',
            'door_no' => 1,
            'is_evsahibi' => 1,
            'phone' => null,
            'payratio' => 100,
            'giris_tarihi' => 2000 - 01 - 01,
        ]);

        Sakin::create([
            'user_id' => 1,
            'bina_id' => 1,
            'name' => 'Kılıç Ali',
            'lastname' => 'Temiz',
            'door_no' => 2,
            'is_evsahibi' => 1,
            'phone' => null,
            'payratio' => 100,
            'giris_tarihi' => 2005 - 01 - 01,
        ]);

        Sakin::create([
            'user_id' => 1,
            'bina_id' => 1,
            'name' => 'Muhammed Şeref',
            'lastname' => 'Ocak',
            'door_no' => 3,
            'is_evsahibi' => 1,
            'phone' => null,
            'payratio' => 100,
            'giris_tarihi' => 2000 - 01 - 01,
        ]);

        Sakin::create([
            'user_id' => 1,
            'bina_id' => 1,
            'name' => 'Cemil',
            'lastname' => 'Kılıç',
            'door_no' => 4,
            'is_evsahibi' => 1,
            'phone' => null,
            'payratio' => 100,
            'giris_tarihi' => 2000 - 01 - 01,
        ]);

        Sakin::create([
            'user_id' => 1,
            'bina_id' => 1,
            'name' => 'Celal',
            'lastname' => 'Çetindağ',
            'door_no' => 5,
            'is_evsahibi' => 1,
            'phone' => null,
            'payratio' => 100,
            'giris_tarihi' => 2000 - 01 - 01,
        ]);

        Sakin::create([
            'user_id' => 1,
            'bina_id' => 1,
            'name' => 'Recai',
            'lastname' => 'Ekiz',
            'door_no' => 6,
            'is_evsahibi' => 1,
            'phone' => null,
            'payratio' => 100,
            'giris_tarihi' => 2000 - 01 - 01,
        ]);

        Sakin::create([
            'user_id' => 1,
            'bina_id' => 1,
            'name' => 'Ahmet',
            'lastname' => 'Kip',
            'door_no' => 7,
            'is_evsahibi' => 0,
            'phone' => null,
            'payratio' => 100,
            'giris_tarihi' => 2022 - 01 - 01,
        ]);

        Sakin::create([
            'user_id' => 1,
            'bina_id' => 1,
            'name' => 'Ali',
            'lastname' => 'Kabakçı',
            'door_no' => 8,
            'is_evsahibi' => 1,
            'phone' => null,
            'payratio' => 100,
            'giris_tarihi' => '2000-01-01',
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gelir',
            'aciklama' => 'Muhsin Ayten den Devir (Önceki Dönem Özeti)',
            'donem' => '2021-09-20',
            'son_odeme' => '',
            'tutar' => 20199.56,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 1,
            'tur' => 'gelir',
            'aciklama' => 'Eylül 2021 dönemi aidatı',
            'donem' => '2021-09-20',
            'son_odeme' => '',
            'tutar' => 256,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 2,
            'tur' => 'gelir',
            'aciklama' => 'Eylül 2021 dönemi aidatı',
            'donem' => '2021-09-20',
            'son_odeme' => '',
            'tutar' => 300,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 3,
            'tur' => 'gelir',
            'aciklama' => 'Eylül 2021 dönemi aidatı',
            'donem' => '2021-09-20',
            'son_odeme' => '',
            'tutar' => 300,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 4,
            'tur' => 'gelir',
            'aciklama' => 'Eylül 2021 dönemi aidatı',
            'donem' => '2021-09-20',
            'son_odeme' => '',
            'tutar' => 300,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 5,
            'tur' => 'gelir',
            'aciklama' => 'Eylül 2021 dönemi aidatı',
            'donem' => '2021-09-20',
            'son_odeme' => '',
            'tutar' => 300,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 6,
            'tur' => 'gelir',
            'aciklama' => 'Eylül 2021 dönemi aidatı',
            'donem' => '2021-09-20',
            'son_odeme' => '',
            'tutar' => 300,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 7,
            'tur' => 'gelir',
            'aciklama' => 'Eylül 2021 dönemi aidatı',
            'donem' => '2021-09-20',
            'son_odeme' => '',
            'tutar' => 300,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 8,
            'tur' => 'gelir',
            'aciklama' => 'Eylül 2021 dönemi aidatı',
            'donem' => '2021-09-20',
            'son_odeme' => '',
            'tutar' => 300,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 1,
            'tur' => 'gelir',
            'aciklama' => 'Ekim 2021 dönemi aidatı',
            'donem' => '2021-10-20',
            'son_odeme' => '',
            'tutar' => 300,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 2,
            'tur' => 'gelir',
            'aciklama' => 'Ekim 2021 dönemi aidatı',
            'donem' => '2021-10-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 3,
            'tur' => 'gelir',
            'aciklama' => 'Ekim 2021 dönemi aidatı',
            'donem' => '2021-10-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 4,
            'tur' => 'gelir',
            'aciklama' => 'Ekim 2021 dönemi aidatı',
            'donem' => '2021-10-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 5,
            'tur' => 'gelir',
            'aciklama' => 'Ekim 2021 dönemi aidatı',
            'donem' => '2021-10-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 6,
            'tur' => 'gelir',
            'aciklama' => 'Ekim 2021 dönemi aidatı',
            'donem' => '2021-10-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 7,
            'tur' => 'gelir',
            'aciklama' => 'Ekim 2021 dönemi aidatı',
            'donem' => '2021-10-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 8,
            'tur' => 'gelir',
            'aciklama' => 'Ekim 2021 dönemi aidatı',
            'donem' => '2021-10-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 7,
            'tur' => 'gelir',
            'aciklama' =>
                'Sıcak Su Bedeli: 13m<sup>3</sup> [52-65] (23 TL/m<sup>3</sup>) [Muhsin Bey son okuma]',
            'donem' => '2021-10-20',
            'son_odeme' => '',
            'tutar' => 299,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 1,
            'tur' => 'gelir',
            'aciklama' => 'Kasım 2021 dönemi aidatı',
            'donem' => '2021-11-20',
            'son_odeme' => '',
            'tutar' => 300,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 2,
            'tur' => 'gelir',
            'aciklama' => 'Kasım 2021 dönemi aidatı',
            'donem' => '2021-11-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 3,
            'tur' => 'gelir',
            'aciklama' => 'Kasım 2021 dönemi aidatı',
            'donem' => '2021-11-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 4,
            'tur' => 'gelir',
            'aciklama' => 'Kasım 2021 dönemi aidatı',
            'donem' => '2021-11-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 5,
            'tur' => 'gelir',
            'aciklama' => 'Kasım 2021 dönemi aidatı',
            'donem' => '2021-11-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 6,
            'tur' => 'gelir',
            'aciklama' => 'Kasım 2021 dönemi aidatı',
            'donem' => '2021-11-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 7,
            'tur' => 'gelir',
            'aciklama' => 'Kasım 2021 dönemi aidatı',
            'donem' => '2021-11-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 8,
            'tur' => 'gelir',
            'aciklama' => 'Kasım 2021 dönemi aidatı',
            'donem' => '2021-11-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 1,
            'tur' => 'gelir',
            'aciklama' => 'Aralık 2021 dönemi aidatı',
            'donem' => '2021-12-20',
            'son_odeme' => '',
            'tutar' => 300,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 2,
            'tur' => 'gelir',
            'aciklama' => 'Aralık 2021 dönemi aidatı',
            'donem' => '2021-12-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 3,
            'tur' => 'gelir',
            'aciklama' => 'Aralık 2021 dönemi aidatı',
            'donem' => '2021-12-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 4,
            'tur' => 'gelir',
            'aciklama' => 'Aralık 2021 dönemi aidatı',
            'donem' => '2021-12-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 5,
            'tur' => 'gelir',
            'aciklama' => 'Aralık 2021 dönemi aidatı',
            'donem' => '2021-12-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 6,
            'tur' => 'gelir',
            'aciklama' => 'Aralık 2021 dönemi aidatı',
            'donem' => '2021-12-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 7,
            'tur' => 'gelir',
            'aciklama' => 'Aralık 2021 dönemi aidatı',
            'donem' => '2021-12-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 8,
            'tur' => 'gelir',
            'aciklama' => 'Aralık 2021 dönemi aidatı',
            'donem' => '2021-12-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 1,
            'tur' => 'gelir',
            'aciklama' =>
                'SICAK SU BEDELİ 1 Nolu Daire: 77m3 [177-100] (23 TL/m3)',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 1771,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 2,
            'tur' => 'gelir',
            'aciklama' =>
                'SICAK SU BEDELİ 2 Nolu Daire: 58m3 [196-138] (23 TL/m3)',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 1334,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 3,
            'tur' => 'gelir',
            'aciklama' =>
                'SICAK SU BEDELİ 3 Nolu Daire: 4m3 [121-117] (23 TL/m3)',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 92,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 4,
            'tur' => 'gelir',
            'aciklama' =>
                'SICAK SU BEDELİ 4 Nolu Daire: 10m3 [37-27] (23 TL/m3)',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 230,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 5,
            'tur' => 'gelir',
            'aciklama' =>
                'SICAK SU BEDELİ 5 Nolu Daire: 40m3 [404-364] (23 TL/m3)',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 920,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 7,
            'tur' => 'gelir',
            'aciklama' =>
                'SICAK SU BEDELİ 7 Nolu Daire: 18m3 [83-65] (23 TL/m3)',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 414,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 8,
            'tur' => 'gelir',
            'aciklama' =>
                'SICAK SU BEDELİ 8 Nolu Daire: 57m3 [174-117] (23 TL/m3)',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 1311,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 1,
            'tur' => 'gelir',
            'aciklama' => 'Ocak 2022 dönemi aidatı',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 2,
            'tur' => 'gelir',
            'aciklama' => 'Ocak 2022 dönemi aidatı',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 3,
            'tur' => 'gelir',
            'aciklama' => 'Ocak 2022 dönemi aidatı',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 4,
            'tur' => 'gelir',
            'aciklama' => 'Ocak 2022 dönemi aidatı',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 5,
            'tur' => 'gelir',
            'aciklama' => 'Ocak 2022 dönemi aidatı',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 6,
            'tur' => 'gelir',
            'aciklama' => 'Ocak 2022 dönemi aidatı',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 7,
            'tur' => 'gelir',
            'aciklama' => 'Ocak 2022 dönemi aidatı',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 8,
            'tur' => 'gelir',
            'aciklama' => 'Ocak 2022 dönemi aidatı',
            'donem' => '2022-01-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 1,
            'tur' => 'gelir',
            'aciklama' => 'Şubat 2022 dönemi aidatı',
            'donem' => '2022-02-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 2,
            'tur' => 'gelir',
            'aciklama' => 'Şubat 2022 dönemi aidatı',
            'donem' => '2022-02-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 3,
            'tur' => 'gelir',
            'aciklama' => 'Şubat 2022 dönemi aidatı',
            'donem' => '2022-02-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 4,
            'tur' => 'gelir',
            'aciklama' => 'Şubat 2022 dönemi aidatı',
            'donem' => '2022-02-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 5,
            'tur' => 'gelir',
            'aciklama' => 'Şubat 2022 dönemi aidatı',
            'donem' => '2022-02-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 6,
            'tur' => 'gelir',
            'aciklama' => 'Şubat 2022 dönemi aidatı',
            'donem' => '2022-02-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 7,
            'tur' => 'gelir',
            'aciklama' => 'Şubat 2022 dönemi aidatı',
            'donem' => '2022-02-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 8,
            'tur' => 'gelir',
            'aciklama' => 'Şubat 2022 dönemi aidatı',
            'donem' => '2022-02-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 1,
            'tur' => 'gelir',
            'aciklama' => 'Mart 2022 dönemi aidatı',
            'donem' => '2022-03-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 2,
            'tur' => 'gelir',
            'aciklama' => 'Mart 2022 dönemi aidatı',
            'donem' => '2022-03-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 3,
            'tur' => 'gelir',
            'aciklama' => 'Mart 2022 dönemi aidatı',
            'donem' => '2022-03-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 4,
            'tur' => 'gelir',
            'aciklama' => 'Mart 2022 dönemi aidatı',
            'donem' => '2022-03-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 5,
            'tur' => 'gelir',
            'aciklama' => 'Mart 2022 dönemi aidatı',
            'donem' => '2022-03-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 6,
            'tur' => 'gelir',
            'aciklama' => 'Mart 2022 dönemi aidatı',
            'donem' => '2022-03-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 7,
            'tur' => 'gelir',
            'aciklama' => 'Mart 2022 dönemi aidatı',
            'donem' => '2022-03-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 8,
            'tur' => 'gelir',
            'aciklama' => 'Mart 2022 dönemi aidatı',
            'donem' => '2022-03-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 1,
            'tur' => 'gelir',
            'aciklama' => 'Nisan 2022 dönemi aidatı',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 350,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 2,
            'tur' => 'gelir',
            'aciklama' => 'Nisan 2022 dönemi aidatı',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 3,
            'tur' => 'gelir',
            'aciklama' => 'Nisan 2022 dönemi aidatı',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 4,
            'tur' => 'gelir',
            'aciklama' => 'Nisan 2022 dönemi aidatı',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 5,
            'tur' => 'gelir',
            'aciklama' => 'Nisan 2022 dönemi aidatı',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 6,
            'tur' => 'gelir',
            'aciklama' => 'Nisan 2022 dönemi aidatı',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 7,
            'tur' => 'gelir',
            'aciklama' => 'Nisan 2022 dönemi aidatı',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 8,
            'tur' => 'gelir',
            'aciklama' => 'Nisan 2022 dönemi aidatı',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 400,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 1,
            'tur' => 'gelir',
            'aciklama' => 'Çalınan Bahçe Kapısı Yeniden Yapılma Bedeli',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 250,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 2,
            'tur' => 'gelir',
            'aciklama' => 'Çalınan Bahçe Kapısı Yeniden Yapılma Bedeli',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 250,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 3,
            'tur' => 'gelir',
            'aciklama' => 'Çalınan Bahçe Kapısı Yeniden Yapılma Bedeli',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 250,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 4,
            'tur' => 'gelir',
            'aciklama' => 'Çalınan Bahçe Kapısı Yeniden Yapılma Bedeli',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 250,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 5,
            'tur' => 'gelir',
            'aciklama' => 'Çalınan Bahçe Kapısı Yeniden Yapılma Bedeli',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 250,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 6,
            'tur' => 'gelir',
            'aciklama' => 'Çalınan Bahçe Kapısı Yeniden Yapılma Bedeli',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 250,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 7,
            'tur' => 'gelir',
            'aciklama' => 'Çalınan Bahçe Kapısı Yeniden Yapılma Bedeli',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 250,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 8,
            'tur' => 'gelir',
            'aciklama' => 'Çalınan Bahçe Kapısı Yeniden Yapılma Bedeli',
            'donem' => '2022-04-20',
            'son_odeme' => '',
            'tutar' => 250,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 1,
            'tur' => 'gelir',
            'aciklama' => 'Mayıs 2022 dönemi aidatı',
            'donem' => '2022-05-20',
            'son_odeme' => '',
            'tutar' => 550,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 2,
            'tur' => 'gelir',
            'aciklama' => 'Mayıs 2022 dönemi aidatı',
            'donem' => '2022-05-20',
            'son_odeme' => '',
            'tutar' => 600,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 3,
            'tur' => 'gelir',
            'aciklama' => 'Mayıs 2022 dönemi aidatı',
            'donem' => '2022-05-20',
            'son_odeme' => '',
            'tutar' => 600,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 4,
            'tur' => 'gelir',
            'aciklama' => 'Mayıs 2022 dönemi aidatı',
            'donem' => '2022-05-20',
            'son_odeme' => '',
            'tutar' => 600,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 5,
            'tur' => 'gelir',
            'aciklama' => 'Mayıs 2022 dönemi aidatı',
            'donem' => '2022-05-20',
            'son_odeme' => '',
            'tutar' => 600,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 6,
            'tur' => 'gelir',
            'aciklama' => 'Mayıs 2022 dönemi aidatı',
            'donem' => '2022-05-20',
            'son_odeme' => '',
            'tutar' => 600,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 7,
            'tur' => 'gelir',
            'aciklama' => 'Mayıs 2022 dönemi aidatı',
            'donem' => '2022-05-20',
            'son_odeme' => '',
            'tutar' => 600,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => 8,
            'tur' => 'gelir',
            'aciklama' => 'Mayıs 2022 dönemi aidatı',
            'donem' => '2022-05-20',
            'son_odeme' => '',
            'tutar' => 600,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Doğalgaz Faturası Ödeme (Eylül) [ÖDENDİ]',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 632,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Elektrik - EnerjiSA. (Ekim) 14.10.2021 [Ödendi] ',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 207.3,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Doğalgaz, BaşkentGaz (Ekim) 18.10.2021 [Ödendi]',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 1020,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Elektrik - EnerjiSA. (Kasım) 15.11.2021 [ÖDENDİ]',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 291.5,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' =>
                'Doğalgaz, BaşkentGaz (1592 m3 Kasım) 22.11.2021 [ÖDENDİ]',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 3572,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' =>
                'Apartman Su Tüketim Faturası [9 Aralık 2021] ÖDENDİ ',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 58.3,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Elektrik Tüketimi EnerjiSA [13 Aralık 2021] ÖDENDİ ',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 336.7,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Doğalgaz, BaşkentGaz (2493 m3 Aralık) 24.12.2021]',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 5371,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Apartman Su Tüketim Faturası [Aralık] (11.01.22) ',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 76.97,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Temizlik Malzemeleri Alımı (3 Ocak 22)',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 710,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Elektrik - EnerjiSA. (Aralık) 14.01.2022 [ÖDENDİ]',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 467.7,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' =>
                'Doğalgaz, BaşkentGaz (3490 m3 Ocak) 24.01.2022] (Ödendi)',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 8278,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Apartman Su Tüketim Faturası [Ocak] (08.02.22)',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 81.87,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'EnerjiSA Elektrik (14.02.2022) 15048kW',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 785.8,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' =>
                'Doğalgaz, BaşkentGaz (3963 m3 Şubat) 21. 02.2022 (Ödendi)',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 10608,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Apartman Su Tüketim Faturası [10 Mart 2022]  Ödendi',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 88.41,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Apartman İç Kapı Menteşesi (Orjinal Torma Mob.Aks)',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 75,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Doğalgaz, BaşkentGaz (2609 m3 Mart) 22. 03.2022',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 7166,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'EnerjiSA Elektrik (14.03.2022) [Ödendi]',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 626.2,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' =>
                'Isıtma Sistemi Bakım Bedeli (Ersin Atlıhan) 31 mart 2022',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 150,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'EnerjiSA Elektrik (14.04.2022)',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 632.9,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'BaşkentGaz (2303 m3 Mart) 19.04.2022',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 6799,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' =>
                'Apartman Su Tüketim Faturası [11 Nisan 2022]  Ödendi',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 66.79,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' =>
                'Bahçe Kapısının Yeniden Yapılması (Mart 22 Çalınmıştı)',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 2000,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'ASKİ Su Tüketim Faturası (16.05.22)',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 106.78,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Doğalgaz, BaşkentGaz (749 m3 Nisan) 23. 05.2022',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 2587,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'EnerjiSA Elektrik (16.05.2022)',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 335,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'Doğalgaz, BaşkentGaz (618 m3 Mayıs) 17. 06.2022',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 2245,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'ASKİ Su Tüketim Faturası',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 77.17,
        ]);

        Kayit::create([
            'user_id' => 1,
            'bina_id' => 1,
            'sakin_id' => null,
            'tur' => 'gider',
            'aciklama' => 'EnerjiSA Elektrik (13.06.2022)',
            'donem' => '',
            'son_odeme' => '',
            'tutar' => 231.4,
        ]);
    }
}
