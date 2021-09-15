# Webpack tutorial

### Starting with existing files and config
```shell
npm install
npm run build
```

### Starting at 0
1. Install local `nodejs` and `npm`
  - `Nodejs`: https://nodejs.org/en/
  - `npm` (installed with `Nodejs`)
  - Update `npm` (as sudo or admin for Windows) `npm install -g npm`

2. Install webpack (dev)
```shell
npm install -D webpack webpack-cli
```

3. Create file `webpack.config.js` witch contains all config parameters for webpack

4. Install scss/sass loader to generate css output

```shell
npm install -D sass-loader sass css-loader style-loader node-sass
```

5. Checkout `Nr. 5 - module rule generate sass to css and then to head inline style`
