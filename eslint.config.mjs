// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      'vue/no-v-model-argument': 'off',
      'vue/bem-classnames': 'off',
    },
  },
)
