# pipeline-ui

> PIPELINE Design System&#x27;s react component library.

[![NPM](https://img.shields.io/npm/v/pipeline-ui.svg)](https://www.npmjs.com/package/pipeline-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/headline-design/pipeline-ui/blob/main/LICENSE.txt)
[![Travis Build Status](https://travis-ci.com/headline-design/pipeline-ui.svg?branch=master)](https://travis-ci.com/headline-design/pipeline-ui)
[![GitHub stars](https://img.shields.io/github/stars/tterb/playmusic.svg?style=social&label=Star)](https://github.com/headline-design/pipeline-ui)
[![Twitter Follow](https://img.shields.io/twitter/follow/pipeline_ui.svg?style=social)](https://twitter.com/pipeline_ui)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/40588036-5b95-4358-a88a-e601e5db99e1/deploy-status)](https://app.netlify.com/sites/zealous-meitner-907a4d/deploys)<br>
[![NPM](https://nodei.co/npm/pipeline-ui.png?downloads=true)](https://www.npmjs.com/package/pipeline-ui)  

PIPELINE is a project from HEADLINE Design, aiming to provide adaptable components and design standards for decentralized Algorand applications (dAApps). Our goal is to make it easier for developers to build dAApps with outstanding user experience. If you're interested, we have written a bit more about [our rationale and approach to building PIPELINE](https://www.reddit.com/r/HEADLINECrypto).

PIPELINE is in beta development and should not be considered stable today. We have made the project public in a very early stage of work in order to gather feedback from the community of designers and developers building Algorand dAApps.

We are actively working on adding new components to PIPELINE and will be sharing more information on the roadmap very soon.
## Modifying and testing the library on local machine:
1. Create a new folder in src
2. Add an index.js file in the new folder
3. Add any new dependecies as neccesary to the package.json file for pipeline-ui
4. Add the following line to the existing index.js file in src
```jsx
export { default as MyNewComponent } from './MyNewComponent';
```
In command prompt, enter the following while in the pipeline-ui root directory: 

```bash cd pipeline-ui
npm install
npm run build
npm pack
```

A tgz file will be generated in the folder pipeline-ui. Move this file to the root folder of your project. 

Add the following dependency to the package.json of the project that you will be using the library in:

```jsx
"pipeline-ui": "file:./pipeline-ui-0.1.6.tgz",
```

In the project root folder, run: 
```bash 
npm install
```

## Usage

Pipeline is working to hardcode the Algorand connection process into standard components. With Pipeline, the following is a complete React App to connect to a MyAlgo wallet and return the address:

```jsx
import React, { Component } from 'react';
import { AlgoButton, Pipeline} from 'pipeline-ui';


class TestButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Algaddress: ""
    }
  }
  
  myAlgoWallet = Pipeline.init();

  render() {
    return <div>
      <AlgoButton 
            wallet={this.myAlgoWallet} 
            context={this} 
            returnTo={"Algaddress"} 
            />
      <h1>{this.state.Algaddress}</h1>
    </div>
  }
}

export default TestButton;
```

### The Send Button
The AlgoSend button has the largest number of mandatory props. Failing to set them, or setting them incorrectly will result in a transaction not executing. This button also has the optional prop `index` , which can be used to set and specify an ASA index number for an ASA transaction. 

```jsx
<AlgoSendButton
      asset={"Algorand"} //If ASA, must be a numeric index value
      recipient={this.state.recipient} //string value
      amount={this.state.amount} //integer value in micro Algos
      note={this.state.note} //string value
      myAddress={this.state.Algaddress} //string value
      wallet={myAlgoWallet} //reference to an instance of Pipeline.init(); that is called once when the app is initialized
      context={this}
      returnTo={"txID"}// string value of state key to return the transaction id
      />
```

## Change log

### 0.1.3

- Theming
- Buttons and other simple components

### 0.1.7

- Fixed Select component
- Replaced MyAlgoButton component with hard-coded AlgoButton
- Added Pipeline Algorand Connector as a dependecy
- Add Verified ASA's and index numbers as a component
- Updated rollup to latest version
- Enabled Demo app and updated to reflect changes to parent library

## License

MIT © [PIPELINE UI](https://github.com/headline-design/pipeline-ui)
