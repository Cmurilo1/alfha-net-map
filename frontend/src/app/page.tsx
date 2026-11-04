"use client";
import { useState } from "react";

const DEVICES = [
  {ip:"192.168.1.1", name:"Router", vendor:"TP-Link", type:"router", latency:12, signal:98},
  {ip:"192.168.1.101", name:"Phone Claudio", vendor:"Phone-Maker", type:"phone", latency:60, signal:75},
  {ip:"192.168.1.105", name:"Notebook Dev", vendor:"Laptop-Maker", type:"laptop", latency:34, signal:88},
  {ip:"192.168.1.110", name:"Smart TV Sala", vendor:"TV-Maker", type:"tv", latency:45, signal:92},
];

export default function Home() {
  const [devices] = useState(DEVICES);
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-green-400">ALFHA NET MAP</h1>
      <p className="text-zinc-400 mb-6">Live Wi-Fi Mapper - {devices.length} devices - Online</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {devices.map(d=>(
          <div key={d.ip} className="bg-zinc-900 border border-zinc-700 p-4 rounded-xl">
            <div className="text-lg">{d.type==="router"?"📡":"📱"}</div>
            <div className="font-bold">{d.name}</div>
            <div className="text-xs text-zinc-400">{d.vendor}</div>
            <div className="text-green-400 font-mono text-xs mt-2">{d.ip} - {d.latency}ms - {d.signal}%</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-zinc-500 mt-8">GitHub: github.com/Cmuri1o1/alfha-net-map | Backend local: FastAPI + Scapy</p>
    </main>
  );
}
