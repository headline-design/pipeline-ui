import Form from './';
import Button from '../Button';
import Input from '../Input';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Form component sanity', function () {
  it('has name', function () {
    expect(Form.displayName).toBe('Form');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Form, null));
    expect(component).toMatchSnapshot();
  });
  it('renders children elements', function () {
    var component = render( /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Field, {
      label: "Email",
      width: 1
    }, /*#__PURE__*/React.createElement(Form.Input, {
      type: "email",
      required: true,
      width: 1
    })), /*#__PURE__*/React.createElement(Form.Field, {
      label: "Password",
      width: 1
    }, /*#__PURE__*/React.createElement(Form.Input, {
      type: "password",
      required: true,
      width: 1
    })), /*#__PURE__*/React.createElement(Form.Check, {
      label: "Remember me?",
      mb: 3
    })));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Field, {
      label: "Email",
      width: 1
    }, /*#__PURE__*/React.createElement(Form.Input, {
      type: "email",
      required: true,
      width: 1
    })), /*#__PURE__*/React.createElement(Form.Field, {
      label: "Password",
      width: 1
    }, /*#__PURE__*/React.createElement(Form.Input, {
      type: "password",
      required: true,
      width: 1
    })), /*#__PURE__*/React.createElement(Form.Check, {
      label: "Remember me?",
      mb: 3
    }))));
    expect(component).toMatchSnapshot();
  });
});
describe('Form validation', function () {
  it('adds was-validated class', function () {
    var component = mount( /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Field, {
      label: "Email",
      width: 1
    }, /*#__PURE__*/React.createElement(Form.Input, {
      type: "email",
      required: true,
      width: 1
    }))));
    component.setProps({
      validated: true
    });
    expect('validated' in component.props()).toEqual(true);
    expect(component.find('Box').at(0).hasClass('was-validated')).toEqual(true);
  });
});