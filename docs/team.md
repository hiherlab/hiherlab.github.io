---
title: Team
layout: default
nav_order: 4
---

# Team
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Staff
{% assign filtered_team_staff = site.pages | where_exp: "item", "item.path contains 'team/staff/'" %}
<div class="container">
{% for staff in filtered_team_staff %}
<a href="{{ staff.website }}" class="content">
    <img src="../pictures/{{ staff.people | append: ".jpg" }}" alt="{{ staff.people }}">
    <p class="name">{{ staff.people }}</p>
    <p class="degree">{{ staff.degree }}</p>
</a>
{% endfor %}
</div>

## PhD Students

{% assign filtered_team_phd = site.pages | where_exp: "item", "item.path contains 'team/phd_students/'" %}
<div class="container">
{% for phd in filtered_team_phd %}
{% if phd.website != null %}
<a href="{{ phd.website }}" class="content">
    <img src="../pictures/{{ phd.people | append: ".jpg" }}" alt="{{ phd.people }}">
    <p class="name">{{ phd.people }}</p>
    <p class="degree">{{ phd.degree }}</p>
</a>
{% else %}
<div class="content">
    <img src="../pictures/{{ phd.people | append: ".jpg" }}" alt="{{ phd.people }}">
    <p class="name">{{ phd.people }}</p>
    <p class="degree">{{ phd.degree }}</p>
</div>
{% endif %}
{% endfor %}
</div>

## Current Students

{% assign filtered_team_current = site.pages | where_exp: "item", "item.path contains 'team/current_students/'" %}
<div class="container">
{% for current in filtered_team_current %}
{% if current.website != null %}
<a href="{{ current.website }}" class="content">
    <img src="../pictures/{{ current.people | append: ".jpg" }}" alt="{{ current.people }}">
    <p class="name">{{ current.people }}</p>
    <p class="degree">{{ current.degree }}</p>
</a>
{% else %}
<div class="content">
    <img src="../pictures/{{ current.people | append: ".jpg" }}" alt="{{ current.people }}">
    <p class="name">{{ current.people }}</p>
    <p class="degree">{{ current.degree }}</p>
</div>
{% endif %}
{% endfor %}
</div>

## Alumni

### Master Students

{% assign filtered_team_master = site.pages | where_exp: "item", "item.path contains 'team/alumni/master_students/'" %}
<div class="container">
{% for master in filtered_team_master %}
{% if master.website != null %}
<a href="{{ master.website }}" class="content">
    <img src="../pictures/{{ master.people | append: ".jpg" }}" alt="{{ master.people }}">
    <p class="name">{{ master.people }}</p>
    <p class="degree">{{ master.degree }}</p>
</a>
{% else %}
<div class="content">
    <img src="../pictures/{{ master.people | append: ".jpg" }}" alt="{{ master.people }}">
    <p class="name">{{ master.people }}</p>
    <p class="degree">{{ master.degree }}</p>
</div>
{% endif %}
{% endfor %}
</div>

### Undergraduate Students

{% assign filtered_team_under = site.pages | where_exp: "item", "item.path contains 'team/alumni/undergraduate_students/'" %}
<div class="container">
{% for under in filtered_team_under %}
{% if under.website != null %}
<a href="{{ under.website }}" class="content">
    <img src="../pictures/{{ under.people | append: ".jpg" }}" alt="{{ under.people }}">
    <p class="name">{{ under.people }}</p>
    <p class="degree">{{ under.degree }}</p>
</a>
{% else %}
<div class="content">
    <img src="../pictures/{{ under.people | append: ".jpg" }}" alt="{{ under.people }}">
    <p class="name">{{ under.people }}</p>
    <p class="degree">{{ under.degree }}</p>
</div>
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
    }
    .content img {
        width: 200px;
        height: 200px;
         border-radius: 10px;
    }
   .name {
         font-weight: bold;
         margin-top: 3px;
         margin-bottom: 0;
   }
    .degree {
         font-size: small;
         margin-top: 0;
         margin-bottom: 1px;
        max-width: 200px;
        word-wrap: break-word;
        line-height: 1;
    }
</style>
