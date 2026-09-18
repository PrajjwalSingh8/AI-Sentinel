import { ShieldCheck, QrCode, Bug, ScanSearch, Brain, Lock } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Phishing Detection", desc: "AI identifies fake websites and login pages in real time." },
  { icon: Bug, title: "Malware Scanner", desc: "Scan suspicious files using on-device AI models." },
  { icon: QrCode, title: "QR Scam Detector", desc: "Detect fake UPI QR codes before payment." },
  { icon: ScanSearch, title: "Screenshot OCR AI", desc: "AI reads screenshots and detects scam messages." },
  { icon: Brain, title: "AI Security Assistant", desc: "Ask AI if an email, message, or website is safe." },
  { icon: Lock, title: "Snapdragon NPU Security", desc: "Runs AI locally on Snapdragon AI PCs for privacy." },
];

function Features() {
  return (
    <section className="py-24 bg-slate-900 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-2">
          AI FEATURES
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Intelligent Protection Against Modern Cyber Threats
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-950 border border-slate-800 rounded-3xl p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              <div className="bg-blue-600/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600/20">
                <item.icon className="text-blue-400" size={28}/>
              </div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p className="text-slate-400 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;