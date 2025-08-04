---
title: Team
layout: default
nav_order: 4
---

# Team
{: .no_toc }

<!-- <details markdown="block">
  <summary>
    Table of contents
  </summary> -->
{: .text-delta }
1. TOC
{:toc}
<!-- </details> -->

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

{% assign filtered_team_phd = site.pages | where_exp: "item", "item.path contains 'team/phd_students/'" | sort: "surname" %}
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

{% assign filtered_team_current = site.pages | where_exp: "item", "item.path contains 'team/current_students/'" | sort: "surname" %}
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

### Undergraduate Students

{% assign undergrad_alumni = site.pages | where_exp: "item", "item.path contains 'team/alumni/undergraduate_students/'" | sort: "year" | reverse %}
{% assign years = undergrad_alumni | map: "year" | uniq | sort | reverse %}
<div class="container">
{% for year in years %}
{% assign year_students = undergrad_alumni | where: "year", year | sort: "surname" %}
{% for student in year_students %}
{% if student.website != null %}
<a href="{{ student.website }}" class="content">
    <img src="../pictures/{{ student.people | append: ".jpg" }}" alt="{{ student.people }}">
    <p class="name">{{ student.people }}, {{ student.year }}</p>
    <p class="degree">{{ student.degree }}</p>
</a>
{% else %}
<div class="content">
    <img src="../pictures/{{ student.people | append: ".jpg" }}" alt="{{ student.people }}">
    <p class="name">{{ student.people }}, {{ student.year }}</p>
    <p class="degree">{{ student.degree }}</p>
</div>
{% endif %}
{% endfor %}
{% endfor %}
</div>

### Master Students

{% assign master_alumni = site.pages | where_exp: "item", "item.path contains 'team/alumni/master_students/'" | sort: "year" | reverse %}
{% assign years = master_alumni | map: "year" | uniq | sort | reverse %}
<div class="container">
{% for year in years %}
{% assign year_students = master_alumni | where: "year", year | sort: "surname" %}
{% for student in year_students %}
{% if student.website != null %}
<a href="{{ student.website }}" class="content">
    <img src="../pictures/{{ student.people | append: ".jpg" }}" alt="{{ student.people }}">
    <p class="name">{{ student.people }}, {{ student.year }}</p>
    <p class="degree">{{ student.degree }}</p>
</a>
{% else %}
<div class="content">
    <img src="../pictures/{{ student.people | append: ".jpg" }}" alt="{{ student.people }}">
    <p class="name">{{ student.people }}, {{ student.year }}</p>
    <p class="degree">{{ student.degree }}</p>
</div>
{% endif %}
{% endfor %}
{% endfor %}
</div>

### External Mentees

{% assign external_mentees = site.pages | where_exp: "item", "item.path contains 'team/alumni/external_mentees/'" | sort: "year" | reverse %}
{% assign years = external_mentees | map: "year" | uniq | sort | reverse %}
<div class="container">
{% for year in years %}
{% assign year_students = external_mentees | where: "year", year | sort: "surname" %}
{% for student in year_students %}
{% if student.website != null %}
<a href="{{ student.website }}" class="content">
    <img src="../pictures/{{ student.people | append: ".jpg" }}" alt="{{ student.people }}">
    <p class="name">{{ student.people }}, {{ student.year }}</p>
    <p class="school">{{ student.school }}</p>
</a>
{% else %}
<div class="content">
    <img src="../pictures/{{ student.people | append: ".jpg" }}" alt="{{ student.people }}">
    <p class="name">{{ student.people }}, {{ student.year }}</p>
    <p class="school">{{ student.school }}</p>
</div>
{% endif %}
{% endfor %}
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
    .school {
         font-size: small;
         margin-top: 0;
         margin-bottom: 1px;
        max-width: 200px;
        word-wrap: break-word;
        line-height: 1;
    }
</style>
