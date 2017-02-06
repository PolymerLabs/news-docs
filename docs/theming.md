# Theming and Styling the News App

The look and feel of the News app is mostly controlled by the custom properties defined in `news-app.html`. However, to avoid FOUC on browsers in which custom properties have no native implementation, the following properties are defined with literal values in index.html:

* Page background color
* Font
* Text color

## Basic theming for the News app

Broad changes to the look and feel of the News app can be made with a few properties in `index.html` and `news-app.html`. Here's how to modify:

* The [page background color](#page-background-color) used throughout the app
* The main [font](#font) used in the app
* The [text color](#text-color)
* The [border styles and colors](#border-style) used throughout the app

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

In this tutorial, we modify the look and feel of the News theme from [the defaults](https://polymer-news.appspot.com/) to match [this design](https://polymer-news-theming.appspot.com).

Before:

![News theme before modifications](image_0.png)

After:

![News theme after modifications](image_01.png)

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
	<link rel="shortcut icon" sizes="32x32" href="/images/news-icon-32.png">
	<meta name="theme-color" content="#000">
	<link rel="manifest" href="/manifest.json">
	...
</head>
...
<body>
	<news-app unresolved app-title="Your Site Title">Your Site Title</news-app>
</body>
```

Before:

![News site before modifying the title](image_1.png)

After:

![News site after modifying the title](image_2.png)

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

Before:

![Before modifying background color and font family](image_3.png)

After:

![After modifying background color and font family](image_4.png)

### Modify border and sticky nav bar styles

To modify border and sticky nav bar styles, we'll edit the values of the custom properties that control them. These properties are stored in `news-app.html`. Edit this file as follows:

`news-app.html`: Before
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

`news-app.html`: After
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

Before:

![Before modifying border styles](image_5.png)

![Before modifying sticky nav bar styles](image_6.png)

After:

![After modifying border styles](image_7.png)

![After modifying sticky nav bar styles](image_8.png)

### Modify sub-section headline styles in the list view

In `news-app.html`, update the `--app-sub-section-headline` mixin.

* Change the value of `border-top` to `none`.
* Change the value of `font-size` to `24px`.
* Add two properties to this mixin: `font-family: "Georgia"` and `font-style: italic`.

`news-app.html`: Before
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

`news-app.html`: After
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

Before:

![Before modifying subsection headline styles](image_9.png)

After:

![After modifying subsection headline styles](image_10.png)

The end result can be seen here: [https://polymer-news-theming.appspot.com](https://polymer-news-theming.appspot.com)

![After modifying the news site theme](image_11.png)

## Custom Properties Reference

The following custom properties are defined in news-app.html:

<table>
  <tr>
    <td>Custom property</td>
    <td>Description</td>
    <td>Default</td>
  </tr>
  <tr>
    <td>--app-border-style</td>
    <td>The width, style and color of the borders around menu bars, category headers, article headlines and items in list views.
Examples:
--app-border-style: 1px solid #CCC; 

--app-border-style: 5px solid #FFF200; 
</td>
    <td>1px solid #CCC</td>
  </tr>
  <tr>
    <td>--app-transparent-border-style</td>
    <td>The width, style and color of the borders around the date line and featured item above an image. (For performance, this is a separate property.)
Examples:
--app-transparent-border-style: 1px solid rgba(255, 255, 255, 0.5);

--app-transparent-border-style: 5px solid #FFF200;

</td>
    <td>1px solid rgba(255, 255, 255, 0.5)</td>
  </tr>
  <tr>
    <td>--app-button-border-style</td>
    <td>Width, style and color of borders around buttons. Used in news-network-warning.html.</td>
    <td>2px solid #222</td>
  </tr>
  <tr>
    <td>--app-cover-text-color</td>
    <td>Color of the text on the featured item in the list view. See Notes below.
Examples:
 --app-cover-text-color: #FFF;	

 --app-cover-text-color: orange;	
</td>
    <td>#FFF</td>
  </tr>
  <tr>
    <td>--app-nav-background-color</td>
    <td>Background of the sticky nav bar/mobile app drawer.
Examples:
--app-nav-background-color: #E9E7E8;

--app-nav-background-color: orange;
</td>
    <td>#222</td>
  </tr>
  <tr>
    <td>--app-nav-text-color</td>
    <td>Text color for the sticky nav bar/mobile app drawer.</td>
    <td>#FFF</td>
  </tr>
  <tr>
    <td>--app-nav-deselected-text-color</td>
    <td>Text color of category links in the sticky nav bar menu/mobile app drawer.
--app-nav-deselected-text-color: #888;

--app-nav-deselected-text-color: blue;
</td>
    <td>#CCC</td>
  </tr>
  <tr>
    <td>--app-nav-selected-background-color</td>
    <td>Background color of current category in mobile app drawer.
--app-nav-selected-background-color: #555;

--app-nav-selected-background-color: #FFF200;
</td>
    <td>#555</td>
  </tr>
  <tr>
    <td>--app-sub-section-headline</td>
    <td>Mixin for headlines of the sub-sections in the list view.</td>
    <td>See Notes</td>
  </tr>
</table>


### **Notes**

#### **--app-cover-text-color for mobile**

For mobile, the equivalent value of --app-cover-text-color is hard-coded in index.html to allow for browsers that don't support custom properties:

index.html

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

#### **--app-sub-section-headline**** default values**

--app-sub-section-headline: {
          border-top: var(--app-border-style);
          border-bottom: var(--app-border-style);
          font-size: 13px;
          padding: 8px;
          text-align: center;
        };

With defaults:

![image alt text](image_12.png)

With these changes:

--app-sub-section-headline: {
          border-top: none;
          border-bottom: none;
          font-size: 30px;
          padding: 8px;
          text-align: left;
        };

![image alt text](image_13.png)

## **Reference: Hard-coded values**

To change the page background color, margin, font, and text color for the app, edit this section of index.html:

index.html

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

