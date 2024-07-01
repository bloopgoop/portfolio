import { Navbar } from "./components/navbar";
import { Outlet } from "react-router-dom";
import { HeroHighlight } from "./components/ui/hero-highlight";
import { ThemeProvider } from "./components/theme-provider";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HeroHighlight>
        <Navbar />
        <Outlet />
      </HeroHighlight>
    </ThemeProvider>
  );
}

export default App;
