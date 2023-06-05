<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**

    Run the migrations.*
    @return void*/
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('wiskunde_a')->nullable()->default(0);
            $table->integer('nederlands')->nullable()->default(0);
            $table->integer('geschiedenis')->nullable()->default(0);
            $table->integer('biologie')->nullable()->default(0);
            $table->integer('engels')->nullable()->default(0);
            $table->integer('duits')->nullable()->default(0);
            $table->integer('frans')->nullable()->default(0);
            $table->integer('spaans')->nullable()->default(0);
            $table->integer('aardrijkskunde')->nullable()->default(0);
            $table->integer('maatschappijleer')->nullable()->default(0);
            $table->integer('economie')->nullable()->default(0);;
            $table->integer('natuurkunde')->nullable()->default(0);
            $table->integer('scheikunde')->nullable()->default(0);
            $table->integer('wiskunde_b')->nullable()->default(0);
            $table->integer('filosofie')->nullable()->default(0);
            $table->integer('give')->nullable();
            $table->integer('take')->nullable();
        });
    }

    /**

    Reverse the migrations.*
    @return void*/
    public function down(){Schema::table('users', function (Blueprint $table) {$table->dropColumn('wiskunde_a');$table->dropColumn('nederlands');$table->dropColumn('geschiedenis');$table->dropColumn('biologie');$table->dropColumn('engels');$table->dropColumn('duits');
        $table->dropColumn('frans');
        $table->dropColumn('spaans');
        $table->dropColumn('aardrijkskunde');
        $table->dropColumn('maatschappijleer');
        $table->dropColumn('economie');
        $table->dropColumn('natuurkunde');
        $table->dropColumn('scheikunde');
        $table->dropColumn('wiskunde_b');
        $table->dropColumn('filosofie');
        $table->dropColumn('give');
        $table->dropColumn('take');
    });
    }
};
