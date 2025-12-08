
import { useSelector } from 'react-redux';
import ThemeToggle from './components/ThemeToggle';
import Cart from './components/Cart'; 

function App() {
  
  const currentMode = useSelector((state) => state.theme.mode);
 
 console.log("Current Theme Mode from Redux:", currentMode);

  return (
    
    <div
  className={`
    min-h-screen 
    bg-white 
    text-white 
    transition-colors 
    duration-300
    ${currentMode === "dark" ? "dark" : "light"}
  `}
>
      <header className="p-4 shadow-md flex justify-between items-center dark:shadow-xl dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Redux Cart App</h1>
        <ThemeToggle />
      </header>
      <main className="container mx-auto p-4">
       
        <Cart />
      </main>
    </div>
  );
}

export default App;