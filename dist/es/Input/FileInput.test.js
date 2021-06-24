import FileInput from './FileInput';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('File Input component sanity', function () {
  it('has name', function () {
    expect(FileInput.displayName).toBe('FileInput');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(FileInput, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(FileInput, null)));
    expect(component).toMatchSnapshot();
  });
});