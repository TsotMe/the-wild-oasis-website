"use server";

import { auth, signIn, signOut } from "@/app/_lib/auth";
import { updateGuest } from "@/app/_lib/data-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfile(formData) {
  const session = await auth();

  if (session === null) {
    throw new Error("You must be logged in.");
  }

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Please provide a valid national ID");
  }

  const updateData = {
    nationality,
    nationalID: String(nationalID),
    countryFlag,
  };

  await updateGuest(session.user.guestId, updateData);
}
