import {
  useMatches,
  useSearchParams,
  useLocation,
  Outlet,
  useNavigate,
} from "react-router-dom";

import AuthButton from "@/AuthButton.jsx";

export default function LoginPage() {
  return (
    <div>
      <h1>Click This</h1>
      <AuthButton></AuthButton>
    </div>
  );
}
