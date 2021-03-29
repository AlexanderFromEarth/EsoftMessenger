import React from "react";
import Form from "../Form/Form";
import FormButtons from "../Form/FormFields/FormButtons/FormButtons";
import FormSubmit from "../Form/FormFields/FormButtons/FormSubmit/FormSubmit";
import FormInput from "../Form/FormFields/FormField/FormInput/FormInput";
import "./LoginForm.css";

const LoginForm = () => (
  <Form title="Login" className="login-form">
    <FormInput
      id="login-form__email-input"
      name="Email"
      type="email"
      placeholder="example@email.com"
      required={true}
    />
    <FormInput
      id="login-form__password-input"
      name="Password"
      type="password"
      placeholder="password"
      required={true}
    />
    <FormButtons>
      <FormSubmit>LogIn</FormSubmit>
    </FormButtons>
  </Form>
);

export default React.memo(LoginForm);
