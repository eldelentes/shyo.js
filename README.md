# shyo.js

A lightweight javascript plugin for hiding and showing your navigation when scrolling down your page.

## Basic Usage

1. Include the shyo.css and  shyo.js on your document's `<head>` and `<body>`

  ```html
  <head>
    <link rel="stylesheet" href="shyo.css">
  </head>
  <body>
  	<script src="shyo.js"></script>
  </body>
  ```

2. Add the class `shyo` and the id `shyo` to the element you want to hide:

```<header id="shyo" class="main-header shyo" data-scroll="0">```
 
 You may also want to modify the  `data-scroll` to define when de script starts working.

3. Activate the script:

	```css
	<script>
		$('#shyo').shyo();
	</script>
	```

## Customization

 You can change the style and duration of your animations in the .shyo and .shyo-up class.

```css
.shyo {
	/* Default Animation */	
	transform: translateY(0%);
	opacity: 1;  
}

.shyo-up {
	/* Default Hide Animation*/	
	transform: translateY(-100%);
	opacity: 0;	
}

```

## Notes

Shyo uses the `position: fixed` css property so you maybe need to add:

```css
	.your-header {
		width: 100%;
	}
```

# License
shyo.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contributing
Pull requests are allowed, I apologize in advance for the issues.