<h1 align="center">
  <img src="https://github.com/SocialGouv/react-departements/raw/master/demo.png" width="250"/>
  <p align="center">React Departements</p>
</h1>
<h3 align="center">
  🧹Une carte de France où certains departements peuvent être colorés.✨
</h3>

<p align="center">
  <a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache--2.0-yellow.svg" alt="License: Apache-2.0"></a>
  <a href="https://www.npmjs.com/package/@socialgouv/react-departements"><img src="https://img.shields.io/npm/v/@socialgouv/react-departements.svg" alt="Npm version"></a> 
  <br>
  <a href="https://www.npmjs.com/package/@socialgouv/react-departements"><img src="https://nodei.co/npm/@socialgouv/react-departements.png?downloads=true&downloadRank=true&stars=true" alt="Npm banner"></a> 
</p>

<br>
<br>
<br>
<br>

## Installation

```sh
$ npm install @socialgouv/react-departements
# or
$ yarn add @socialgouv/react-departements

# `react@16+` and `prop-types@15+` must be installed
$ yarn add react prop-types
```

## Usage

```js
import France from "@socialgouv/react-departements";

<France departements={[75, 89, 21, 33, 47, 74, "2a", 976]} />;
```

See [example/src](./example/src).

## Props

| Prop           | type   | usage                                | default |
| -------------- | ------ | ------------------------------------ | ------- |
| color          | string | couleur par défaut d'un département  | #74B4FF |
| highlightColor | string | couleur du highlight                 | #b3ff75 |
| departements   | array  | liste des départements à highlighter | []      |

## Source

Le fond de carte est [issu de wikimedia et distribué sous licence Creative Commons Attribution-Share Alike](https://commons.wikimedia.org/wiki/File:Communes_france-fr.svg)

