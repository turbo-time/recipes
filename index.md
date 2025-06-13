---
layout: home
title: Recipe Collection
---

# Our Recipe Collection

A curated collection of our favorite recipes.

## All Recipes

{% assign pages_with_title = site.pages | where_exp: "item", "item.title != nil" %}
{% assign recipes = pages_with_title | where_exp: "item", "item.layout != 'home'" %}

{% assign all_categories = recipes | map: "category" | compact | uniq %}
{% for cat in all_categories %}
### {{ cat | capitalize }}
{% for recipe in recipes %}
{% if recipe.category == cat %}
- [{{ recipe.title }}]({{ recipe.url | relative_url }})
  {% if recipe.tags %}
  <small><em>Tags: {{ recipe.tags | join: ", " }}</em></small>
  {% endif %}
{% endif %}
{% endfor %}
{% endfor %}

### Uncategorized
{% for page in recipes %}
{% if page.category == nil and page.name != "404.html" and page.name contains "Recipes tagged" == false %}
- [{{ page.title }}]({{ page.url | relative_url }})
  {% if page.tags %}
  <small><em>Tags: {{ page.tags | join: ", " }}</em></small>
  {% endif %}
{% endif %}
{% endfor %}

## Recipe Tags

{% assign all_tags = site.pages | map: "tags" | compact | uniq | sort %}
{% for tag in all_tags %}
[<code>{{ tag }}</code>]({{ site.baseurl }}/tags/{{ tag }}){% unless forloop.last %} {% endunless %}
{% endfor %}

---

[About]({{ site.baseurl }}/about/)
