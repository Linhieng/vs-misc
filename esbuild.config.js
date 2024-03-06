// @ts-check
/* eslint-disable
        @typescript-eslint/no-unsafe-member-access
*/
import { build } from 'esbuild'
import pkg from './package.json' assert {type: 'json'}

// 参考 https://code.visualstudio.com/api/working-with-extensions/bundling-extension#run-esbuild
build({
    entryPoints: [pkg.main],
    bundle: true,
    outfile: 'dist/extension.js',
    external: ['vscode'], // 指定要忽略的模块
    format: 'cjs',
    platform: 'node',
}).catch((err) => {
    console.error(err)
})
