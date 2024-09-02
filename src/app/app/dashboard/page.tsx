import { logout } from "@/actions/authentication/login";
import Topbar from "@/components/app/Navigations/Topbar";

export default function Dashboard() {
  return (
    <>
      <Topbar>
        <div>Children</div>
        <form
          action={async () => {
            "use server";
            await logout();
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
      </Topbar>
      <div className="p-1">
        <h1>Dashboard</h1>
      </div>
    </>
  );
}
