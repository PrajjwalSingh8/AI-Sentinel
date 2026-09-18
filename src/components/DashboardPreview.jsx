import { Activity, ShieldAlert, Globe, Cpu } from "lucide-react";

function DashboardPreview() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-blue-400 uppercase tracking-widest text-sm mb-2">
          Live AI Dashboard
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Real-Time Threat Intelligence
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5">
            <ShieldAlert className="text-red-400 mb-3"/>
            <p className="text-3xl font-bold">124</p>
            <p className="text-slate-400 text-sm">Threats Blocked Today</p>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5">
            <Activity className="text-green-400 mb-3"/>
            <p className="text-3xl font-bold">98.7%</p>
            <p className="text-slate-400 text-sm">Detection Accuracy</p>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5">
            <Globe className="text-blue-400 mb-3"/>
            <p className="text-3xl font-bold">18</p>
            <p className="text-slate-400 text-sm">Countries Monitored</p>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5">
            <Cpu className="text-purple-400 mb-3"/>
            <p className="text-3xl font-bold">NPU</p>
            <p className="text-slate-400 text-sm">Snapdragon Accelerated</p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
            <h3 className="text-xl font-semibold mb-6">
              Threat Detection Activity
            </h3>

            <div className="space-y-4">
              {["Monday","Tuesday","Wednesday","Thursday","Friday"].map((day,index)=>(
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{day}</span>
                    <span>{40+index*12}%</span>
                  </div>

                  <div className="h-3 bg-slate-800 rounded-full">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"
                      style={{width:`${40+index*12}%`}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/10 to-purple-700/10 rounded-3xl border border-blue-500/20 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">
              AI Sentinel Status
            </h3>

            <p className="text-slate-300 mb-6">
              Snapdragon AI Engine is continuously scanning files, URLs,
              QR codes and screenshots in real time.
            </p>

            <div className="space-y-4">

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Phishing Detection</span>
                  <span>95%</span>
                </div>

                <div className="h-2 bg-slate-800 rounded-full">
                  <div className="h-2 w-[95%] bg-blue-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Malware Scanner</span>
                  <span>90%</span>
                </div>

                <div className="h-2 bg-slate-800 rounded-full">
                  <div className="h-2 w-[90%] bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>QR Scam Detector</span>
                  <span>88%</span>
                </div>

                <div className="h-2 bg-slate-800 rounded-full">
                  <div className="h-2 w-[88%] bg-purple-500 rounded-full"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;