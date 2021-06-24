function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import BaseButton from './BaseButton';
import TextButton from './TextButton';
import OutlineButton from './OutlineButton';
import SolidButton from './SolidButton';
import MyAlgo from '@randlabs/myalgo-connect';
import { LocalConvenienceStore } from '@pipeline-ui/icons/es/md';
var Button; // solid style

Button = SolidButton;
Button.displayName = 'Button'; // outline style

Button.Outline = OutlineButton;
Button.Outline.displayName = 'Button.Outline'; // text style

Button.Text = TextButton;
Button.Text.displayName = 'Button.Text'; // base style

Button.Base = BaseButton;
Button.Base.displayName = 'Button.Base';
var myAlgoWallet = new MyAlgo();

var connectToMyAlgo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var myAlgoWallet, accounts;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            myAlgoWallet = new MyAlgo();
            _context.prev = 1;
            _context.next = 4;
            return myAlgoWallet.connect();

          case 4:
            accounts = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            alert(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function connectToMyAlgo() {
    return _ref.apply(this, arguments);
  };
}();

export { myAlgoWallet, connectToMyAlgo };
export default Button;