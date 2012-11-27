# jMore

jQuery "expand-collapse" plugin made simplier.

## Installation
Place the following line right after jQuery.
```html
<script type="text/javascript" scr="/path/to/your/js/jMore.js"></script>
```

### Requirements

* [jQuery v1.8.3+](http://jquery.com/)

## Examples

### Triggers on Click (default)
```js
$('div.jMore').jMore({
  collapsedHeight: 200, //pixels
  collapsedText: "Show more",
  expandedText: "Show less"
});
```

### Triggers on Hover
```js
$('div.jMore').jMore({
  triggerOnHover: true
});
```

## Options

### collasedHeight: Number
### collapsedText: String
### expandedText: String
### triggerOnHover: Boolean


# License 

(The MIT License)

Copyright (c) 2012 Cristian Douce &lt;http://cristiandouce.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.