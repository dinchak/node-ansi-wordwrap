let Wrap = require('./index')

let str = "\u001b\[39mthis is a really long string with a \u001b\[1m\u001b\[32mbunch of words \u001b\[39mand \u001b\[33mshit\u001b\[39m so that i can testy my \u001b\[35mstupid \u001b\[1m\u001b\[37mwordwrap plugin \u001b\[39mbecause i guess i'm the only person who has ever needed to wordwrap a string with ansi codes and have those ansi codes be ignored in the wordwrap and i cant figure out a better way to do it except to write my own gosh ugh"

console.log(Wrap(str, {width: 80}))