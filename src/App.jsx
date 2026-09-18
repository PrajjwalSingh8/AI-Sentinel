import DashboardPreview from "./components/DashboardPreview";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
    </main>
  );
}

export default App;