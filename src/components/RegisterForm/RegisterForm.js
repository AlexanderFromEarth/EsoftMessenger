import React from "react";
import Form from "../Form/Form";
import FormButtons from "../Form/FormFields/FormButtons/FormButtons";
import FormSubmit from "../Form/FormFields/FormButtons/FormSubmit/FormSubmit";
import FormInput from "../Form/FormFields/FormField/FormInput/FormInput";
import "./RegisterForm.css";

const RegisterForm = () => (
  <Form title="Register" className="register-form">
    <FormInput
      id="register-form__email-input"
      name="Email"
      type="email"
      placeholder="example@email.com"
      required={true}
    />
    <FormInput
      id="register-form__phone-number-input"
      name="Phone"
      type="tel"
      placeholder="+78000000000 or 88000000000"
      pattern="((\+\d+)|\d+)[0-9]{10}"
      required={true}
    />
    <FormInput
      id="register-form__nickname-input"
      name="Nickname"
      type="text"
      placeholder="example"
      required={true}
    />
    <FormInput
      id="register-form__password-input"
      name="Password"
      type="password"
      placeholder="password"
      required={true}
    />
    <FormButtons>
      <FormSubmit>Register</FormSubmit>
    </FormButtons>
  </Form>
);

export default React.memo(RegisterForm);
