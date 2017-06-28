<?php
include("header.php")
 ?>


 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title>OpenStreetMap Leaflet</title>
     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
     <style media="screen">
       #mapid { height: 180px; }
     </style>
   </head>
   <body>

     <h2>Pour accéder aux données, cliquer sur le ville de votre choix de la Lozère.</h2>
     <div id="mapid" style="width:890px; height:500px";></div>
      <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
      <script type="text/javascript">
        var carte = L.map('mapid').setView([44.494203, 3.5812691999999515], 8);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
             attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         }).addTo(carte);
       var marker = L.marker([44.727236, 3.855415999999991]).addTo(carte);
       var marker2 = L.marker([44.517611, 3.5018729999999323]).addTo(carte);
     //   var image = L.icon({
     // iconUrl: 'demi2.png'});
      var marker3 = L.marker([44.801726, 3.2752269999999726]).addTo(carte);
      var marker4 = L.marker([44.431036, 3.214921000000004]).addTo(carte);
      var marker4 = L.marker([44.550133, 3.289894000000004]).addTo(carte);

marker.bindPopup('<a href="page2.php">Mende</a>').openPopup();

      </script>
   </body>
 </html>





 <?php
 include("footer.php")
  ?>
