---
layout: default
title: Selected Publications & Services
permalink: /publications-services
---


<nav style="margin: 1rem 0; font-size: 0.95rem;">
  <a href="/" style="margin-right: 1rem;">Home</a>
  <a href="/publications-services" style="margin-right: 1rem;">Selected Publications & Services</a>
  <a href="/talks-outreach" style="margin-right: 1rem;">Talks & Outreach</a>
  <a href="/experience" style="margin-right: 1rem;">Work Experience</a>
  <a href="/places" style="margin-right: 1rem;">Places I Visited</a>
</nav>


# Selected Publications & Services

Below is a concise selection. See Google Scholar for the full list.

- **A. Abidi**, F. Ali, C.L.G. Quek, R.E. Koh. *Using LLMs to support teacher reflections on using questions to deepen learning and promote student engagement.* **ASCILITE 2024**.  
- **A. Abidi**, L. Chen, R. Zhou, C. Liu. *Searching Personalized k‑wing in Bipartite Graphs.* **IEEE TKDE 2022**.  
- **A. Abidi**, L. Chen, C. Liu, R. Zhou. *On Maximizing the Vertex Coverage for Top‑k t‑Bicliques in Bipartite Graphs.* **ICDE 2022**.  
- **A. Abidi**, R. Zhou, L. Chen, C. Liu. *Pivot‑based Maximal Biclique Enumeration.* **IJCAI‑PRICAI 2020**.  

## Service
- Reviewer: **IEEE TKDE**, **ICDE 2023**, **World Wide Web Journal**.  
- PC Member: **IEEE AISC 2023**.

---

## Collaborators & Institutions (Map)

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<style>
  #collab-map { height: 520px; margin: 1rem 0; border: 1px solid #ddd; }
</style>

<div id="collab-map" role="region" aria-label="Collaborators map"></div>

<script>
  // Initialise map
  var map = L.map('collab-map').setView([9.5, 90.0], 3);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Marker data — update as needed
  var markers = [
    {
      name: "NIE / NTU (Singapore)",
      people: ["Dr. C. L. G. Quek", "R. E. Koh", "A. Abidi"],
      coords: [1.3483, 103.6831]
    },
    {
      name: "Swinburne University of Technology (Hawthorn)",
      people: ["Prof. Chengfei Liu", "Dr. Lu Chen", "Dr. Rui Zhou", "A. Abidi"],
      coords: [-37.8206, 145.0400]
    },
    {
      name: "Deakin University (Burwood)",
      people: ["Teaching collaborations (sessional tutor)"],
      coords: [-37.8475, 145.1140]
    },
    {
      name: "Purdue University Northwest (Hammond)",
      people: ["Dr. Quamar Niyaz"],
      coords: [41.5834, -87.4766]
    },
    {
      name: "BITS Pilani (Hyderabad)",
      people: ["Dr. Apurba Das"],
      coords: [17.5933, 78.1230]
    }
  ];

  var bounds = [];
  markers.forEach(function(m) {
    var popup = "<strong>" + m.name + "</strong><br/>" +
                "Collaborators: " + m.people.join(", ");
    var marker = L.marker(m.coords).addTo(map).bindPopup(popup);
    bounds.push(m.coords);
  });

  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [30, 30] });
  }
</script>
