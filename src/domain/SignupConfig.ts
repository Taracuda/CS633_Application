import { ISignUpConfig } from "aws-amplify-react/lib-esm/Auth/SignUp";

const SignUpConfig: ISignUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      placeholder: 'Email',
      type: 'string',
      displayOrder: 1,
    },
    {
      label: 'First Name',
      key: 'given_name',
      required: true,
      placeholder: 'First Name',
      type: 'string',
      displayOrder: 2,
    },
    {
      label: 'Last Name',
      key: 'family_name',
      required: true,
      placeholder: 'Last Name',
      type: 'string',
      displayOrder: 3,
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      placeholder: 'Password',
      type: 'password',
      displayOrder: 5,
    },
  ],
};
export default SignUpConfig;