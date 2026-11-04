"use client";
import { useState, useEffect } from "react";
type Device = { ip: string; name: string; vendor: string; type: string; latency?: number; signal?: number; };
export default function Home() {
  const [devices, setDevices] = useState<Device[]>([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/scan").then(r=>r.json()).then(d=>setDevices(d.devices));
  }, []);
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-green-400">ALFHA NET MAP</h1>
      <p className="text-zinc-400 mb-6">Live Wi-Fi Mapper - {devices.length} devices</p>
      <div className="grid grid-cols-3 gap-3">
        {devices.map(d=>(
          <div key={d.ip} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <div className="font-bold">{d.name}</div>
            <div className="text-xs text-zinc-400">{d.vendor}</div>
            <div className="text-green-400 font-mono text-xs mt-2">{d.ip} - {d.latency}ms</div>
          </div>
        ))}
      </div>
    </main>
  );
}
