import { useSelector } from "react-redux";
import ThemeToggle from "./components/ThemeToggle";
import Cart from "./components/Cart";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";

function App() {
  const currentMode = useSelector((state) => state.theme.mode);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <div
      className={`
        min-h-screen transition-colors duration-300
        ${currentMode === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-black"}
      `}
    >
      {/* Show login first */}
      {!isAuthenticated && <Login />}

      {/* Show app only after login */}
      {isAuthenticated && (
        <>
       
          <header className="p-4 shadow-md dark:bg-gray-800 flex justify-between items-center">
            
        
            <div>
              <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                Welcome, {user?.userName}! 👋
              </h1>
              <p className="text-sm opacity-70">Good to have you back</p>
            </div>

            {/* RIGHT SIDE: THEME TOGGLE */}
            <ThemeToggle />
          </header>

          {/* SECTION TITLE: CART */}
          <div className="container mx-auto px-4 mt-6">
          
             <Cart />
            <DashBoard />
           
          </div>
        </>
      )}
    </div>
  );
}

export default App;
