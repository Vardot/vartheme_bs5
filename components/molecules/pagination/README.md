# Pagination

Show pagination to indicate a series of related content exists across multiple pages.

> ## Bootstrap Documentation on 
> * [Pagination](https://getbootstrap.com/docs/5.3/components/pagination)

## Available variables (From Drupal views):
* `heading_id`: Pagination heading ID.
* `items`: List of pager items.
*   The list is keyed by the following elements:
*   - `first`: Item for the first page; not present on the first page of results.
*   - `previous`: Item for the previous page; not present on the first page
*     of results.
*   - `next`: Item for the next page; not present on the last page of results.
*   - `last`: Item for the last page; not present on the last page of results.
*   - `pages`: List of pages, keyed by page number.
*   Sub-sub elements:
*   `items.first`, `items.previous`, `items.next`, `items.last`, and each item inside
*   items.pages contain the following elements:
*   - `href`: URL with appropriate query parameters for the item.
*   - `attributes`: A keyed list of HTML attributes for the item.
*   - `text`: The visible text used for the item link, such as `"Previous"`
*     or `"Next"`.
* `current`: The page number of the current page.
* `ellipses`: If there are more pages than the quantity allows, then an ellipsis before or after the listed pages may be present.
*   - `previous`: Present if the currently visible list of pages does not start
*     at the first page.
*   - `nex`: Present if the visible list of pages ends before the last page.

## Available properties:
* `size`: `sm`, `lg`
* `alignment`: `start` | `end` | `center` | `vertical`.
* `pagination_utility_classes`: An array of utility classes. Use this property to add extra Bootstrap utility classes or your custom class over to this to this component.

## Available attributes:        
* `attributes`: HTML attributes for the pagination element.

## Available slots:
* N/A 


**Example #1:** Use for displaying a pager.
```
{% include 'vartheme_bs5:pagination' with {
  items: items,
  alignment: 'center',
  pagination_utility_classes: ['mt-3']
} %}
```

**Example #2:** Use for large pager.
```
{% include 'vartheme_bs5:pagination' with {
  items: items,
  size: 'lg',
  alignment: 'center',
  pagination_utility_classes: ['mt-3']
} %}
```

**Example #3:** Use for small pager.
```
{% include 'vartheme_bs5:pagination' with {
  items: items,
  size: 'sm',
  alignment: 'center',
  pagination_utility_classes: ['mt-3']
} %}
```

**Example #4:** Use in views mini-pager
```
{% include 'vartheme_bs5:pagination' with {
  pagination_utility_classes: ['mt-2']
} %}
```