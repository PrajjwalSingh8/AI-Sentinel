import { Globe, ShieldAlert, Radar, Activity } from "lucide-react";

const threats = [
  { city: "Mumbai", type: "Phishing Website", risk: "High" },
  { city: "Delhi", type: "Malware File", risk: "Medium" },
  { city: "Bangalore", type: "QR Scam", risk: "High" },
  { city: "Hyderabad", type: "Fake Login Page", risk: "Critical" },
  { city: "Pune", type: "Suspicious Screenshot", risk: "Low" },
];

function ThreatMap() {
  return (
    <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">
            Global Threat Intelligence
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Live World Cyber Threat Map
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            AI Sentinel continuously monitors phishing attacks, malware, QR scams,
            fake websites and suspicious screenshots using Snapdragon AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-[0_0_40px_rgba(37,99,235,0.15)]">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-blue-400" size={28}/>
              <h3 className="text-2xl font-bold text-white">
                Live Attack Activity
              </h3>
            </div>

            <div className="relative h-[360px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_70%)]"></div>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                alt="World Map"
                className="absolute inset-0 w-full h-full object-cover opacity-25"
              />

              <span className="absolute top-[25%] left-[32%] w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
              <span className="absolute top-[45%] left-[60%] w-3 h-3 bg-yellow-400 rounded-full animate-ping"></span>
              <span className="absolute top-[55%] left-[72%] w-3 h-3 bg-blue-500 rounded-full animate-ping"></span>
              <span className="absolute top-[35%] left-[48%] w-3 h-3 bg-green-400 rounded-full animate-ping"></span>

              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700 text-xs text-slate-300">
                🌍 Snapdragon AI Threat Monitoring Active
              </div>
            </div>
          </div>

          <div className="space-y-6">

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <Radar className="text-blue-400 mb-3"/>
                <h4 className="text-3xl font-bold">2,584</h4>
                <p className="text-slate-400 text-sm">Live Threats Detected</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <ShieldAlert className="text-red-400 mb-3"/>
                <h4 className="text-3xl font-bold">98.7%</h4>
                <p className="text-slate-400 text-sm">AI Detection Accuracy</p>
              </div>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Activity className="text-green-400"/>
                <h3 className="text-xl font-bold">Live Threat Feed</h3>
              </div>

              <div className="space-y-4">
                {threats.map((item,index)=>(
                  <div
                    key={index}
                    className="flex justify-between items-center bg-slate-950 rounded-xl px-4 py-3 border border-slate-800 hover:border-blue-500 transition"
                  >
                    <div>
                      <p className="font-semibold text-white">{item.city}</p>
                      <p className="text-slate-400 text-sm">{item.type}</p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold $
                        {item.risk === "Critical"
                          ? "bg-red-600/20 text-red-400"
                          : item.risk === "High"
                          ? "bg-orange-500/20 text-orange-400"
                          : item.risk === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-green-500/20 text-green-400"}`}
                    >
                      {item.risk}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreatMap;