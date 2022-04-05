<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/motorlatitude/electron-react-neon-typescript-boilerplate/master/src/assets/img/screenshot.png" />
</p>

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=motorlatitude_electron-react-neon-typescript-boilerplate&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=motorlatitude_electron-react-neon-typescript-boilerplate)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=motorlatitude_electron-react-neon-typescript-boilerplate&metric=bugs)](https://sonarcloud.io/summary/new_code?id=motorlatitude_electron-react-neon-typescript-boilerplate)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=motorlatitude_electron-react-neon-typescript-boilerplate&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=motorlatitude_electron-react-neon-typescript-boilerplate)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=motorlatitude_electron-react-neon-typescript-boilerplate&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=motorlatitude_electron-react-neon-typescript-boilerplate)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=motorlatitude_electron-react-neon-typescript-boilerplate&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=motorlatitude_electron-react-neon-typescript-boilerplate)

## electron-react-neon-typescript-boilerplate

Electron react boilerplate using [Electron](https://www.electronjs.org/), [React](https://reactjs.org/), [Neon](https://neon-bindings.com/), [Webpack](https://webpack.js.org/) and [Typescript](https://www.typescriptlang.org/).

### Install

To use this boilerplate, you need to make sure to have rust installed as well as any required build tools.

```bash
rustup -V
cargo -V
```

If these don't return version numbers you may need to install [Rust](https://www.rust-lang.org/tools/install).

Assuming you have rust installed you can clone the repo and install dependencies as normal.

```bash
git clone --depth 1 --branch master git@github.com:motorlatitude/electron-react-neon-typescript-boilerplate.git your-project-name
cd your-project-name
yarn install
```
Make sure to edit the `package.json` and `src/native/Cargo.toml` file to match your project name, description and author.

### Starting Development

The boilerplate uses [electron-forge](https://www.electronforge.io/) for building and packaging the application. It additionally allows for live reloading during development of the React frontend.

To start the application use:

```bash
  yarn start
```

You can build the rust application separately using:

```bash
  yarn build
```

You can package the application for distribution using:

```bash
  yarn package
```
