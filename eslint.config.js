// @ts-check

/* eslint-disable
        @typescript-eslint/no-unsafe-member-access,
        @typescript-eslint/no-unsafe-argument,
        @typescript-eslint/no-unsafe-assignment,
        @typescript-eslint/no-unsafe-call,
*/

import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import globals from 'globals'

export default tsEslint.config(
    eslint.configs.recommended,
    ...tsEslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
            globals: {
                ...globals.nodeBuiltin,
            },
        },
        files: [
            'src/**/*.ts',
            '*.js',
        ],
        rules: {
            'semi': ['error', 'never'],
            'quotes': ['error', 'single'],
            'comma-dangle': ['error', 'always-multiline'],
        },
    },

)
