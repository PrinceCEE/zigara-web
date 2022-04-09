import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { ErrorMessage, Formik } from "formik";
import { signupValidationSchema } from "../../utils/formValidationSchem";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
const SignUp = () => {
  const [eye, setEye] = useState(false);
  return (
    <>
      <div className="bg-slate-800 w-screen h-screen py-16">
        <section className="m-auto w-[550px] h-[750px] p-6 border shadow bg-white">
          <div className="mb-8">
            <h2 className="font-bold text-3xl">Sign Up</h2>
            <small>*Please fill all required text field</small>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              firstName: "",
              lastName: "",
              phoneNumber: "",
            }}
            validationSchema={signupValidationSchema}
            onSubmit={(data) => {
              console.log(data);
            }}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="grid grid-cols-2 mb-4">
                  <div className="mr-8">
                    <label className=" block text-2 font-2 mb-2">
                      First Name *
                    </label>
                    <Input
                      type={"text"}
                      placeholder={"first name"}
                      onChange={handleChange}
                      value={values.firstName}
                      error={errors.firstName && touched.firstName}
                      name="firstName"
                    />
                    <ErrorMessage name="firstName">
                      {(msg) => <p className="text-red-400 text-xs">{msg}</p>}
                    </ErrorMessage>
                  </div>

                  <div>
                    <label className=" block text-2 font-2 mb-2">
                      Last Name *
                    </label>
                    <Input
                      type={"text"}
                      placeholder={"last name"}
                      onChange={handleChange}
                      value={values.lastName}
                      error={errors.lastName && touched.lastName}
                      name="lastName"
                    />
                    <ErrorMessage name="lastName">
                      {(msg) => <p className="text-red-400 text-xs">{msg}</p>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="mt-6">
                  <label className=" block text-2 font-2 mb-2">
                    Email address *
                  </label>
                  <Input
                    type={"email"}
                    placeholder={"email"}
                    onChange={handleChange}
                    value={values.email}
                    error={errors.email && touched.email}
                    name="email"
                  />
                  <ErrorMessage name="email">
                    {(msg) => <p className="text-red-400 text-xs">{msg}</p>}
                  </ErrorMessage>
                </div>
                <div className="mt-6 ">
                  <label className="block text-2 font-2 mb-2">Password *</label>
                  <Input
                    type={eye ? "text" : "password"}
                    placeholder={"password"}
                    icon={eye ? <BsEye /> : <AiOutlineEyeInvisible />}
                    onPasswordToggle={() => setEye(!eye)}
                    onChange={handleChange}
                    value={values.password}
                    error={errors.password && touched.password}
                    name="password"
                  />
                </div>
                <ErrorMessage name="password">
                  {(msg) => (
                    <p className="text-red-400 text-xs">
                      password must contain one capital and small letter, number
                      and special character and it must be at least 8 characters
                      long{" "}
                    </p>
                  )}
                </ErrorMessage>
                <div className="mt-8 mb-4">
                  <label className="block text-2 font-2 mb-2">
                    Phone number *
                  </label>
                  <Input
                    type={"number"}
                    placeholder={"phone number"}
                    onChange={handleChange}
                    value={values.phoneNumber}
                    error={errors.phoneNumber && touched.phoneNumber}
                    name="phoneNumber"
                  />
                </div>
                <ErrorMessage name="phoneNumber">
                  {(msg) => <p className="text-red-400 text-xs">{msg}</p>}
                </ErrorMessage>
                <div>
                  <Button
                    text="Login"
                    type="submit"
                    onClick={() => console.log("Button Clicked")}
                  />
                </div>
              </form>
            )}
          </Formik>

          {/* <div className="grid grid-cols-7 items-center mt-4">
            <div className="col-span-3 h-[1px] w-32 bg-gray-300"></div>
            <div className="col-span-1">Or</div>
            <div className="col-span-3 h-[1px] w-32 bg-gray-300"></div>
          </div> */}
          <div className="flex items-center mt-8 justify-center">
            <div>
              <FaFacebook size={30} className="text-sky-400" />
            </div>
            <div className="ml-3">
              <p className="text-md">Login With FaceBook</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-center items-center">
              <small>Forgot Password</small>
            </div>
          </div>
        </section>
        <section className="h-[123px] w-[550px] shadow border p-6 mt-6 m-auto flex items-center justify-center bg-white">
          <div className="">
            Don’t have an account?{" "}
            <span className="text-blue-400">Sign up</span>
          </div>
        </section>
      </div>
    </>
  );
};
export default SignUp;
