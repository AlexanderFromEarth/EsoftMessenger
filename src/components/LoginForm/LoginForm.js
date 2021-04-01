import React from "react";
import Form from "../Form/Form";
import FormButtons from "../Form/FormFields/FormButtons/FormButtons";
import FormSubmit from "../Form/FormFields/FormButtons/FormSubmit/FormSubmit";
import FormInput from "../Form/FormFields/FormField/FormInput/FormInput";
import { Validator } from "../../helpers/js-homework/validator";
import "./LoginForm.css";

const validator = new Validator();

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({
    email: [],
    password: [],
  });

  return (
    <Form
      title="Login"
      className="login-form"
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
        id="login-form__email-input"
        name="Email"
        type="text"
        placeholder="example@email.com"
        errors={errors.email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        id="login-form__password-input"
        name="Password"
        type="password"
        placeholder="password"
        errors={errors.password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormButtons>
        <FormSubmit>LogIn</FormSubmit>
      </FormButtons>
    </Form>
  );
};

export default React.memo(LoginForm);
