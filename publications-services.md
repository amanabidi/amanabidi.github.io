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

## Selected Publications {#publications}

- **A. Abidi**, F. Ali, C. L. G. Quek, R. E. Koh (2024).  
  **Using LLMs to support teacher reflections on using questions to deepen learning and promote student engagement**.  
  *Proceedings of ASCILITE 2024 — Australasian Society for Computers in Learning in Tertiary Education Conference*.  
  DOI: [10.14742/apubs.2024.1195](https://doi.org/10.14742/apubs.2024.1195).

- **A. Abidi**, L. Chen, R. Zhou, C. Liu (2024).  
  **Searching Personalized *k*-wing in Bipartite Graphs — Extended Abstract (TKDE Poster Track).**  
  *40th IEEE International Conference on Data Engineering (ICDE 2024), Utrecht, The Netherlands.*  
  DOI: [10.1109/ICDE60146.2024.00495](https://doi.org/10.1109/ICDE60146.2024.00495) · IEEE page: [computer.org](https://www.computer.org/csdl/proceedings-article/icde/2024/171500f727/1YOtqb6CwUw)

- A. Das, **A. Abidi**, A. Shingane, M. Kiran (2023, preprint).  
  **Balanced Butterfly Counting in Bipartite-Network**.  
  *arXiv preprint*.  
  URL: [arXiv:2308.07932](https://arxiv.org/abs/2308.07932).

- **A. Abidi**, L. Chen, R. Zhou, C. Liu (2022).  
  **Searching Personalized *k*-wing in Bipartite Graphs**.  
  *IEEE Transactions on Knowledge and Data Engineering (IEEE TKDE)*.  
  DOI: [10.1109/TKDE.2022.3199592](https://doi.org/10.1109/TKDE.2022.3199592). 

- **A. Abidi**, L. Chen, C. Liu, R. Zhou (2022).  
  **On Maximizing the Vertex Coverage for Top-*k* *t*-Bicliques in Bipartite Graphs**.  
  *2022 IEEE 38th International Conference on Data Engineering (ICDE 2022)*.  
  Article page: [IEEE Computer Society Digital Library](https://www.computer.org/csdl/proceedings-article/icde/2022/088300c346/1FwFuCFcARG). 

- **A. Abidi**, R. Zhou, L. Chen, C. Liu (2020).  
  **Pivot-based Maximal Biclique Enumeration**.  
  *Proceedings of the Twenty-Ninth International Joint Conference on Artificial Intelligence (IJCAI-PRICAI 2020)*.  
  PDF: [ijcai.org/proceedings/2020/0492.pdf](https://www.ijcai.org/proceedings/2020/0492.pdf).

- R. Singh, **A. Abidi**, M. A. Qadeer (2016).  
  **SyncWorld: A Cloud Storage/Synchronization Service using Java and PHP**.  
  *Thirteenth International Conference on Wireless and Optical Communications Networks (WOCN 2016)*.  
  Open copy: [ResearchGate PDF](https://www.researchgate.net/profile/Aman-Abidi/publication/311313841_SyncWorld_A_cloud_storagesynchronization_service_using_Java_and_Php/links/5b591920aca272a2d66b9c23/SyncWorld-A-cloud-storage-synchronization-service-using-Java-and-Php.pdf) · TOC record: [Proceedings.com TOC](https://www.proceedings.com/content/032/032386webtoc.pdf). 


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
