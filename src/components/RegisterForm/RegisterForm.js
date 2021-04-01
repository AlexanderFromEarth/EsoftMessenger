import React from "react";
import Form from "../Form/Form";
import FormButtons from "../Form/FormFields/FormButtons/FormButtons";
import FormSubmit from "../Form/FormFields/FormButtons/FormSubmit/FormSubmit";
import FormInput from "../Form/FormFields/FormField/FormInput/FormInput";
import { Validator } from "../../helpers/js-homework/validator";
import "./RegisterForm.css";

const validator = new Validator();

const RegisterForm = () => {
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({
    email: [],
    password: [],
    nickname: [],
    phone: [],
  });

  return (
    <Form
      title="Register"
      className="register-form"
      onSubmit={(e) =>
        (e.preventDefault() || true) &&
        setErrors({
          email: validator.validate(
            {
              type: "string",
              format: "email",
            },
            email
          ).errors,
          nickname: validator.validate(
            {
              type: "string",
              minLength: 6,
            },
            nickname
          ).errors,
          phone: validator.validate(
            {
              type: "string",
              pattern: /((\+\d+)|\d+)[0-9]{10}/,
            },
            phone
          ).errors,
          password: validator.validate(
            {
              type: "string",
              minLength: 6,
            },
            password
          ).errors,
        })
      }
    >
      <FormInput
        id="register-form__email-input"
        name="Email"
        type="text"
        placeholder="example@email.com"
        errors={errors.email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        id="register-form__phone-number-input"
        name="Phone"
        type="text"
        placeholder="+78000000000 or 88000000000"
        errors={errors.phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <FormInput
        id="register-form__nickname-input"
        name="Nickname"
        type="text"
        placeholder="example"
        errors={errors.nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <FormInput
        id="register-form__password-input"
        name="Password"
        type="password"
        placeholder="password"
        errors={errors.password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormButtons>
        <FormSubmit>Register</FormSubmit>
      </FormButtons>
    </Form>
  );
};

export default React.memo(RegisterForm);
