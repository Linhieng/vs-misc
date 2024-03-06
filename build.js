// @ts-check
/* eslint-disable
        @typescript-eslint/no-unsafe-member-access,
        @typescript-eslint/no-unsafe-argument,
        @typescript-eslint/no-unsafe-assignment,
*/

import { existsSync, rmSync, mkdirSync, copyFileSync, writeFileSync } from 'node:fs'
import { join } from 'path'
import pkg from './package.json' assert {type: 'json'}

const root = import.meta.dirname
const dist = join(root, 'dist')
const outFile = 'extension.js' // dist/outFile

/*
del and create dist folder
 */
if (existsSync(dist)) {
    rmSync(dist, { recursive: true })
}
mkdirSync(dist)

/*
copy base file
 */
const base_files = ['README.md', 'LICENSE', 'CHANGELOG.md']
for (const file of base_files) {
    const src = join(root, file)
    const dest = join(dist, file)
    if (existsSync(src)) {
        copyFileSync(src, dest)
    }
}


/*
generate package.json
 */
const packageJson = {
    name: pkg.name,           // 必需
    publisher: pkg.publisher, // 必需
    version: pkg.version,     // 必需
    engines: pkg.engines,     // 必需
    main: outFile,
    displayName: pkg.displayName,
    description: pkg.description,
    license: pkg.license,
    repository: pkg.repository,
    categories: pkg.categories,
    activationEvents: pkg.activationEvents,
    contributes: pkg.contributes,
}

writeFileSync(join(dist, 'package.json'), JSON.stringify(packageJson, null, 2))
