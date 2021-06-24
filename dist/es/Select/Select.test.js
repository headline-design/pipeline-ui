import Select from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
var selectOptions = [{
  value: '123',
  label: 'One Two Three'
}, {
  value: 'abc',
  label: 'A B C'
}];
describe('Select component sanity', function () {
  it('has name', function () {
    expect(Select.displayName).toBe('Select');
  });
  it('matches default snapshot', function () {
    var component = shallow( /*#__PURE__*/React.createElement(Select, {
      options: selectOptions
    }));
    expect(component).toMatchSnapshot();
  }); // it('matches themed snapshot', () => {
  //   const component = render(
  //     <ThemeProvider theme={theme}>
  //       <Select items={selectOptions} />
  //     </ThemeProvider>
  //   )
  //   expect(component).toMatchSnapshot()
  // })
});