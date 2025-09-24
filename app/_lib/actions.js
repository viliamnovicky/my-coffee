"use server";

import { signIn, signOut } from "./auth";
import { auth } from "../_lib/auth";
import { deleteCoffee, updateUser } from "./data-service";
import { redirect } from "next/navigation";

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const fullName = formData.get("fullName");
  const data = { fullName };

  await updateUser(data, session.user.email);
}

export async function deleteCoffeeAction(coffee) {
  const session = await auth();
  await deleteCoffee(coffee.slug, session.user.email);
  redirect("/coffees");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
