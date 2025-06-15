---
layout: home
title: Recipe Collection
---

# Our Recipe Collection

A curated collection of our favorite recipes.

## Search Recipes

<input type="text" id="recipe-search" placeholder="Search recipes..." style="width:100%;padding:0.5em;font-size:1.1em;margin-bottom:1em;">
<div id="search-results"></div>

<script>
// Fetch the recipe index and enable search
fetch('{{ site.baseurl }}/recipes.json')
  .then(response => response.json())
  .then(recipes => {
    const input = document.getElementById('recipe-search');
    const results = document.getElementById('search-results');
    input.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      if (!query) {
        results.innerHTML = '';
        return;
      }
      const matches = recipes.filter(r =>
        (r.title && r.title.toLowerCase().includes(query)) ||
        (r.category && r.category.toLowerCase().includes(query)) ||
        (r.tags && r.tags.join(',').toLowerCase().includes(query)) ||
        (r.content && r.content.toLowerCase().includes(query))
      );
      if (matches.length === 0) {
        results.innerHTML = '<p>No recipes found.</p>';
        return;
      }
      results.innerHTML = '<ul>' + matches.map(r =>
        `<li><a href="${r.url}">${r.title}</a>` +
        (r.tags && r.tags.length ? ` <small><em>Tags: ${r.tags.join(', ')}</em></small>` : '') +
        '</li>'
      ).join('') + '</ul>';
    });
  });
</script>

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

<div class="tag-list" style="margin-bottom:1em;">
{% assign all_tags = site.pages | map: "tags" | compact | uniq | sort %}
{% for tag in all_tags %}
  <a href="{{ site.baseurl }}/tag.html?tag={{ tag | uri_escape }}" style="display:inline-block; margin:0 0.5em 0.5em 0; padding:0.2em 0.7em; background:#f3f3f3; border-radius:1em; text-decoration:none; color:#333; font-size:1em;"><code>{{ tag }}</code></a>
{% endfor %}
</div>

---

[About]({{ site.baseurl }}/about/)
