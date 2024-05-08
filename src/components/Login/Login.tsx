import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { authentication } from "../../Firebase/Firebase";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { Providers } from "./Providers";
import { ResetPassword } from "./ResetPassword";
import { Formik } from "../Formik/Formik";
import { SignIn_Values } from "../Formik/InitialValues";
import { SignInSchema } from "../Formik/Schema";

export const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const errormessage = searchParams.get("errormessage");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [resetPassword, setResetPassword] = React.useState(false);

  const providerFunction = async (data: any) => {
    const ProviderResponse = await Providers(data);
    console.log(ProviderResponse, "ProviderResponse");
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await authentication.signInWithEmailAndPassword(
        email,
        password
      );
      // User successfully signed in
      console.log("User signed in:", userCredential);
      // Handle successful sign-in (e.g., redirect to dashboard)
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  React.useEffect(() => {
    if (errormessage) {
      toast.error(errormessage);
      navigate("/login");
    }
  }, []);

  const FormikProps = {
    children: ({ values, handleChange, errors }: any) => {
      return (
        <div className="space-y-5">
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                autoComplete="email"
                // required
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && (
                <p className="text-red-500 absolute -bottom-6 right-0">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange("password")}
                autoComplete="password"
                // required
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && (
                <p className="text-red-500 absolute -bottom-6 right-0">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm leading-6 text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm leading-6">
              <p
                onClick={() => setResetPassword(true)}
                className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                Forgot password?
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? <BeatLoader size={13} color="#fff" /> : "Sign In"}
            </button>
          </div>
        </div>
      );
    },
    initialValues: SignIn_Values,
    validationSchema: SignInSchema,
    onSubmit: handleSignIn,
  };

  return (
    <>
      {resetPassword ? (
        <ResetPassword email={email} />
      ) : (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <Formik {...FormikProps} />
              <div>
                <div className="relative mt-10">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button
                    onClick={() => providerFunction("google")}
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                  >
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-6">
                      Google
                    </span>
                  </button>
                  <button className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
                    <svg
                      className="h-5 w-5 fill-[#3B5999]" // Change fill color to Facebook blue
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-2.649-2.146-4.825-4.796-4.825H9.881v3.18h6.415A1.705 1.705 0 0018 14.585v6.915h-5.178c-1.552 0-3.09-1.538-3.09-3.584v-6.915H3.204C1.651 12.073 0 13.722 0 15.426v6.882h9.881a4.804 4.804 0 006.79-2.755l3.477-3.478C24 14.589 24 12.073 24 12.073z" />
                    </svg>
                    <span className="text-sm font-semibold leading-6">
                      Facebook
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Register for free
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
