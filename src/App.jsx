import "tailwindcss/tailwind.css";
import { HeroSection } from "./components/HeroSection";
import { Navigation } from "./components/Navigation";

export const App = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
    </>
  );
};
