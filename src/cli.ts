#!/usr/bin/env node
import fs = require('fs')
import stringify = require('json-stable-stringify')
import process = require('process')
import yargs = require('yargs')

const argv = yargs
  .strict()
  .usage('$0 <cmd> [args]')
  .epilog(
    'For more information, see https://github.com/docwhat/json-canonicalizer'
  )
  .help('help')
  .alias('h', 'help')
  .wrap(yargs.terminalWidth()).argv

const stream: NodeJS.ReadableStream = argv._[0]
  ? fs.createReadStream(argv._[0])
  : process.stdin

const inputString: string[] = []

stream.on('readable', () => {
  const chunk = stream.read()
  if (chunk !== null) {
    inputString.push(`${chunk}`)
  }
})

stream.on('end', () => {
  const data = JSON.parse(inputString.join(''))
  const opts = {
    space: 2,
  }
  process.stdout.write(stringify(data, opts))
  process.stdout.write('\n')
})
