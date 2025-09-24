"use client";

import { updateProfile } from "../../_lib/actions";
import { useFormStatus } from "react-dom";

function UpdateAccountForm({ user }) {
  return (
    <form action={updateProfile} className="mt-[2rem] flex flex-col w-[300px]">
      <h2>Update Account</h2>
      <label>Full Name</label>
      <input name="fullName" defaultValue={user.fullName}></input>
      <Button />
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button className="disabled:bg-red-400" disabled={pending}>
      {pending ? "updating" : "submit"}
    </button>
  );
}

export default UpdateAccountForm;
