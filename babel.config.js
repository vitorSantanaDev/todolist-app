module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".js", ".jsx", "ts", ".tsx"],
          alias: {
            "@assets": "./assets",
            "@theme": "./src/shared/theme",
            "@components": "./src/shared/components",
          },
        },
      ],
    ],
  };
};
