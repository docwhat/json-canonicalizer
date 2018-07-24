#!/usr/bin/env node
import stringify = require('json-stable-stringify')
import process = require('process')

const inputString: string[] = []

process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  if (chunk !== null) {
    inputString.push(`${chunk}`)
  }
})

process.stdin.on('end', () => {
  const data = JSON.parse(inputString.join(''))
  const opts = {
    space: 2,
  }
  process.stdout.write(stringify(data, opts))
})
