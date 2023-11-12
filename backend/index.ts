// const { Bun } = require('@bun/bundle');

(async () => {
  try {
    const result = await Bun.build({
      entrypoints: ['src/**/*.ts'],
      outdir: './dist',
      target: 'node',
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
