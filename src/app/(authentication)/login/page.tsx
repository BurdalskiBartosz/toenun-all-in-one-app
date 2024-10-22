import LoginForm from "@/components/website/Authentication/Forms/Login/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex grow flex-col">
      <h1 className="mb-10 text-[3.5rem] text-gray-600">Sign in</h1>
      <LoginForm />
      <div className="text-md mt-10 flex justify-center text-gray-600">
        <p className="mr-2">Don't have an account?</p>
        <Link className="font-bold" href={"/registration"}>
          Register
        </Link>
      </div>
    </div>
  );
}
