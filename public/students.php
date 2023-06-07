<?php

require_once 'database_config.php';

// Assuming you have a table named "students" with columns like "id", "name", "age", etc.
$query = "SELECT * FROM users";
$result = $mysqli->query($query);

// Check if the query was successful
if ($result) {
    // Initialize an empty array to hold the student data
    $students = [];

    // Loop through the results and store student data in the array
    while ($row = $result->fetch_assoc()) {
        $student = [
            'id' => $row['id'],
            'name' => $row['name'],
            'wiskunde_A' => $row['wiskunde_a'],
            'geschiedenis' => $row['geschiedenis'],
            'nederlands' => $row['nederlands'],
            'engels' => $row['engels'],
            'biologie' => $row['biologie'],
            'duits' => $row['duits'],
            'frans' => $row['frans'],
            'spaans' => $row['spaans'],
            'aardrijkskunde' => $row['aardrijkskunde'],
            'maatschappijleer' => $row['maatschappijleer'],
            'economie' => $row['economie'],
            'natuurkunde' => $row['natuurkunde'],
            'scheikunde' => $row['scheikunde'],
            'wiskunde_b' => $row['wiskunde_b'],
            'filosofie' => $row['filosofie']
        ];

        $students[] = $student;
    }

    // Free the result set
    $result->free();

    // Set the response headers to indicate JSON content
    header('Content-Type: application/json');

    // Output the student data as JSON
    $jsonData = json_encode($students);
    echo $jsonData;
} else {
    echo "Error executing the query: " . $mysqli->error;
}

// Close the database connection
$mysqli->close();
