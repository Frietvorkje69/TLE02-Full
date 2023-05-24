<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/app.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="../../../TLE02-Recommender/resources/js/knear.js"></script>
    <script defer src="../../../TLE02-Recommender/resources/js/scatterplot.js"></script>
    <script defer src="../../../TLE02-Recommender/resources/js/app.js"></script>
</head>

<body>
<section>
    <h1>STUDY BUDDY RECOMMENDER</h1>
    <p>Vul je cijfers in en vind een study buddy!</p>
    <form id="form">
        <input type="number" min="0" max="100" placeholder="wiskunde" />
        <input type="number" min="0" max="100" placeholder="geschiedenis" />
        <button type="submit">Find your match!</button>
    </form>
    <div id="feedback"></div>
    <div id="feedback2"></div>
</section>
    <canvas id="myChart" width="300" height="200"></canvas>
</body>

</html>
