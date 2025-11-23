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


export async function addBrewerAction(formData) {
  const session = await auth();
  if (!session) throw new Error("Not logged in");

  const newBrewer = {
    mark: formData.get("mark"),
    model: formData.get("model"),
    type: formData.get("type"),
    description: formData.get("description"),
    image: formData.get("image"),
    customSettings: formData.get("customSettings"),
  };

  console.log(newBrewer)

  await updateUser({ newBrewer }, session.user.email);
}

export async function addGrinderAction(formData) {
  const session = await auth();
  if (!session) throw new Error("Not logged in");

  const newGrinder = {
    mark: formData.get("mark"),
    model: formData.get("model"),
    type: formData.get("type"),
    steps: formData.get("steps"),
    description: formData.get("description"),
    image: formData.get("image"),
    customSettings: formData.get("customSettings"),
  };

  console.log(newGrinder)

  await updateUser({ newGrinder }, session.user.email);
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
