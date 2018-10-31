module.exports = function (str, opts) {
  opts = opts || {}

  let patterns = [/\u001b.*?m/g]
  
  opts.width = opts.hasOwnProperty('width') ? opts.width : 80
  opts.ignoreAnsi = opts.hasOwnProperty('ignoreAnsi') ? opts.ignoreAnsi : true
  opts.patterns = opts.hasOwnProperty('patterns') ? opts.patterns : []
  
  if (opts.ignoreAnsi) {
    opts.patterns = patterns.concat(opts.patterns)
  }

  let parts = str.split(' ')
  let out = ''
  let line = ''

  for (let part of parts) {
    if (getLength(part, opts) + getLength(line, opts) + 1 > opts.width) {
      out += line + '\n'
      line = ''
    }

    if (line) {
      line += ' '
    }

    line += part
  }

  out += line

  return out
}

function getLength(str, opts) {
  let ignoreLength = 0

  for (let pattern of opts.patterns) {
    let matches = str.match(pattern)

    if (!matches) {
      continue
    }

    for (let match of matches) {
      ignoreLength += match.length
    }
  }

  return str.length - ignoreLength
}