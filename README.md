# sy/photoswipe

Photoswipe gallery web component using [PhotoSwipe v4](https://github.com/dimsemenov/photoswipe)

## Installation

```bash
$ composer require sy/photoswipe
```

## Basic Usage

On the php side, add the component:
```php
$this->setComponent('PHOTOSWIPE', new \Sy\Component\Web\PhotoSwipe());
```

On the template file, don't forget to add a slot {PHOTOSWIPE}

On the html side, put images on a container with the class "photoswipe-gallery":
```html
<div class="photoswipe-gallery">
	<img src="https://picsum.photos/id/1/400/300" alt="Image 1" />
	<img src="https://picsum.photos/id/2/400/300" alt="Image 2" />
	<img src="https://picsum.photos/id/3/400/300" alt="Image 3" />
	<img src="https://picsum.photos/id/4/400/300" alt="Image 4"/>
	<img src="https://picsum.photos/id/5/400/300" alt="Image 5" />
</div>
```

You can try to [run an example](https://syframework.alwaysdata.net/photoswipe) of how to use this component.