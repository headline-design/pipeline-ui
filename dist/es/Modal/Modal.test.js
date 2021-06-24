import Modal from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Modal component sanity', function () {
  it('has name', function () {
    expect(Modal.displayName).toBe('Modal');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Modal, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Modal, null)));
    expect(component).toMatchSnapshot();
  });
});