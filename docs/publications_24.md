---
layout: default
title: Publications
nav_exclude: true
---

# Publications
[2025](/docs/publications.html){: .btn }
[2024](/docs/publications_24.html){: .btn .btn-blue }
[2023](/docs/publications_23.html){: .btn }
[Other Publications](/docs/publications_other.html){: .btn }

{% assign filtered_publications = site.pages | where_exp: "item", "item.path contains 'publications/2024/'" %}
{% for publication in filtered_publications %}
<div class="publication-item">
    <div class="publication-image">
        <img src="publications/pictures/{{ publication.name | replace: ".md", ".png" }}" alt="{{ publication.title }}">
    </div>
    <div class="publication-content">
        <h2 class="publication-title">{{ publication.title }}</h2>
        <p class="publication-authors">{{ publication.author | replace: 'Yue Li', '<strong>Yue Li</strong>' }}</p>
        <p class="publication-venue">{{ publication.venue }}, {{ publication.year }}</p>
        <div class="pub-links">
            <a href="{{ publication.doi }}" class="pub-link" target="_blank">DOI</a>
            {% if publication.bibtex %}
            <a href="{{ publication.bibtex }}" class="pub-link" target="_blank">BibTeX</a>
            {% endif %}
            {% if publication.paper %}
            <a href="/docs/publications/pdf/{{ publication.paper | url_encode }}" class="pub-link" target="_blank">Paper</a>
            {% endif %}
        </div>
    </div>
</div>
<hr class="publication-divider">
{% endfor %}

<style>
    .publication-item {
        display: flex;
        margin-bottom: 30px;
        margin-top: 30px;
    }
    
    .publication-image {
        flex: 0 0 250px;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .publication-image img {
        width: 100%;
        border: 1px solid #ddd;
    }
    
    .publication-content {
        flex: 1;
    }
    
    .publication-title {
        font-size: 1.2rem;
        margin-top: 0;
        margin-bottom: 10px;
        font-weight: 600;
    }
    
    .publication-authors {
        margin-bottom: 5px;
    }
    
    .publication-venue {
        margin-bottom: 15px;
        color: #555;
    }
    
    .pub-links {
        margin-top: 10px;
    }
    
    .pub-link {
        display: inline-block;
        margin-right: 10px;
        padding: 5px 15px;
        background-color: white;
        color: #333;
        border: 1px solid #ccc;
        border-radius: 4px;
        text-decoration: none;
        font-size: 0.9rem;
    }
    
    .publication-divider {
        border: 0;
        height: 1px;
        background-color: #eee;
        margin: 30px 0;
    }
    
    strong {
        font-weight: bold;
    }
</style>