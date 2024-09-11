import { logout } from "@/actions/authentication/login";

export default function Dashboard() {
  return (
    <div className="p-1">
      <h1>Dashboard</h1>
      <form
        action={async () => {
          "use server";
          await logout();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
