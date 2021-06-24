import BaseButton from './BaseButton';
import TextButton from './TextButton';
import OutlineButton from './OutlineButton';
import SolidButton from './SolidButton';
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


export default Button;
