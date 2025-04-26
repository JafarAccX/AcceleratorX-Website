import { useState } from "react";
import { SignUpForm } from "./SignUpForm";
import { SignInForm } from "./SignInForm";

export default function AuthPage() {
  const [view, setView] = useState<"signup" | "signin">("signup");

  return (
    <div className="max-w-md w-full mx-auto p-4 md:p-8 bg-white dark:bg-black rounded-md">
      {view === "signup" ? <SignUpForm onSuccess={() => setView("signin")} /> : <SignInForm onSuccess={() => {}} />}
    </div>
  );
}
