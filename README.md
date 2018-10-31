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
wrap(someLongString, {width: 80, patterns: [/@[A-Z]+@/g]})
```

## Options
The optional second argument is an options object.

### width
The width to wrap each line to, defaults to `80`.

### ignoreAnsi
When set to `false` this will disable the default pattern for matching ANSI codes, which is `/\u001b.*?m/g`  Defaults to `true`.  Useful if I've done a terrible job of defining this regex.

### patterns
An array of regexes representing the patterns that should be ignored.  For example, to ignore tokens of the form `@TOKEN@`, you could do:

```javascript
wrap(str, {patterns: [/@[A-Z]+@/g]})
```
