import Button from './';
import Loader from '../Loader/';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Button component sanity', function () {
  it('has name', function () {
    expect(Button.displayName).toBe('Button');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Button, null)));
    expect(component).toMatchSnapshot();
  });
});
describe('Button.Outline component sanity', function () {
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button.Outline, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Button.Outline, null)));
    expect(component).toMatchSnapshot();
  });
});
describe('Button.Text component sanity', function () {
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button.Text, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Button.Text, null)));
    expect(component).toMatchSnapshot();
  });
});
describe('Button size variant component sanity', function () {
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button, {
      size: 'small'
    }));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Button, {
      size: 'small'
    })));
    expect(component).toMatchSnapshot();
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button, {
      size: 'large'
    }));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Button, {
      size: 'large'
    })));
    expect(component).toMatchSnapshot();
  });
});
describe('Button disabled component sanity', function () {
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button, {
      disabled: true
    }));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Button, {
      disabled: true
    })));
    expect(component).toMatchSnapshot();
  });
});
describe('Button Icon component sanity', function () {
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button, {
      icon: 'Send'
    }));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Button, {
      icon: 'Send'
    })));
    expect(component).toMatchSnapshot();
  });
});
describe('Button Icon with position prop component sanity', function () {
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button, {
      icon: 'Send',
      iconpos: 'right'
    }));
    expect(component).toMatchSnapshot();
  });
});
describe('Button Icon only component sanity', function () {
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button, {
      icon: 'MoreHoriz',
      icononly: true
    }));
    expect(component).toMatchSnapshot();
  });
});
describe('Loading Button component sanity', function () {
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button, null, /*#__PURE__*/React.createElement(Loader, {
      color: 'white'
    })));
    expect(component).toMatchSnapshot();
  });
});
describe('Loading Button component sanity', function () {
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button, {
      icon: 'MoreHoriz',
      icononly: true
    }));
    expect(component).toMatchSnapshot();
  });
});
describe('Link Button component sanity', function () {
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button, {
      as: 'a',
      href: '#!',
      target: '_blank',
      title: 'Learn more'
    }, "Learn More"));
    expect(component).toMatchSnapshot();
  });
});
describe('Link Button Outline component sanity', function () {
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Button.Outline, {
      as: 'a',
      href: '#!',
      target: '_blank',
      title: 'Learn more'
    }, "Learn More"));
    expect(component).toMatchSnapshot();
  });
});