module.exports = function (str, opts) {
  opts = opts || {}
  opts.width = opts.hasOwnProperty('width') ? opts.width : 80
  opts.ignoreAnsi = opts.hasOwnProperty('ignoreAnsi') ? opts.ignoreAnsi : true

  let parts = str.split(' ')
  let out = ''
  let line = ''
  let lineLength = 0
  for (let part of parts) {
    if (getLength(part, opts) + lineLength + 1 > opts.width) {
      out += line + '\n'
      lineLength = 0
      line = ''
    }
    if (line) {
      line += ' '
    }
    line += part
    lineLength += getLength(part, opts) + 1
    console.log('add ' + lineLength + ' to length for ' + part)
  }
  out += line
  return out
}

function getLength(part, opts) {
  if (!opts.ignoreAnsi) {
    return part.length
  }
  let length = 0
  let inCode = false
  for (let i = 0; i < part.length; i++) {
    if (part.charAt(i) == '\u001b') {
      inCode = true
    }
    if (!inCode) {
      length++
    }
    if (inCode && part.charAt(i) == 'm') {
      inCode = false
    }
  }
  return length
}