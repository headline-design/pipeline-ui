import React, { Component } from 'react'
//import Pipeline from "@pipeline-ui-2/pipeline";
//uncomment above line to and relavant code referencing Pipeline below to enable Algorand connectivity

import {
  Avatar,
  Blockie,
  Box,
  Button,
  Card,
  Checkbox,
  Field,
  Flash,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  Loader,
  AlgoButton,
  AlgoSendButton,
  Modal,
  Pill,
  Progress,
  QR,
  Radio,
  AlgoAddress,
  Select,
  Slider,
  Table,
  Text,
  Textarea,
  ToastMessage,
  Tooltip,
  BaseStyles,
  ThemeProvider,
  theme,
  AsaList,
  Pipeline
} from 'pipeline-ui'

import { Algo, Btc } from '@pipeline-ui/icons'

import TestForm from './components/TestForm'
import BaseLineGrid from './components/BaseLineGrid'

const testTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    text: 'black',
    background: 'white',
    primary: 'crimson',
    'primary-light': 'red',
    'primary-dark': 'darkred',
    success: 'green',
    warning: 'orange',
    danger: 'orangered',
    info: 'blue',
  },
}
const testText = "Algorand: Proof-of-stake blockchain";
const testText2 = "Fetching wallet data";
const MyAlgoWallet = Pipeline.init();

