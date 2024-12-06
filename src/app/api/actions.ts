/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { log } from "console";
import { z } from "zod";

type Error = {
    name?: string;
    email?: string;
    message?: string
}

type initialState = {
    message?: string;
    errors?: Error;
}

const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name field is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().trim().min(1, { message: "Please type in a message" }),
});

export async function sendEmail(prevState: any, formData: FormData) {
  const contactFormData = Object.fromEntries(formData);
  const validatedContactFormData = contactFormSchema.safeParse(contactFormData);

  // console.log(validatedContactFormData?.data);

  if (!validatedContactFormData.success) {
    const formFieldErrors =
      validatedContactFormData.error.flatten().fieldErrors;

    return {
      errors: {
        name: formFieldErrors?.name,
        email: formFieldErrors?.email,
        message: formFieldErrors?.message,
      },
    };
  }

  return {
    success: "Your message was sent successfully!",
  };
}

const emailSchema = z.string().email({message: "Invalid email address"});

export async function subscribeToNewsletter(prevState:any, formData: FormData) {
  const emailData = formData.get('email');
  const validatedEmailData = emailSchema.safeParse(emailData);

  if(!validatedEmailData.success){
    const emailFieldError = validatedEmailData.error.formErrors.formErrors[0];

    console.log(emailFieldError);
    return {
      error: emailFieldError,
    }
  }

  return {
    success: "You are successfully subscribed"
  }
}