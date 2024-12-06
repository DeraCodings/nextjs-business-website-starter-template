"use client";

import { subscribeToNewsletter } from "@/app/api/actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const initialState = {
  error: "",
  success: "",
};

function SubscribeForm() {
  const [state, formAction] = useActionState(subscribeToNewsletter, initialState);
  return (
    <>
      <form action={formAction} className="w-full">
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-l-lg py-2 pb-2 w-4/6 md:w-1/2"
          placeholder="Enter your email..."
        />
        <SubmitButton />
        {state?.error && <p className="text-red-500">{state.error}</p>}
      </form>
      {state?.success && <p className="text-green-500">{state.success}</p>}
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-blue-600 px-3 py-3 text-sm rounded-r-lg text-white"
      type="submit"
      aria-disabled={pending}
    >
      {pending ? "Subscribing" : "Subscribe"}
    </button>
  );
}

export default SubscribeForm;
