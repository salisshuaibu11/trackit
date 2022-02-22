import { useState } from "react";
import { MailIcon } from "@heroicons/react/outline";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  }
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Welcome to TrackIt</h2>
                <p className="text-gray-500">kindly fill in your details to sign into your account</p>
              </div>

              <div className="relative border border-gray-300 rounded-md px-3 py-1 shadow-sm focus-within:ring-1 focus-within:ring-red-500 focus-within:border-red-500">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                >
                  Enter your email
                </label>

                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="block w-full outline-none py-2 pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="relative border border-gray-300 rounded-md px-3 py-1 shadow-sm focus-within:ring-1 focus-within:ring-red-500 focus-within:border-red-500">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                >
                  Enter Password
                </label>

                <div className="mt-1 relative rounded-md shadow-sm">
                  <button onClick={togglePasswordVisibility} className="absolute right-0 top-[2px] flex items-center">
                    <a href="#" className="underline underline-offset-2">show</a>
                  </button>
                  <input
                    type={passwordVisibility ? "text" : "password"}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name="password"
                    id="password"
                    className="block w-full outline-none py-2 pl-5 sm:text-sm border-gray-300 rounded-md"
                    placeholder="ggggg"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    keep me signed in
                  </label>
                </div>

                <div className="text-sm">
                  <a href="/" className="font-medium underline underline-offset-2 pb-2 text-gray-600 hover:text-gray-500">
                   Reset Password
                  </a>
                </div>
              </div>

              <div>
                <button
                  className="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
