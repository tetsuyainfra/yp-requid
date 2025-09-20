// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  bracketSameLine: true,
  // フロントマッターのフォーマットをスキップする(Biomeを使っているとき等に有効化する)
  astroSkipFrontmatter: false,
};