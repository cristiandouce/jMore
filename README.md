# jMore

jQuery "expand-collapse" plugin made simplier.

## Installation
  Place the following line right after jQuery.
    <script type="text/javascript" scr="/path/to/your/js/jMore.js"></script>

### Requirements

* [jQuery v1.8.3+](http://jquery.com/)

## Example

```js
$('div.jMore').jMore({
  collapsedHeight: 200, //px
  collapsedText: "Show more",
  expandedText: "Show less"
});
```

## API

TODO

## TODO
* Handle options on initialize (make initial height and backbground colors parameters)
* Make overlay a parameter too (and allow user to set its bg color).
* Allow "show more" and "show less" buttons, make it optional being hover show default.

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