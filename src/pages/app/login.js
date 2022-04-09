import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
// import { BsEye } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { ErrorMessage, Formik } from "formik";
import { signInValidationSchema } from "../../utils/formValidationSchem";
const Login = () => {
  const [eye, setEye] = useState(false);
  return (
    <>
      <div className="bg-slate-800 w-screen h-screen py-16">
        <section className="m-auto w-[550px] h-[480px] p-6 border shadow bg-white">
          <div className="mb-8">
            <h2 className="font-bold text-3xl">Login</h2>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={signInValidationSchema}
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
                <div>
                  <label className=" block text-2 font-2 mb-2">Email</label>
                  <Input
                    type={"email"}
                    placeholder={"email"}
                    onChange={handleChange}
                    value={values.email}
                    error={errors.email && touched.email}
                    name="email"
                  />
                </div>
                <ErrorMessage name="email">
                  {(msg) => (
                    <p className="text-red-400 text-xs">
                      please enter valid email
                    </p>
                  )}
                </ErrorMessage>
                <div className="mt-4">
                  <label className="block text-2 font-2 mb-2">Password</label>

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
                  <ErrorMessage name="password">
                    {(msg) => (
                      <p className="text-red-400 text-xs">
                        password must contain one capital and small letter,
                        number and special character and it must be at least 8
                        characters long{" "}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
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

          <div className="grid grid-cols-7 items-center mt-4">
            <div className="col-span-3 h-[1px] w-32 bg-gray-300"></div>
            <div className="col-span-1">Or</div>
            <div className="col-span-3 h-[1px] w-32 bg-gray-300"></div>
          </div>
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

export default Login;
