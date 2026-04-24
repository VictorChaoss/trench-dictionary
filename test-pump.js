async function test() {
  const res = await fetch("https://frontend-api.pump.fun/coins/98Mrhop3Fd6pCuSWe3Hbb8FuhKBWnh1op9P9iZQQpump", {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      "Accept": "application/json"
    }
  });
  console.log("Status:", res.status);
  const text = await res.text();
  console.log("Body:", text.substring(0, 500));
}

test();
