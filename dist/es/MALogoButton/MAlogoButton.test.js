import MAlogoButton from '.';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('MAlogoButton component sanity', function () {
  it('has name', function () {
    expect(MAlogoButton.displayName).toBe('MAlogoButton');
  });
  it('matches default snapshot', function () {
    var component = shallow(React.createElement(MAlogoButton, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = shallow(React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(MAlogoButton, null)));
    expect(component).toMatchSnapshot();
  });
});
