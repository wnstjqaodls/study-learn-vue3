import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    files: ['**/*.{js,mjs,jsx,vue}'],
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: 'espree',
        ecmaVersion: 2022,
        sourceType: 'module'
      },
    },
    plugins: {
      vue: pluginVue
    },
    rules: {
      'no-console': 'warn',
    }
  },

  {
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
]