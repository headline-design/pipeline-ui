import Table from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Table component sanity', function () {
  it('has name', function () {
    expect(Table.displayName).toBe('Table');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "#"), /*#__PURE__*/React.createElement("th", null, "First Name"), /*#__PURE__*/React.createElement("th", null, "Last Name"), /*#__PURE__*/React.createElement("th", null, "Username"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "1"), /*#__PURE__*/React.createElement("td", null, "Mark"), /*#__PURE__*/React.createElement("td", null, "Otto"), /*#__PURE__*/React.createElement("td", null, "@mdo")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "2"), /*#__PURE__*/React.createElement("td", null, "Jacob"), /*#__PURE__*/React.createElement("td", null, "Thornton"), /*#__PURE__*/React.createElement("td", null, "@fat")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "3"), /*#__PURE__*/React.createElement("td", null, "Larry"), /*#__PURE__*/React.createElement("td", null, "Bird"), /*#__PURE__*/React.createElement("td", null, "@twitter")))));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "#"), /*#__PURE__*/React.createElement("th", null, "First Name"), /*#__PURE__*/React.createElement("th", null, "Last Name"), /*#__PURE__*/React.createElement("th", null, "Username"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "1"), /*#__PURE__*/React.createElement("td", null, "Mark"), /*#__PURE__*/React.createElement("td", null, "Otto"), /*#__PURE__*/React.createElement("td", null, "@mdo")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "2"), /*#__PURE__*/React.createElement("td", null, "Jacob"), /*#__PURE__*/React.createElement("td", null, "Thornton"), /*#__PURE__*/React.createElement("td", null, "@fat")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "3"), /*#__PURE__*/React.createElement("td", null, "Larry"), /*#__PURE__*/React.createElement("td", null, "Bird"), /*#__PURE__*/React.createElement("td", null, "@twitter"))))));
    expect(component).toMatchSnapshot();
  });
});