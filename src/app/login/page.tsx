import { LoginForm } from "@/ui/organisms/LoginForm";
import getUser from "../../../lib/getUser";
import { redirect } from "next/navigation";

export default async function Login() {
  const user = await getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
}
