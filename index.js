#! /usr/bin/env node

const {blueBright, bold, white,greenBright} = require("colorette");
const boxen = require("boxen");
const options = {
    padding: 1,
    margin: 0,
    borderStyle: 'double'
  }


const work = white(`   Community Lead @ ${blueBright('Trustworks')}`)
const twitter = blueBright('https://twitter.com/i_am_the_dev')
const linkedIn = blueBright('https://linkedin.com/in/nasirhm')
const github = blueBright(' https://github.com/nasirhm')
const npm = blueBright('     https://https://www.npmjs.com/~nasirhussain')
const npx = white('   npx nasirhussain')
const web = blueBright('     http://nasirhussain.me/')
  
const newLine = '\n'
const heading = `${white(bold('                     Nasir Hussain '))}`
const working = `${white(bold('     Work:'))}  ${work}`
const linkedining = `${white(bold('     LinkedIn:'))} ${linkedIn}`
const twittering = `${white(bold('     Twitter:'))}  ${twitter}`
const githubing = `${white(bold('     GitHub:'))}  ${github}`
const npming = `${white(bold('     NPM:'))} ${npm}`
const webing = `${white(bold('     Web:'))} ${web}`
const carding = `${white(bold('     Card:'))}  ${npx}`


let output = `${newLine} ${newLine} ${heading} ${newLine} ${newLine} ${working} ${newLine} ${twittering} ${newLine} ${linkedining} ${newLine} ${githubing} ${newLine} ${npming} ${newLine} ${webing} ${newLine} ${newLine} ${carding} ${newLine} ${newLine}`;
output =  greenBright(boxen(output,options));
console.log(output);
