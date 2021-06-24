import ToastMessage from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('ToastMessage component sanity', function () {
  it('has name', function () {
    expect(ToastMessage.displayName).toBe('ToastMessage');
  });
  it('matches generic snapshot', function () {
    var toastMessage = shallow( /*#__PURE__*/React.createElement(ToastMessage, null)).dive();
    expect(toastMessage).toMatchSnapshot();
  });
  it('matches processing snapshot', function () {
    var toastMessage = shallow( /*#__PURE__*/React.createElement(ToastMessage.Processing, null)).dive();
    expect(toastMessage).toMatchSnapshot();
  });
  it('matches success snapshot', function () {
    var toastMessage = shallow( /*#__PURE__*/React.createElement(ToastMessage.Success, null)).dive();
    expect(toastMessage).toMatchSnapshot();
  });
  it('matches failure snapshot', function () {
    var toastMessage = shallow( /*#__PURE__*/React.createElement(ToastMessage.Failure, null)).dive();
    expect(toastMessage).toMatchSnapshot();
  });
  it('matches full component shallow snapshot', function () {
    var toastMessage = shallow( /*#__PURE__*/React.createElement(ToastMessage, {
      variant: 'default',
      message: 'message',
      secondaryMessage: 'secondary message',
      actionHref: 'http://test.com',
      actionText: 'Link',
      icon: 'InfoOutline'
    })).dive();
    expect(toastMessage).toMatchSnapshot();
  });
  it('matches full component mount snapshot', function () {
    var toastMessage = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(ToastMessage, {
      variant: 'default',
      message: 'message',
      secondaryMessage: 'secondary message',
      actionHref: 'http://test.com',
      actionText: 'Link',
      icon: 'InfoOutline'
    })));
    expect(toastMessage).toMatchSnapshot();
    toastMessage.unmount();
  });
});
describe('ToastMessage component unit tests', function () {
  it('displays message', function () {
    var toastMessage = mount( /*#__PURE__*/React.createElement(ToastMessage, {
      message: 'Generic message inside Toast'
    }));
    expect(toastMessage.find('Text').at(0).text()).toBe('Generic message inside Toast');
  });
  it('displays secondary message', function () {
    var toastMessage = mount( /*#__PURE__*/React.createElement(ToastMessage, {
      secondaryMessage: 'Lorem ipsum dolor sit.'
    }));
    expect(toastMessage.find('Text').at(1).text()).toBe('Lorem ipsum dolor sit.');
  });
  it('displays icon', function () {
    var toastMessage = shallow( /*#__PURE__*/React.createElement(ToastMessage, {
      icon: 'Info'
    })).dive();
    expect(toastMessage.exists('Icon')).toEqual(true);
  });
  it('creates action Link', function () {// const toastMessage = shallow(
    //   <ToastMessage actionHref={'http://link.com'} actionText={'link text'} />
    // ).dive();
    // expect(toastMessage.exists('Link')).toEqual(true);
    // expect(toastMessage.find('Link').text()).toBe('link text');
  });
  it('creates action Link', function () {
    var toastMessage = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(ToastMessage, {
      variant: 'default',
      message: 'message',
      secondaryMessage: 'secondary message',
      actionHref: 'http://test.com',
      actionText: 'link text',
      icon: 'InfoOutline'
    })));
    expect(toastMessage.exists('Link')).toEqual(true);
    expect(toastMessage.find('Link').text()).toBe('link text');
    toastMessage.unmount();
  });
  it('displays as processing', function () {
    var toastMessage = shallow( /*#__PURE__*/React.createElement(ToastMessage.Processing, null)).dive();
    expect(toastMessage.prop('variant')).toEqual('processing');
  });
  it('displays as success', function () {
    var toastMessage = shallow( /*#__PURE__*/React.createElement(ToastMessage.Success, null)).dive();
    expect(toastMessage.prop('variant')).toEqual('success');
  });
  it('displays as failure', function () {
    var toastMessage = shallow( /*#__PURE__*/React.createElement(ToastMessage.Failure, null)).dive();
    expect(toastMessage.prop('variant')).toEqual('failure');
  });
  it('shows close button', function () {});
  it('closes when close button clicked', function () {});
  it('only shows one toast at a time', function () {});
  it('auto closes the toast', function () {});
  it('accepts proxy props', function () {
    var onClick = jest.fn();
    var toastMessage = mount( /*#__PURE__*/React.createElement(ToastMessage, {
      onClick: onClick
    }));
    expect(toastMessage.at(0).props().onClick).toBe(onClick);
    toastMessage.unmount();
  });
});
describe('ToastMessage theme applied correctly', function () {// No theme tests
});