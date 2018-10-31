# ansi-wordwrap
Have you ever needed to word wrap text that had ANSI color codes in it? Did you want to ignore the ANSI color codes? If you answered "heck yeah" to any of those questions then you've come to the right web site.

## Installation
`npm install ansi-wordwrap`

## Examples
```javascript
const wrap = require('ansi-wordwrap')

// use default options
wrap(someLongString)

// specify options
wrap(someLongString, {width: 80, ignoreAnsi: true})
```

## Options
The optional second argument is an options object.

### width
The width to wrap each line to, defaults to `80`.

### ignoreAnsi
Whether or not to ignore ANSI codes.  Defaults to `true`.