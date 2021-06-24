import React from 'react';
import { render } from 'enzyme';
import AlgoAddress from '.';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
var testAddress = '0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2';
describe('AlgoAddress component sanity', function () {
  it('has name', function () {
    expect(AlgoAddress.displayName).toBe('AlgoAddress');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(AlgoAddress, {
      address: testAddress
    }));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(AlgoAddress, {
      address: testAddress
    })));
    expect(component).toMatchSnapshot();
  });
  it('matches default snapshot textLabels', function () {
    var component = render( /*#__PURE__*/React.createElement(AlgoAddress, {
      textLabels: true,
      address: testAddress
    }));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot textLabels', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(AlgoAddress, {
      textLabels: true,
      address: testAddress
    })));
    expect(component).toMatchSnapshot();
  });
});
describe('AlgoAddress component rendering', function () {
  var component = mount( /*#__PURE__*/React.createElement(AlgoAddress, {
    address: '0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'
  }));
  it('renders input element', function () {
    expect(component.find('input').exists()).toBe(true);
  });
  it('renders two buttons', function () {
    expect(component.find('button')).toHaveLength(2);
  });
  it('renders address prop', function () {
    expect(component.find('input').prop('value')).toBe('0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2');
  });
});
describe('AlgoAddress component with text buttons', function () {
  var component = mount( /*#__PURE__*/React.createElement(AlgoAddress, {
    address: '0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2',
    textLabels: true
  }));
  it('has button with text Copy', function () {
    expect(component.find('button').at(0).text()).toBe('Copy');
  });
  it('has button with text for QR', function () {
    expect(component.find('button').at(1).text()).toBe('Show QR Code');
  });
});