# pipeline-ui

> PIPELINE Design System&#x27;s react component library.

[![NPM](https://img.shields.io/npm/v/pipeline-ui.svg)](https://www.npmjs.com/package/pipeline-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Travis Build Status](https://travis-ci.com/headline-design/pipeline-ui.svg?branch=master)](https://travis-ci.com/headline-design/pipeline-ui)
[![Join the community on Twitter](https://twitter.com)](https://twitter.com/headline_crypto)

PIPELINE is a project from HEADLINE Design, aiming to provide adaptable components and design standards for decentralized Algorand applications (dAApps). Our goal is to make it easier for developers to build dAApps with outstanding user experience. If you're interested, we have written a bit more about [our rationale and approach to building PIPELINE](https://www.reddit.com/r/HEADLINECrypto).

PIPELINE is in beta development and should not be considered stable today. We have made the project public in a very early stage of work in order to gather feedback from the community of designers and developers building Algorand dAApps.

We are actively working on adding new components to PIPELINE and will be sharing more information on the roadmap very soon.

## Modifying and Using the library on local machine:
1. Delete node modules and package-lock files
2. Create a new folder in src
3. add an index.js file in the new folder
4. Add any new dependecies as neccesary to the package.json file for pipeline-ui
5. add the following line to the existing index.js file in src
```jsx
export { default as MyNewComponent } from './MyNewComponent';
```
In command prompt, enter the following: 

```bash cd pipeline-ui
npm install
npm build
```

Add the following dependency to the package.json of the project that you will be using the library in:

```jsx
"pipeline-ui": "file:../pipeline-ui",
```

In the project root folder, run: 
```bash 
npm install
```

## Install

```bash
npm install --save pipeline-ui styled-components
```

## Usage

```jsx
import React, { Component } from 'react'

import { Button } from 'pipeline-ui'

class Example extends Component {
  render() {
    return <Button size={'medium'}>Click me!</Button>
  }
}
```

## Change log

### 0.1.3

- Theming
- Buttons and other simple components

## License

MIT © [PIPELINE UI](https://github.com/headline-design/pipeline-ui)
