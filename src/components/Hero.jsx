import { ArrowRight, ShieldCheck, Cpu, ScanSearch } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden">

      <div className="absolute -top-32 left-20 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-purple-600/20 blur-[150px]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 pt-24 items-center relative z-10">

        <div>
          <span className="inline-flex items-center gap-2 border border-blue-500 bg-blue-600/10 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
            <Cpu size={16}/>
            Snapdragon AI Optimized
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            AI Powered
            <span className="text-blue-500 block">Cyber Defense</span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg leading-8">
            Detect phishing websites, malware, QR scams, fake login pages,
            suspicious screenshots and files — powered by Snapdragon AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold transition">
              Launch Scanner
              <ArrowRight size={18}/>
            </button>

            <button className="border border-slate-700 hover:border-blue-500 px-6 py-3 rounded-xl transition">
              Watch Demo
            </button>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <ShieldCheck className="text-green-400 mb-3"/>
              <p className="text-2xl font-bold">98.7%</p>
              <p className="text-sm text-slate-400">Detection Accuracy</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <ScanSearch className="text-blue-400 mb-3"/>
              <p className="text-2xl font-bold">2500+</p>
              <p className="text-sm text-slate-400">Threats Scanned</p>
            </div>

          </div>

        </div>

        <div className="flex justify-center relative">

          <div className="absolute w-80 h-80 rounded-full bg-blue-500/20 blur-[100px]"></div>

          <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-[40px] p-10 backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.35)]">

            <ShieldCheck className="text-blue-400 mx-auto" size={170}/>

            <h3 className="text-center text-white text-2xl font-bold mt-6">
              AI Sentinel Scanner
            </h3>

            <p className="text-center text-slate-400 mt-2">
              Snapdragon NPU Accelerated Threat Detection
            </p>

            <div className="mt-8 bg-slate-900 rounded-xl p-4 border border-slate-800">
              <p className="text-sm text-slate-400">Live Threat Score</p>

              <div className="w-full h-3 rounded-full bg-slate-800 mt-3">
                <div className="w-4/5 h-3 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"></div>
              </div>

              <div className="flex justify-between mt-3 text-sm">
                <span className="text-green-400">SAFE</span>
                <span className="text-red-400">HIGH RISK</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;