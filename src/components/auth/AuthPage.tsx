import { useState } from "react";
import { SignUpForm } from "./SignUpForm";
import { SignInForm } from "./SignInForm";

export default function AuthPage() {
  const [view, setView] = useState<"signup" | "signin">("signup");

  return (
    <div className="max-w-md w-full mx-auto p-4 md:p-8 bg-white dark:bg-black rounded-md">
      {view === "signup" ? (
        <SignUpForm onSuccess={() => setView("signin")} />
      ) : (
        <SignInForm onSuccess={() => {}} />
      )}
      <div className="text-center mt-4">
        {view === "signup" ? (
          <p className="text-blue-500 hover:underline">
            Already have an account?{" "}
            <button
              onClick={() => setView("signin")}
              className="text-blue-500 hover:underline"
            >
              Sign In
            </button>
          </p>
        ) : (
          <p className="text-blue-500 hover:underline">
            Don't have an account?{" "}
            <button
              onClick={() => setView("signup")}
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
