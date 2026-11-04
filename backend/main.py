from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import asyncio, random
from datetime import datetime

app = FastAPI(title="ALFHA NET MAP API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

DEVICES = [
    {"ip":"192.168.1.1","mac":"AA:BB:CC:DD:01:00","vendor":"TP-Link","name":"Router","type":"router"},
    {"ip":"192.168.1.101","mac":"4C:32:75:9A:10:01","vendor":"Phone-Maker","name":"Phone Claudio","type":"phone"},
    {"ip":"192.168.1.105","mac":"8C:85:90:12:34:56","vendor":"Laptop-Maker","name":"Notebook Dev","type":"laptop"},
]

@app.get("/api/scan")
async def scan_network():
    await asyncio.sleep(1)
    for d in DEVICES:
        d["latency"] = random.randint(2,85)
        d["signal"] = random.randint(45,99)
        d["last_seen"] = datetime.now().isoformat()
    return {"network":"ALFHA-WIFI","devices":DEVICES}

@app.get("/")
def root():
    return {"status":"ALFHA NET MAP running"}
