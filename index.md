---
layout: home
title: Recipe Collection
---

# Welcome to Our Recipe Collection

A curated collection of our favorite recipes.

## Latest Recipes

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

## Recipe Categories

- [Cookies]({{ site.baseurl }}/cookies) 
- [Main Dishes]({{ site.baseurl }}/main-dishes)
- [Desserts]({{ site.baseurl }}/desserts)

## About This Site

This is a personal collection of tested and loved recipes. Each recipe includes detailed instructions, ingredients list, and helpful tips for the best results.

[Browse All Recipes]({{ site.baseurl }}/recipes/) | [About]({{ site.baseurl }}/about/)
