import BlockiesIdenticon from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Blockie component sanity', function () {
  it('has name', function () {
    expect(BlockiesIdenticon.displayName).toBe('BlockiesIdenticon');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(BlockiesIdenticon, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(BlockiesIdenticon, null)));
    expect(component).toMatchSnapshot();
  });
});