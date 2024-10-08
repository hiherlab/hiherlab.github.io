---
layout: default
title: Heritage Projects
nav_exclude: true
---

# Heritage Projects
[All](/docs/project.html){: .btn }
[Heritage](/docs/project_heritage.html){: .btn .btn-blue }
[Education](/docs/project_education.html){: .btn }
[Play](/docs/project_play.html){: .btn }
[VR](/docs/project_vr.html){: .btn }
[AR](/docs/project_ar.html){: .btn }
[PhD](/docs/project_phd.html){: .btn }
[PG](/docs/project_pg.html){: .btn }
[UG](/docs/project_ug.html){: .btn }
[StudentCompetition](/docs/project_competition.html){: .btn }

{% assign filtered_projects = site.pages | where_exp: "item", "item.path contains 'projects/'" %}
{% assign sorted_projects = filtered_projects | sort: 'year' | reverse %}

<div class="container">
{% for project in sorted_projects %}
{% if project.tags contains "Heritage" %}
<a href="{{ project.url }}" class="content"> 
    <img src="projects/project_pictures/{{ project.name | replace: ".md", ".png" }}" alt="{{ project.title }}">
    <p class="title">{{ project.title }}</p> 
    <p class="tags">{% for tag in project.tags %}
            {{ tag }}{% unless forloop.last %}, {% endunless %}
        {% endfor %}</p>
</a>
{% endif %}
{% endfor %}
</div>

<style>
    .container {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 35px;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .content img {
        width: 300px;
        height: 200px;
        border-radius: 10px;
    }
    .title {
         font-weight: bold;
        text-align: center;
         margin-top: 5px;
         margin-bottom: 0;
        max-width: 300px;
        word-wrap: break-word;
        line-height: 1.3;
   }
    .tags {
         font-size: small;
        text-align: center;
         margin-top: 0;
         margin-bottom: 1px;
        max-width: 300px;
        word-wrap: break-word;
    }
</style>
