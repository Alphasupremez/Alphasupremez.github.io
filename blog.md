---
layout: default
title: "Blog"
permalink: /blog/
---

# Latest Blog Posts

Here are the latest posts from my different blog topics:

## Data Science
### Latest Post:
{% assign data_science_posts = site.posts | where: "categories", "Data Science" | sort: "date" %}
{% if data_science_posts.size > 0 %}
  <h3><a href="{{ data_science_posts[0].url }}">{{ data_science_posts[0].title }}</a></h3>
  <p>{{ data_science_posts[0].date | date: "%B %d, %Y" }}</p>
{% else %}
  <p>No posts in this category yet.</p>
{% endif %}

## Tutorials
### Latest Post:
{% assign tutorial_posts = site.posts | where: "categories", "Tutorials" | sort: "date" %}
{% if tutorial_posts.size > 0 %}
  <h3><a href="{{ tutorial_posts[0].url }}">{{ tutorial_posts[0].title }}</a></h3>
  <p>{{ tutorial_posts[0].date | date: "%B %d, %Y" }}</p>
{% else %}
  <p>No posts in this category yet.</p>
{% endif %}

## Machine Learning
### Latest Post:
{% assign ml_posts = site.posts | where: "categories", "Machine Learning" | sort: "date" %}
{% if ml_posts.size > 0 %}
  <h3><a href="{{ ml_posts[0].url }}">{{ ml_posts[0].title }}</a></h3>
  <p>{{ ml_posts[0].date | date: "%B %d, %Y" }}</p>
{% else %}
  <p>No posts in this category yet.</p>
{% endif %}
