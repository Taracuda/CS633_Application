import { IActionRow } from "../Theme/Theme/IActionRow";
import { IAnchor } from "../Theme/Theme/IAnchor";
import { IBootstrap } from "../Theme/Theme/IBootstrap";
import { IButton } from "../Theme/Theme/IButton";
import { IContainer } from "../Theme/Theme/IContainer";
import { IFormContainer } from "../Theme/Theme/IFormContainer";
import { IFormField } from "../Theme/Theme/IFormField";
import { IFormRow } from "../Theme/Theme/IFormRow";
import { IFormSection } from "../Theme/Theme/IFormSection";
import { IHint } from "../Theme/Theme/IHint";
import { IInput } from "../Theme/Theme/IInput";
import { IInputLabel } from "../Theme/Theme/IInputLabel";
import { IRadio } from "../Theme/Theme/IRadio";
import { ISectionBody } from "../Theme/Theme/ISectionBody";
import { ISectionFooter } from "../Theme/Theme/ISectionFooter";
import { ISectionFooterPrimaryContent } from "../Theme/Theme/ISectionFooterPrimaryContent";
import { ISectionFooterSecondaryContent } from "../Theme/Theme/ISectionFooterSecondaryContent";
import { ISectionHeader } from "../Theme/Theme/ISectionHeader";
import { ISignInButton } from "../Theme/Theme/ISignInButton";
import { ISignInButtonContent } from "../Theme/Theme/ISignInButtonContent";
import { ISignInButtonIcon } from "../Theme/Theme/ISignInButtonIcon";
import { IStrike } from "../Theme/Theme/IStrike";
import { IStrikeContent } from "../Theme/Theme/IStrikeContent";
import { IToast } from "../Theme/Theme/IToast";

export const Container: IContainer = {
  fontFamily: '"Helvetica Neue", sans-serif',
  fontWeight: '400',
  width: '380px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column-reverse',
};
export const FormContainer: IFormContainer = {};
export const FormSection: IFormSection = {
  position: 'relative',
  marginBottom: '20px',
  backgroundColor: '#002F37',
  textAlign: 'left',
  display: 'inline-block',
  minWidth: '380px',
  borderRadius: '6px',
};
export const FormField: IFormField = {
  marginBottom: '22px',
};
export const SectionHeader: ISectionHeader = {
  color: '#152939',
  marginBottom: '30px',
  fontSize: '18px',
  fontWeight: '500',
};
export const Toast: IToast = {
  padding: '15px',
  fontWeight: '500',
  color: '#fff',
  backgroundColor: '#aa2016',
  borderRadius: '4px',
};
export const SectionBody: ISectionBody = {
  marginBottom: '30px',
};
export const SectionFooter: ISectionFooter = {
  fontSize: '14px',
  color: '#828282',
};
export const SectionFooterPrimaryContent: ISectionFooterPrimaryContent = {
  marginLeft: 'auto',
};
export const SectionFooterSecondaryContent: ISectionFooterSecondaryContent = {
  marginRight: 'auto',
  alignSelf: 'center',
};
export const Input: IInput = {
  display: 'block',
  width: '100%',
  padding: '16px',
  fontSize: '14px',
  fontFamily: 'Arial',
  color: '#152939',
  backgroundColor: '#fff',
  backgroundImage: 'none',
  border: '1px solid #C4C4C4',
  borderRadius: '4px',
  boxSizing: 'border-box',
  marginBottom: '10px',
};
export const Button: IButton = {
  minWidth: '153px',
  display: 'block',
  marginBottom: '7px',
  fontWeight: 500,
  lineHeight: '1.42857143',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  touchAction: 'manipulation',
  cursor: 'pointer',
  userSelect: 'none',
  backgroundImage: 'none',
  color: '#fff',
  backgroundColor: '#0784a7',
  borderColor: '#ccc',
  textTransform: 'uppercase',
  padding: '14px 0',
  letterSpacing: '1.1px',
  borderRadius: '4px',
  width: '100%',
};
export const SignInButton: ISignInButton = {
  position: 'relative',
  width: '100%',
  borderRadius: '9px',
  marginBottom: '10px',
  cursor: 'pointer',
  padding: 0,
  fontFamily: 'Amazon Ember',
  color: '#fff',
  fontSize: '14px',
};
export const SignInButtonIcon: ISignInButtonIcon = {
  position: 'absolute',
  left: 0,
  '#google_signin_btn_icon': {
    backgroundColor: '#fff',
    borderRadius: '4px 0 0 4px',
    height: '30px',
    width: '30px',
    padding: '11px',
  },
  '#facebook_signin_btn_icon': {
    height: '33px',
    width: '18px',
    padding: '10px 14px',
  },
  '#amazon_signin_btn_icon': {
    padding: '10px',
    height: '32px',
    width: '32px',
  },
};
export const SignInButtonContent: ISignInButtonContent = {
  display: 'block',
  padding: '18px 0',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'center',
};
export const Strike: IStrike = {
  width: '100%',
  textAlign: 'center',
  borderBottom: '1px solid #bbb',
  lineHeight: '0.1em',
  margin: '32px 0',
  color: '#828282',
};
export const StrikeContent: IStrikeContent = {
  background: '#fff',
  padding: '0 25px',
  fontSize: '14px',
  fontWeight: '500',
};
export const ActionRow: IActionRow = {
  marginBottom: '15px',
};
export const FormRow: IFormRow = {
  marginBottom: '12px',
};
export const A: IAnchor = {
  color: '#0784a7',
  cursor: 'pointer',
};
export const Hint: IHint = {
  color: '#828282',
  fontSize: '13px',
  textAlign: 'right',
};
export const Radio: IRadio = {
  marginRight: '18px',
  verticalAlign: 'bottom',
};
export const InputLabel: IInputLabel = {
  color: '#152939',
  fontSize: '14px',
  marginBottom: '8px',
};
const Bootstrap: IBootstrap = {
  container: Container,
  formContainer: FormContainer,
  formSection: FormSection,
  formField: FormField,
  sectionHeader: SectionHeader,
  sectionBody: SectionBody,
  sectionFooter: SectionFooter,
  sectionFooterPrimaryContent: SectionFooterPrimaryContent,
  sectionFooterSecondaryContent: SectionFooterSecondaryContent,
  input: Input,
  button: Button,
  signInButton: SignInButton,
  signInButtonIcon: SignInButtonIcon,
  signInButtonContent: SignInButtonContent,
  formRow: FormRow,
  strike: Strike,
  strikeContent: StrikeContent,
  actionRow: ActionRow,
  a: A,
  hint: Hint,
  radio: Radio,
  inputLabel: InputLabel,
  toast: Toast,
};
export default Bootstrap;
//# sourceMappingURL=Amplify-UI-Theme-Sample.js.map