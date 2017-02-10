---
title: "Theming"
subtitle: "Theming and Styling the News App"
---

<!-- toc -->

The look and feel of the News app is mostly controlled by the custom properties defined in `news-app.html`. However, to avoid FOUC on browsers in which custom properties have no native implementation, the following properties are defined with literal values in index.html:

* Page background color
* Font
* Text color

## Basic theming for the News app

Broad changes to the look and feel of the News app can be made with a few properties in `index.html` and `news-app.html`. Here's how to modify:

* The [page background color](#page-background-color) used throughout the app
* The main [font](#font) used in the app
* The [text color](#text-color)
* The [border styles and colors](#border-styles-and-colors) used throughout the app

### Page background color

To change the page background color for the whole app, edit the value of background-color for the `<body>` element in `index.html`:

`index.html`
```html
<style>
  body {
    ...
    background-color: #FAFAFA;
    ...
  }
</style>

```

### Font

To change the font for the app headlines, article text and main title, edit the value of font-family for the `<body>` element in `index.html`:

`index.html`
```html
<style>
  body {
    ...
    font-family: Georgia;
    ...
  }
</style>
```

### Text color

To change the text color for the app headlines, article text and main title, edit the value of color for the `<body>` element in `index.html`:

`index.html`
```html
<style>
  body {
    ...
    color: #383838;
    ...
  }
</style>
```

This controls the font and text color inside the shadow trees of elements inside the `<body>` tags, since these properties are inherited.

### Border styles and colors

To change border styles and colors throughout the app, edit the value of `--app-border-style` and `--app-transparent-border-style` in `news-app.html`:

`news-app.html`
```html
<style>
  :host {
    ...
    --app-border-style: 5px solid #FFF200;
    --app-transparent-border-style: 1px solid #FFF200;
    ...
  }
</style>
```


## Tutorial: Modify the News theme

In this tutorial, we modify the look and feel of the News theme from [the defaults](https://news.polymer-project.org/) to match [this design](https://polymer-news-theming.appspot.com).

Before: {.caption}

<img src="image_0.jpg" alt="News theme before modifications" width="700px">

After: {.caption}


<img src="image_1.jpg" alt="News theme after modifications" width="700px">

We'll take these steps:

* [Modify the site name](#modify-the-site-name)
* [Modify the page background color and font family](#modify-the-page-background-color-and-font-family)
* [Modify border and sticky nav bar styles](#modify-border-and-sticky-nav-bar-styles)
* [Modify sub-section headline styles in the list view](#modify-sub-section-headline-styles-in-the-list-view)

### Modify the site name

In `index.html`, change the document title and the value of the `app-title` property and the contents of `<news-app>` from "NEWS" to your choice of title.

`index.html`
```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">
  <title>Your Site Title</title>
  <link rel="shortcut icon" sizes="32x32" href="/images/news-icon-32.jpg">
  <meta name="theme-color" content="#000">
  <link rel="manifest" href="/manifest.json">
  ...
</head>
...
<body>
  <news-app unresolved app-title="Your Site Title">Your Site Title</news-app>
</body>
```

Before: {.caption}

<img src="image_1.jpg" alt="News site before modifying the title" width="700px">

After: {.caption}

<img src="image_2.jpg" alt="News site after modifying the title" width="700px">

### Modify the page background color and font family

In `index.html`, change the value of the background-color property to `#F1F3F2`. Also, change the value of `font-family` to `sans-serif`.

`index.html`
```html
<style>
  body {
    margin: 0;
    background-color: #F1F3F2;
    color: #383838;
    font-family: sans-serif;
    min-height: 100vh;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  ...
</style>
```

Before: {.caption}

<img src="image_3.jpg" alt="Before modifying background color and font family" width="700px">

After: {.caption}

<img src="image_4.jpg" alt="After modifying background color and font family" width="700px">

### Modify border and sticky nav bar styles

To modify border and sticky nav bar styles, we'll edit the values of the custom properties that control them. These properties are stored in `news-app.html`. Edit this file as follows:

`news-app.html`: Before {.caption}

```html
<style>
  --app-border-style: 1px solid #CCC;
  --app-transparent-border-style: 1px solid rgba(255, 255, 255, 0.5);
  --app-button-border-style: 2px solid #222;
  --app-cover-text-color: #FFF;
  --app-nav-background-color: #222;
  --app-nav-text-color: #FFF;
  --app-nav-deselected-text-color: #CCC;
  --app-nav-selected-background-color: #555;
  ...
</style>
```

`news-app.html`: After {.caption}

```html
<style>
  --app-border-style: 5px solid #FFF200;
  --app-transparent-border-style: 1px solid #FFF200;
  --app-button-border-style: 2px solid #FFF200;
  --app-cover-text-color: #FFF;
  --app-nav-background-color: #E9E7E8;
  --app-nav-text-color: #383838;
  --app-nav-deselected-text-color: #888;
  --app-nav-selected-background-color: #FFF200;
  ...
</style>
```

For more information on what these custom properties control, see the [Custom Properties Reference](#custom-properties-reference) below.

Before: {.caption}

<img src="image_5.jpg" alt="Before modifying border styles" width="700px">

<img src="image_6.jpg" alt="Before modifying sticky nav bar styles" width="700px">

After: {.caption}

<img src="image_7.jpg" alt="After modifying border styles" width="700px">

<img src="image_8.jpg" alt="After modifying sticky nav bar styles" width="700px">

### Modify sub-section headline styles in the list view

In `news-app.html`, update the `--app-sub-section-headline` mixin.

* Change the value of `border-top` to `none`.
* Change the value of `font-size` to `24px`.
* Add two properties to this mixin: `font-family: "Georgia"` and `font-style: italic`.

`news-app.html`: Before {.caption}

```html
<style>
  ...
  --app-sub-section-headline: {
    border-top: var(--app-border-style);
    border-bottom: var(--app-border-style);
    font-size: 13px;
    padding: 8px;
    text-align: center;
  };
  ...
</style>
 ```

`news-app.html`: After {.caption}

```html
<style>
  ...
  --app-sub-section-headline: {
    border-top: var(--app-border-style);
    border-bottom: var(--app-border-style);
    font-size: 50px;
    padding: 8px;
    text-align: center;
    font-family: "Georgia";
    font-size: 24px;
    font-style: italic;
  };
  ...
</style>
```

For more information on what this mixin controls, see the [Custom Properties Reference](#custom-properties-reference).

Before: {.caption}

<img src="image_9.jpg" alt="Before modifying subsection headline styles" width="700px">

After: {.caption}

<img src="image_10.jpg" alt="After modifying subsection headline styles" width="700px">

The end result can be seen here: [https://polymer-news-theming.appspot.com](https://polymer-news-theming.appspot.com)

<img src="image_11.jpg" alt="After modifying the news site theme" width="700px">

## Custom Properties Reference

The following custom properties are defined in news-app.html:

* [--app-border-style](#app-border-style)
* [--app-transparent-border-style](#app-transparent-border-style)
* [--app-button-border-style](#app-button-border-style)
* [--app-cover-text-color](#app-cover-text-color)
* [--app-nav-background-color](#app-nav-background-color)
* [--app-nav-text-color](#app-nav-text-color)
* [--app-nav-deselected-text-color](#app-nav-deselected-text-color)
* [--app-nav-selected-background-color](#app-nav-selected-background-color)
* [--app-sub-section-headline](#app-sub-section-headline)

### `--app-border-style`

<b>Default:</b> `1px solid #CCC`

The width, style and color of the borders around menu bars, category headers, article headlines and items in list views.

Examples: {.caption}

`--app-border-style: 1px solid #CCC;`

<img src="app-border-style.jpg" alt="--app-border-style custom property default" width="700px">

`--app-border-style: 5px solid #FFF200;`

<img src="app-border-style-1.jpg" alt="--app-border-style custom property modified" width="700px">

### `--app-transparent-border-style`

<b>Default:</b> `1px solid rgba(255, 255, 255, 0.5)`

The width, style and color of the borders around the date line and featured item above an image. (For performance, this is a separate property.)

Examples: {.caption}

`--app-transparent-border-style: 1px solid rgba(255, 255, 255, 0.5);`

<img src="app-transparent-border-style.jpg" alt="--app-transparent-border-style custom property default" width="400px">

`--app-transparent-border-style: 5px solid #FFF200;`

<img src="app-transparent-border-style-1.jpg" alt="--app-transparent-border-style custom property modified" width="400px">

### `--app-button-border-style`

<b>Default:</b> `2px solid #222`

Width, style and color of borders around buttons. Used in news-network-warning.html.


### `--app-cover-text-color`

<b>Default:</b> `#FFF`

Color of the text on the featured item in the list view. See [Notes](#notes) below.

Examples: {.caption}

`--app-cover-text-color: #FFF;`

<img src="app-cover-text-color.jpg" alt="--app-cover-text-color default" width="400px">

`--app-cover-text-color: orange;`

<img src="app-cover-text-color-1.jpg" alt="--app-cover-text-color modified" width="400px">

### `--app-nav-background-color`

<b>Default:</b> `#222`

Background of the sticky nav bar/mobile app drawer.

Examples: {.caption}

`--app-nav-background-color: #E9E7E8;`

<img src="app-nav-background-color.jpg" alt="--app-nav-background-color default" width="700px">

`--app-nav-background-color: orange;`

<img src="app-nav-background-color-1.jpg" alt="--app-nav-background-color modified" width="700px">

### `--app-nav-text-color`

<b>Default:</b> `#FFF`

Text color for the sticky nav bar/mobile app drawer.


### `--app-nav-deselected-text-color`

<b>Default:</b> `#CCC`

Text color of category links in the sticky nav bar menu/mobile app drawer.</p>

Examples: {.caption}

`--app-nav-deselected-text-color: #888;`

<img src="app-nav-deselected-text-color.jpg" alt="--app-nav-deselected-text-color default" width="700px">

`--app-nav-deselected-text-color: blue;`

<img src="app-nav-deselected-text-color-1.jpg" alt="--app-nav-deselected-text-color modified" width="700px">

### `--app-nav-selected-background-color`

<b>Default:</b> `#555`

Background color of current category in mobile app drawer.

Examples: {.caption}

`--app-nav-selected-background-color: #555;`

<img src="app-nav-selected-background-color.jpg" alt="--app-nav-selected-background-color default" width="200px">

`--app-nav-selected-background-color: #FFF200;`

<img src="app-nav-selected-background-color-1.jpg" alt="--app-nav-selected-background-color modified" width="200px">

### `--app-sub-section-headline`

Mixin for headlines of the sub-sections in the list view. See [Notes](#notes) below.


### Notes

#### --app-cover-text-color for mobile

For mobile, the equivalent value of `--app-cover-text-color` is hard-coded in `index.html` to allow for browsers that don't support custom properties:

`index.html`
```css
/* mobile */
@media (max-width: 767px) {
  body {
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 15%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.7) 48%, rgba(0,0,0,1) 60%);
    background-repeat: no-repeat;
    background-size: 100% 100vh;
  }
  news-app[unresolved] {
    height: 22px;
    padding-top: 21px;
    font-size: 20px;
    color: #FFF; /* --app-cover-text-color */
  }
}
```

#### --app-sub-section-headline default values
`news.app.html`
```css
--app-sub-section-headline: {
  border-top: var(--app-border-style);
  border-bottom: var(--app-border-style);
  font-size: 13px;
  padding: 8px;
  text-align: center;
};
```

With defaults:

<img src="image_12.jpg" alt="--app-sub-section-headline defaults" width="700px">

With these changes:
```css
--app-sub-section-headline: {
  border-top: none;
  border-bottom: none;
  font-size: 30px;
  padding: 8px;
  text-align: left;
};
```

<img src="image_13.jpg" alt="--app-sub-section-headline modified" width="700px">

## **Reference: Hard-coded values**

To change the page background color, margin, font, and text color for the app, edit this section of index.html:

`index.html`
```html
<style>
  body {
    margin: 0;
    background-color: #FAFAFA;
    color: #383838;
    font-family: Georgia;
    min-height: 100vh; /* Pushes footer content below the fold during initial page load to avoid FOUC */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* Overrides the iOS default transparent grey highlight when tapping a link */
  }
  ...
</style>
```
