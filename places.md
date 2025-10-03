---
layout: default
title: Places I Visited
permalink: /places
published: false
---


<nav style="margin: 1rem 0; font-size: 0.95rem;">
  <a href="/" style="margin-right: 1rem;">Home</a>
  <a href="/publications-services" style="margin-right: 1rem;">Selected Publications & Services</a>
  <a href="/talks-outreach" style="margin-right: 1rem;">Talks & Outreach</a>
  <a href="/experience" style="margin-right: 1rem;">Work Experience</a>
  <a href="/places" style="margin-right: 1rem;">Places I Visited</a>
</nav>


# Places I Visited

An interactive, personal map of cities/locations I have visited. **Edit the JSON** in this page to add or remove entries.

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<style>
  #travel-map { height: 520px; margin: 1rem 0; border: 1px solid #ddd; }
  .travel-list li { margin-bottom: .25rem; }
</style>

<div id="travel-map" role="region" aria-label="Travel map"></div>

<!-- EDIT THIS JSON: add your own places -->
<script id="travel-data" type="application/json">
[
  {
    "city": "Singapore, SG",
    "lat": 1.3521,
    "lng": 103.8198,
    "when": "2023\u2013present",
    "notes": "Current base"
  },
  {
    "city": "Melbourne, AU",
    "lat": -37.8136,
    "lng": 144.9631,
    "when": "2018\u20132022",
    "notes": "PhD + teaching"
  },
  {
    "city": "Hyderabad, IN",
    "lat": 17.385,
    "lng": 78.4867,
    "when": "2015\u20132017",
    "notes": "TCS"
  }
]
</script>

<script>
  // Initialise map
  var map = L.map('travel-map').setView([14.0, 80.0], 3);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Parse embedded JSON
  var dataEl = document.getElementById('travel-data');
  var places = JSON.parse(dataEl.textContent);
  var bounds = [];

  places.forEach(function(p) {
    var m = L.marker([p.lat, p.lng]).addTo(map);
    m.bindPopup("<strong>" + p.city + "</strong><br/>" + (p.when || "") + "<br/>" + (p.notes || ""));
    bounds.push([p.lat, p.lng]);
  });

  if (bounds.length > 0) { map.fitBounds(bounds, {padding: [30,30]}); }
</script>

## How to update
1. Click the **Edit** button (pencil icon) on this page in GitHub.  
2. In the **`travel-data`** JSON block above, add entries like:
   ```json
   {"city": "Perth, AU", "lat": -31.9523, "lng": 115.8613, "when": "May 2024", "notes": "ASCILITE trip"}
   ```
3. Save/commit. The map will rebuild automatically.

> If you prefer, share your list of places (City, Country, Month/Year, short note) and I will populate the JSON for you.
