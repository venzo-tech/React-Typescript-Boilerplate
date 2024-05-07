import { BarsArrowUpIcon, UsersIcon } from "@heroicons/react/20/solid";
import { authentication } from "../../Firebase/Firebase";
import toast from "react-hot-toast";

export const ResetPassword = (email:any) => {
  const handlePasswordReset = async () => {
    try { console.log("Enter")
        if(email!=="") {
            await authentication.sendPasswordResetEmail(email);
            console.log("Password reset email sent");
            // Inform user that a password reset email has been sent
        } else toast.error("Please enter email")
    } catch (error) {
      console.error("Error sending password reset email:", error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Reset Password
      </label>
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter Email"
          />
        </div>
        <button
          type="button"
          onClick={handlePasswordReset}
          className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <BarsArrowUpIcon
            className="-ml-0.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};
