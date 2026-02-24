<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SkyFetch Weather Dashboard</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h1>🌤 SkyFetch</h1>
    
    <div class="weather-card">
      <h2 id="city">City</h2>
      <img id="weather-icon" src="" alt="Weather Icon">
      <p id="temperature">Temperature</p>
      <p id="description">Description</p>
    </div>
  </div>

  <!-- Axios CDN -->
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

  <!-- App JS -->
  <script src="app.js"></script>

</body>
</html>
