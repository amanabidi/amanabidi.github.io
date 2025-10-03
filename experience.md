---
layout: default
title: Work Experience
permalink: /experience
---


<nav style="margin: 1rem 0; font-size: 0.95rem;">
  <a href="/" style="margin-right: 1rem;">Home</a>
  <a href="/publications-services" style="margin-right: 1rem;">Selected Publications & Services</a>
  <a href="/talks-outreach" style="margin-right: 1rem;">Talks & Outreach</a>
  <a href="/experience" style="margin-right: 1rem;">Work Experience</a>
  <!--
  <a href="/places" style="margin-right: 1rem;">Places I Visited</a>
  -->
</nav>

## Roles (summary)
- **Research Fellow**, NIE/NTU, Singapore (2023–present).  
- **Research Fellow**, NTU, Singapore (2022–2023).  
- **Sessional Tutor**, Deakin University & Swinburne University (2018–2022).  
- **Casual eExams IT Support Officer**, Monash University (2022).  
- **Assistant System Engineer**, Tata Consultancy Services (2015–2017, Hyderabad).
  
# Work Experience

The map shows the institutions and cities where I have worked, taught or supported operations.






<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<style>
  #exp-map { height: 520px; margin: 1rem 0; border: 1px solid #ddd; }
</style>

<div id="exp-map" role="region" aria-label="Experience map"></div>

<script>
  var map = L.map('exp-map').setView([7.5, 90.0], 3);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  var places = [
    {
      name: "NIE / NTU — Research Fellow (2023–present)",
      coords: [1.3483, 103.6831],
      details: "MOE‑funded analytics toolbox; NLP + LLMs + RAG; supervision; school coordination."
    },
    {
      name: "NTU — Research Fellow (2022–2023)",
      coords: [1.3460, 103.6820],
      details: "Algorithms for geo‑spatial / spatio‑temporal graph data; smart‑city/logistics use‑cases."
    },
    {
      name: "Swinburne University — PhD & Sessional Tutor (2018–2022)",
      coords: [-37.8206, 145.0400],
      details: "Graph mining PhD; OOP/Programming/Data‑science teaching."
    },
    {
      name: "Deakin University — Sessional Tutor (2022)",
      coords: [-37.8475, 145.1140],
      details: "Research methods & data analysis teaching."
    },
    {
      name: "Monash University — eExams IT Support (2022)",
      coords: [-37.9105, 145.1362],
      details: "Operational support for eExams."
    },
    {
      name: "TCS — Assistant System Engineer (2015–2017, Hyderabad)",
      coords: [17.4435, 78.3772],
      details: "ServiceNow admin + UI development; HTML/CSS/JS/XML/Bootstrap."
    }
  ];

  var bounds = [];
  places.forEach(function(p) {
    L.marker(p.coords).addTo(map).bindPopup("<strong>" + p.name + "</strong><br/>" + p.details);
    bounds.push(p.coords);
  });
  if (bounds.length > 0) { map.fitBounds(bounds, {padding: [30,30]}); }
</script>
