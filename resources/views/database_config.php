<?php

// general settings
$host       = "localhost";
$database   = "studybuddy";
$user       = "root";
$password   = "";

// make connection with database
$mysqli = mysqli_connect($host, $user, $password, $database)
// display connection error if something isn't right
or die("Error: " . mysqli_connect_error());
