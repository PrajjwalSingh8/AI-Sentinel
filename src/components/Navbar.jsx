import { Shield, Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="flex items-center gap-3">
          <div className="bg-blue-600/20 border border-blue-500 p-2 rounded-xl">
            <Shield className="text-blue-400" size={26}/>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">AI Sentinel</h1>
            <p className="text-xs text-slate-400">
              Snapdragon AI Challenge 2026
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-slate-300 text-sm">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">Features</a>
          <a href="#" className="hover:text-blue-400 transition">Dashboard</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
        </div>

        <button className="hidden md:block bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-xl font-medium">
          Launch Scanner
        </button>

        <Menu className="md:hidden text-white"/>
      </div>
    </nav>
  );
}

export default Navbar;