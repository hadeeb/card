'use strict'

const fs = require('fs')
const path = require('path')
const boxen = require('boxen')
const chalk = require('chalk')
const leftPad = require('left-pad')

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

const newline = '\n'
const formatLabel = value => chalk.white.bold(leftPad(value, 12) + ':')
const formatSocialLink = (link, username, color) =>
  chalk.gray(link) + color(username)

const data = [
  {
    label: chalk.white.bold('Hadeeb Farhan'),
    value: '',
  },
  {
    label: '',
    value:
      chalk.white('Software Engineer') +
      chalk.gray(' @ Paytm Smart Retail') +
      newline,
  },
  {
    label: formatLabel('GitHub'),
    value: formatSocialLink('https://github.com/', 'hadeeb', chalk.white),
  },
  {
    label: formatLabel('npm'),
    value: formatSocialLink('https://npmjs.com/~', 'hadeeb', chalk.red),
  },
  {
    label: formatLabel('Twitter'),
    value: formatSocialLink('https://twitter.com/', 'hadeebfarhan', chalk.cyan),
  },
  {
    label: formatLabel('LinkedIn'),
    value: formatSocialLink('https://linkedin.com/in/', 'farhan23', chalk.blue),
  },
  {
    label: formatLabel('Website'),
    value: 'https://hadeeb.me',
  },
  {
    label: newline + chalk.cyan(leftPad('$', 13)),
    value: chalk.white('npx @hadeeb/card'),
  },
]

const output = data
  .map(({ label, value }) => `${label}${label && ' '}${value}`)
  .join(newline)

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, boxenOptions)),
)
