import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import Button from "./Button";
import CustomContainer from "./CustomerContainer";
import FormikInput from "./FormikInput";

export default function SignUp(props) {
  return (
    <CustomContainer flexType="column">
      <h2>SignUp</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          // email: "",
          // password: "",
          // confirmPassword: "",
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .min(2, "required at least 2 letter or more!")
            .required("Required"),
          lastName: yup
            .string()
            .min(2, "required at least 2 letter or more!")
            .required("Required"),
          // lastName: yup.string().required("Required"),
          //   .min(2, "Required at least 2 letter or more!"),
          // email: yup.string().email("Invalid Email!").required("Required"),
          // password: yup
          //   .string()
          //   .required()
          //   .min(8, "Required minimum 8 caractors!"),
          // confirmPassword: yup
          //   .string()
          //   .oneOf([yup.ref("password")], "Password must be same!")
          //   .required("Confirm Password"),
        })}
        onSubmit={async (values) => {
          try {
            await axios.post("http://localhost:3099/users", values);
            alert("data posted");
          } catch (e) {
            alert("Fail... data not posted!");
            console.log(e);
          }
        }}
      >
        <Form>
          <FormikInput
            name="firstName"
            type="text"
            label="First Name"
            errorName="firstName"
          />
          <FormikInput
            name="lastName"
            type="text"
            label="Last Name"
            errorName="lastName"
          />
          {/* <FormikInput
            name="email"
            type="email"
            label="Email"
            errorName="email"
          />
          <FormikInput
            name="password"
            type="password"
            label="Password"
            errorName="password"
          />
          <FormikInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            errorName="confirmPassword"
          /> */}

          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </CustomContainer>
  );
}
