<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grades', function (Blueprint $table) {
            $table->id();
            $table->integer('wiskunde A');
            $table->integer('nederlands');
            $table->integer('geschiedenis');
            $table->integer('biologie');
            $table->integer('engels');
            $table->integer('duits');
            $table->integer('frans');
            $table->integer('spaans');
            $table->integer('aardrijkskunde');
            $table->integer('maatschappijleer');
            $table->integer('economie');
            $table->integer('natuurkunde');
            $table->integer('scheikunde');
            $table->integer('muziek');
            $table->integer('beeldende vorming');
            $table->integer('informatica');
            $table->integer('wiskunde B');
            $table->integer('filosofie');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grades');
    }
};
