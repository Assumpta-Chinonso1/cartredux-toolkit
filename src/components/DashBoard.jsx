import { useDispatch } from "react-redux";
import { logout } from "../Auth/authSlics";

export default function DashBoard() {
  const dispatch = useDispatch();

  return (
    <div className="max-w-sm ml-1 mt-2 p-6">
      <button
        onClick={() => dispatch(logout())}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}

