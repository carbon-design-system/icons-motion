// Licensed Materials - Property of IBM
// (C) Copyright IBM Corporation 2020, 2021
// US Government Users Restricted Rights - Use, duplication or disclosure
// restricted by GSA ADP Schedule Contract with IBM Corp.
/**
 * Updates copyright headers of staged files
 *
 * How to use:
 *  1. Stage files you want to update copyright for
 *  2. run `node scripts/update-copyright-header.js`
 *
 *  Note: Stage file MUST not have any unstaged changes when run this script.
 */

const {readFileSync, writeFileSync} = require('fs')
const path = require('path')
const sh = require('./sh')

const {log, warn} = console
const fileTypes = ['.js', '.scss']
const currentYear = new Date().getFullYear().toString()
const copyrightHeader = `// Licensed Materials - Property of IBM
 // (C) Copyright IBM Corporation ${currentYear}
 // US Government Users Restricted Rights - Use, duplication or disclosure
 // restricted by GSA ADP Schedule Contract with IBM Corp.
 
 `

async function getStagedFiles(wd) {
  const rootPath = wd || path.resolve(__dirname, './')
  const {stdout} = await sh(`cd ${rootPath} && git status --porcelain`)
  const stagedFiles = stdout ? stdout.split('\n').slice(0, -1) : []
  return stagedFiles.map(fileInfo => {
    const fileInfoParts = fileInfo.trim().split(' ')
    return {
      status: fileInfoParts.shift(),
      filePath: path.resolve(rootPath, fileInfoParts.pop()),
    }
  })
}

async function stageFile(filePath) {
  const {success} = await sh(`git add "${filePath}"`)
  return success
}

async function updateHeaders() {
  const stagedFiles = await getStagedFiles('.')
  const unstagedChanges = stagedFiles.reduce((filePaths, fileInfo) => {
    if (fileInfo.status.split('').length > 1 && fileInfo.status !== '??')
      filePaths.push(fileInfo.filePath)
    return filePaths
  }, [])
  if (unstagedChanges.length > 0) {
    log('\nError: staged files below have unstaged changes')
    log('  -', unstagedChanges.join('\n  - '), '\n')
    process.exit(1)
  }
  for (const fileInfo of stagedFiles) {
    const {filePath, status} = fileInfo
    if (status === 'D') continue
    try {
      if (!fileTypes.includes(path.extname(filePath))) continue
      const fileData = readFileSync(filePath, 'UTF-8')
      let fileUpdated = false
      let updatedFileData = fileData
      if (fileData.includes('(C) Copyright IBM Corporation')) {
        const pattern = /\/\/ \(C\) Copyright IBM Corporation (\d+)(,\s?(\d+)\s?)?\n/
        const copyrightMatch = fileData.match(pattern)
        const capturedGroups = copyrightMatch || []
        const [createYear, , modifyYear] = capturedGroups.slice(1)
        const fileRenamed = status.includes('R')
        if (
          (createYear !== currentYear && modifyYear !== currentYear) ||
          fileRenamed
        ) {
          if (createYear === currentYear) continue

          const yearInfo = fileRenamed
            ? currentYear
            : `${createYear}, ${currentYear}`

          updatedFileData = updatedFileData.replace(
            pattern,
            `// (C) Copyright IBM Corporation ${yearInfo}\n`
          )
          fileUpdated = true
        }
      } else {
        updatedFileData = copyrightHeader + updatedFileData
        fileUpdated = true
      }
      if (fileUpdated) {
        writeFileSync(filePath, updatedFileData)
        if (!(await stageFile(filePath))) {
          warn(`Warning: Failed to fix copyright header for ${filePath}.`)
        }
      }
    } catch (e) {
      warn('Warning:', e.message)
    }
  }
}

updateHeaders()