import React, { useState } from "react";
import { auth } from "../../Firebase/Firebase";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent successfully!")
    } catch (error:any) {
      console.error("Forgot password failed:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-10 w-[30%] p-5">
      <button type="button" className="bg-blue-600 text-[18px] text-white w-[15%] p-1 px-4 rounded" onClick={()=>navigate('/login')}>Back</button>
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-gray-800">Forgot Password</h1>
        <form onSubmit={handleForgotPassword} className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full rounded-md py-2 px-3 text-sm font-medium text-center ${
              isLoading ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }`}
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

