// Licensed Materials - Property of IBM
// (C) Copyright IBM Corporation 2021, 2022
// US Government Users Restricted Rights - Use, duplication or disclosure
// restricted by GSA ADP Schedule Contract with IBM Corp.

const {exec} = require('child_process')

async function sh(command) {
  return new Promise(resolve => {
    exec(command, (err, stdout, stderr) => {
      if (err || stderr) resolve({success: false, err, stderr})
      else resolve({success: true, stdout})
    })
  })
}

module.exports = sh