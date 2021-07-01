# pipeline-ui

> PIPELINE Design System&#x27;s react component library.

[![NPM](https://img.shields.io/npm/v/pipeline-ui.svg)](https://www.npmjs.com/package/pipeline-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Travis Build Status](https://travis-ci.com/headline-design/pipeline-ui.svg?branch=master)](https://travis-ci.com/headline-design/pipeline-ui)
[![Join the community on Twitter](https://twitter.com)](https://twitter.com/headline_crypto)

PIPELINE is a project from HEADLINE Design, aiming to provide adaptable components and design standards for decentralized Algorand applications (dAApps). Our goal is to make it easier for developers to build dAApps with outstanding user experience. If you're interested, we have written a bit more about [our rationale and approach to building PIPELINE](https://www.reddit.com/r/HEADLINECrypto).

PIPELINE is in beta development and should not be considered stable today. We have made the project public in a very early stage of work in order to gather feedback from the community of designers and developers building Algorand dAApps.

We are actively working on adding new components to PIPELINE and will be sharing more information on the roadmap very soon.

## Using the library on local machine:

```bash cd pipeline-ui
npm install
npm pack
```

Copy the file that is created (ending in .tgz, located in pipeline-ui root) into the root of your project.

Add the following dependency to package.json:

```jsx
"pipeline-ui": "file:pipeline-ui-0.1.6.tgz",
```

Run ```bash npm install``` in project root folder

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
