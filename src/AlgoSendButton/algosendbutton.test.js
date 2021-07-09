import AlgoSendButton from './'
import ThemeProvider from '../ThemeProvider'
import theme from '../theme'

describe('AlgoSendButton component sanity', () => {
  it('has name', () => {
    expect(AlgoSendButton.displayName).toBe('AlgoSendButton')
  })

  it('matches default snapshot', () => {
    const component = shallow(<AlgoSendButton />)
    expect(component).toMatchSnapshot()
  })

  it('matches themed snapshot', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <AlgoSendButton />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
