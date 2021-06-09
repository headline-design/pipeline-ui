import MyAlgoButton from '.';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('MyAlgoButton component sanity', () => {
  it('has name', () => {
    expect(MyAlgoButton.displayName).toBe('MyAlgoButton');
  });

  it('matches default snapshot', () => {
    const component = shallow(<MyAlgoButton />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <MyAlgoButton />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
