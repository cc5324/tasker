import AuthButton from "@/AuthButton.jsx";
import {
  useMatches,
  useSearchParams,
  useLocation,
  Outlet,
} from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <h1>Click This</h1>
      <AuthButton></AuthButton>
    </div>
  );
}
