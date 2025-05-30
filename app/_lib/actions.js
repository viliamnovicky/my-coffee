"use server";

import { signIn, signOut } from "./auth";
import { auth } from "../_lib/auth";
import { updateUser } from "./data-service";
import { revalidate } from "../coffees/[coffeeId]/page";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const fullName = formData.get("fullName");
  const data = {fullName}

  await updateUser(data, session.user.email)
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/my-coffees" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