const testComponents = props => (
  <React.Fragment>
    <AlgoButton wallet={MyAlgoWallet}/>
    <h1>H1 - {testText}</h1>
    <h2>H1 - {testText}</h2>
    <h3>H1 - {testText}</h3>
    <h4>H1 - {testText}</h4>
    <h5>H1 - {testText}</h5>
    <h6>H1 - {testText}</h6>

    <Heading as={'h1'}>H1 - {testText}</Heading>
    <Heading as={'h2'}>H2 - {testText}</Heading>
    <Heading as={'h3'}>H3 - {testText}</Heading>
    <Heading as={'h4'}>H4 - {testText}</Heading>
    <Heading as={'h5'}>H5 - {testText}</Heading>
    <Heading as={'h6'}>H6 - {testText}</Heading>

    <Heading as={'h1'} fontSize={1}>
      H1 - {testText}
    </Heading>
    <Heading as={'h2'} fontSize={2}>
      H2 - {testText}
    </Heading>
    <Heading as={'h3'} fontSize={3}>
      H3 - {testText}
    </Heading>
    <Heading as={'h4'} fontSize={4}>
      H4 - {testText}
    </Heading>
    <Heading as={'h5'} fontSize={5}>
      H5 - {testText}
    </Heading>
    <Heading as={'h6'} fontSize={6}>
      H6 - {testText}
    </Heading>

    <Heading fontSize={7}>XL - {testText}</Heading>

    <Heading as={'h1'} fontSize={6}>
      H1 - {testText}
    </Heading>

    <Heading as={'h2'} fontSize={5}>
      H2 - {testText}
    </Heading>

    <Heading as={'h3'} fontSize={4}>
      H3 - {testText}
    </Heading>

    <Heading as={'h4'} fontSize={3}>
      H4 - {testText}
    </Heading>

    <Heading as={'h5'} fontSize={2}>
      H5 - {testText}
    </Heading>

    <Heading as={'h6'} fontSize={1}>
      H6 - {testText}
    </Heading>

    <Heading fontSize={0}>SX - {testText}</Heading>

    <Text fontWeight={1}>
      1 / 300 — {testText2}.
    </Text>
    <Text fontWeight={2}>
      2 / 400 — {testText2}.
    </Text>
    <Text fontWeight={3}>
      3 / 600 — {testText2}.
    </Text>
    <Text fontWeight={4}>
      4 / 700 — {testText2}.
    </Text>

    <Button size={'medium'}>Click me!</Button>
    <Link>I'm a Link!</Link>
    <AlgoAddress address="C5E5W3BERJALL2ZH4YB3TAP7ZSJH2PJUPDHLGF74YE6DBMQ62AA47IXGNQ" />
    <AlgoAddress
      textLabels
      address="C5E5W3BERJALL2ZH4YB3TAP7ZSJH2PJUPDHLGF74YE6DBMQ62AA47IXGNQ"
    />
    <Card my={4}>
      <TestForm />
    </Card>
    <Input placeholder={'placeholder'} />

    <Box>
      <Text>Icon component from pipeline-ui</Text>
      <Icon name={'Info'} />
      <Icon name={'Algo'} />
      <Icon name={'Btc'} />
    </Box>

    <Box>
      <Text>
        Icon component from pipeline-ui using "primary" color from theme
      </Text>
      <Icon name={'Info'} color="primary" />
      <Icon name={'Algo'} color="primary" />
      <Icon name={'Btc'} color="primary" />
    </Box>
    <Box>
      <Text>Icon component from pipeline-ui, color="green"</Text>
      <Icon name={'Info'} color="green" />
      <Icon name={'Algo'} color="green" />
      <Icon name={'Btc'} color="green" />
    </Box>
    <Box>
      <Text>Icons imported as components from @pipeline/icons</Text>
      <Algo color="primary" />
      <Btc color="primary" />
      <Algo color="green" />
      <Btc color="green" />
    </Box>
    <Tooltip message="Your custom message">
      <span>hover me</span>
    </Tooltip>
    <Tooltip variant={'light'} message="Your custom message">
      <Text>hover me</Text>
    </Tooltip>
    <Blockie
      opts={{
        seed: 'foo',
        color: '#dfe',
        bgcolor: '#a71',
        size: 16,
        scale: 3,
        spotcolor: '#536dfe',
      }}
    />
    <Avatar src={'https://source.unsplash.com/128x128/?people,face,portrait'} />
    <Avatar size="small" />
    <Avatar size="medium" />
    <Avatar size="large" />
    <Textarea rows={4} defaultValue="Type here…" />
    <Slider />
    <Slider disabled />
    <Heading as={'h5'} fontSize={5}>
      Select ASA (ASAList as a component)
    </Heading>
    <Select options={AsaList} />
    <Progress value={0.5} />
    <Field label="text">
      <Input type="text" />
    </Field>
    <Field label="number">
      <Input type="number" />
    </Field>
    <Field label="file">
      <Input type="file" />
    </Field>
    <Field label="color">
      <Input type="color" />
    </Field>
    <Field label="date">
      <Input type="date" />
    </Field>
    <Field label="range">
      <Input type="range" />
    </Field>
    <Field label="search">
      <Input type="search" />
    </Field>
    <Field label="email">
      <Input type="email" />
    </Field>
    <Field label="password">
      <Input type="password" />
    </Field>
    <Field label="time">
      <Input type="time" />
    </Field>
    <Field label="url">
      <Input type="url" />
    </Field>
    <Field label="month">
      <Input type="month" />
    </Field>
    <Field label="week">
      <Input type="week" />
    </Field>
    <Radio label="Radio default" readOnly />
    <Radio checked label="Radio checked" readOnly />
    <Radio disabled label="Radio disabled" readOnly />
    <Radio disabled checked label="Radio checked disabled" readOnly />
    <Checkbox label="Checkbox default" readOnly />
    <Checkbox checked label="Checkbox checked" readOnly />
    <Checkbox disabled label="Checkbox disabled" readOnly />
    <Checkbox disabled checked label="Checkbox checked disabled" readOnly />

    <Box my={4} opacity={0.6}>
      <Flex>
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
      </Flex>
      <Flex>
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
      </Flex>
      <Flex>
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
      </Flex>
      <Flex>
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
        <Box width={1} height={'4rem'} bg={'primary'} m={1} />
      </Flex>
    </Box>

    <Card m={3} />
    <Card mx="auto" px="4" color="primary">
      <Heading mb={3}>Heading</Heading>
      <Text mb={4}>
        What Algorand functions would you like to see implemented in Pipeline UI for React?
      </Text>
      <Flex>
        <Button mr={3}>Accept</Button>
        <Button.Outline>Cancel</Button.Outline>
        <Button.Text ml={'auto'}>Skip</Button.Text>
      </Flex>
    </Card>
    <Table />
    <Image src="https://source.unsplash.com/random/1280x720" />
    <AlgoSendButton>Send</AlgoSendButton>
    <Loader size="80px" />
    <QR value="test" />
    <Modal />
    <ToastMessage />
    <ToastMessage.Processing />
    <ToastMessage.Success />
    <ToastMessage.Failure />
    <Pill>{'Pill Text'}</Pill>
    <Pill color={'success'}>{'Pill Text'}</Pill>
    <Pill color={'warning'}>{'Pill Text'}</Pill>
    <Pill color={'danger'}>{'Pill Text'}</Pill>
    <Pill color={'info'}>{'Pill Text'}</Pill>
    <Pill color={'#4B0082'}>{'Pill Text'}</Pill>
    <Flash>
      I am a Flash with a <Flash.Link>Link</Flash.Link>
    </Flash>
    <Flash variant={'info'}>
      I am a INFO Flash with a <Flash.Link>Link</Flash.Link>
    </Flash>
    <Flash variant={'warning'}>
      I am a WARNING Flash with a <Flash.Link>Link</Flash.Link>
    </Flash>
    <Flash variant={'success'}>
      I am a SUCCESS Flash with a <Flash.Link>Link</Flash.Link>
    </Flash>
    <Flash variant={'danger'}>
      I am a DANGER Flash with a <Flash.Link>Link</Flash.Link>
    </Flash>
  </React.Fragment>
)

export default class App extends Component {
  render() {
    return (
      <Flex position={'relative'}>
        <Box m={4}>
          <BaseStyles>{testComponents()}</BaseStyles>
        </Box>
        <Box m={4}>
          <ThemeProvider theme={testTheme}>
            <BaseStyles>{testComponents()}</BaseStyles>
          </ThemeProvider>
        </Box>
       {/*<BaseLineGrid/> uncomment to make background alternating white and rose lines*/}
      </Flex>
    )
  }
}
