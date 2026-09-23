
import './App.css'
import Navbar from "./components/Navbar.tsx";
import Introduction from "./components/Introduction.tsx";

function App() {

  return (
    <>
        <Navbar />
        <main className="flex flex-col items-center justify-center bg-neutral-700 text-white min-h-screen">
            <Introduction />
        </main>
    </>
  )
}

export default App
