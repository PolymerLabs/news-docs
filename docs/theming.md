---
title: Theming
subtitle: Theming and Styling the News App
---

<!-- toc -->

The look and feel of the News app is mostly controlled by the custom properties defined in `news-app.html`. However, to avoid FOUC on browsers in which custom properties have no native implementation, the following properties are defined with literal values in index.html:

* Page background color
* Font
* Text color

## Basic Theming for the News App

Broad changes to the look and feel of the News app can be made with a few properties in `index.html` and `news-app.html`.

* Background color
* Font  
* Text color
* Border styles and colors

### Background color

To change the page background color for the whole app, edit the value of `background-color` for the `<body>` element in `index.html`:

`index.html`
```
<style>
  body {
    ...
    background-color: #FAFAFA;
    ...
  }
</style>
```

### Font

To change the font for the app headlines, article text and main title, edit the value of `font-family` for the `<body>` element in `index.html`:

`index.html`
```
<style>
  body {
    ...
    font-family: Georgia;
    ...
  }
</style>
```

### Text color

To change the text color for the app headlines, article text and main title, edit the value of `color` for the `<body>` element in `index.html`:

`index.html`
```
<style>
  body {
    ...
    color: #383838;
    ...
  }
</style>
```

### Border styles and colors

To change border styles and colors throughout the app, edit the value of `--app-border-style` in `news-app.html`:

`news-app.html`
```
<style>
  :host {
    ...
    --app-border-style: 1px solid #CCC;
    ...
  }
</style>
```

## Theming Tutorial

In this tutorial, we modify the look and feel of the News theme to match the [Vox design](https://polymer-news-vox.appspot.com/).

### 1. Modify the site name

In `index.html`, change the document title and the value of the app-title property from "NEWS" to "Vox".

`index.html`
```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">

  <title>Vox</title>

  <link rel="shortcut icon" sizes="32x32" href="/images/news-icon-32.png">
  <meta name="theme-color" content="#000">
  <link rel="manifest" href="/manifest.json">
  ...
</head>
...
<body>

  <news-app unresolved app-title="NEWS">Vox</news-app>
</body>
```

### 2. Modify the page background color and font family

In `index.html`, change the value of the `background-color` property to `#F1F3F2`. Also, change the value of `font-family` to `sans-serif`.

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
</style>
```

### 3. Modify the custom properties that define the app's border styles and sticky nav bar styles

To do this, edit the values of the custom properties in `news-app.html` as follows:

`news-app.html`
```css
--app-border-style: 5px solid #FFF200;
--app-transparent-border-style: 1px solid #FFF200;
--app-button-border-style: 2px solid #FFF200;
--app-cover-text-color: #FFF;
--app-nav-background-color: #E9E7E8;
--app-nav-text-color: #383838;
--app-nav-deselected-text-color: #888;
--app-nav-selected-background-color: #FFF200;
```

For more information on what these custom properties control, see [Custom Properties Reference](#custom-properties-reference).

### 4. Modify the headline styles of the sub-sections in the list view

In `news-app.html`, update the `--app-sub-section-headline` mixin.
* Change the value of `border-top` to `none`.
* Change the value of `font-size` to `24px`.
* Add two properties to this mixin: `font-family: "Georgia"` and `font-style: italic`.

`news-app.html`
```css
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
```

For more information on what this mixin controls, see [Custom Properties Reference](#custom-properties-reference).

## Custom Properties Reference

The following custom properties are defined in `news-app.html`:

| Custom property | Description | Default |
| --- | --- | --- |
| `--app-border-style` | The width, style and color of the borders around menu bars, category headers, article headlines and items in list views. | `1px solid #CCC` |
| `--app-transparent-border-style` | The width, style and color of the borders around the date line and featured item. | `1px solid rgba(255, 255, 255, 0.5)` |
| `--app-button-border-style` | Width, style and color of borders around buttons. Used in news-network-warning.html. | `2px solid #222` |
| `--app-cover-text-color` | Color of the text on the featured item in the list view. See *Notes* below. | `#FFF` |
| `--app-nav-background-color` | Background of the sticky nav bar/mobile app drawer. | `#222` |
| `--app-nav-text-color` | Text color for the sticky nav bar/mobile app drawer. | `#FFF` |
| `--app-nav-deselected-text-color` | Text color of category links in the sticky nav bar menu/mobile app drawer. | `#CCC` |
| `--app-nav-selected-background-color` | Background color of current category in mobile app drawer. | `#555` |
| `--app-sub-section-headline` | Mixin for headlines of the sub-sections in the list view. | See Notes |


### Notes

#### --app-cover-text-color for mobile

For mobile, the equivalent value of `--app-cover-text-color` is hard-coded in index.html to allow for browsers that don't support custom properties:

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
```css
--app-sub-section-headline: {
  border-top: var(--app-border-style);
  border-bottom: var(--app-border-style);
  font-size: 13px;
  padding: 8px;
  text-align: center;
};
```

## Hard-coded Values Reference

To change the page background color, font, and text color for the app, edit this section of `index.html`:

TBD

`index.html`
```
<style>
  body {
    margin: 0; // editing or commenting this out doesn't seem to change anything
    background-color: #FAFAFA;
    color: #383838;
    font-family: Georgia;
    min-height: 100vh; // editing or commenting this out doesn't seem to change anything
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // this doesn't seem to be used anywhere, don't know what it's for
  }
</style>
```
