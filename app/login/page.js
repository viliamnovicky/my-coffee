'use client';

import { useState } from "react";
import { loginUser } from "../_lib/auth-service"; // adjust path
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Form, Input } from "../_components/Inputs";
import { Button } from "../_components/Buttons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      toast.success("Logged in!");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-2 p-4 bg-red-400 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
      <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className=""/>
      <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <Button type="submit">Login</Button>
    </form>
  );
}
