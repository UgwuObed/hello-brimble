const http = require("http");

const PORT = process.env.PORT || 3000;
const DEPLOY_ID = process.env.DEPLOYMENT_ID || "local";
const START_TIME = new Date().toISOString();

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hello from Brimble</title>
  <style>
    body {
      margin: 0; font-family: ui-monospace, monospace;
      background: #0d0d0d; color: #e2e8f0;
      display: flex; align-items: center; justify-content: center;
      min-height: 100vh;
    }
    .card {
      border: 1px solid #1e293b; border-radius: 8px;
      padding: 40px 48px; text-align: center; max-width: 480px;
    }
    h1 { color: #7c3aed; font-size: 2rem; margin: 0 0 8px; }
    p  { color: #64748b; font-size: 0.85rem; margin: 6px 0; }
    code { color: #22c55e; }
  </style>
</head>
<body>
  <div class="card">
    <h1>&#8982; Hello, Brimble</h1>
    <p>This container was built by <strong>Railpack</strong> and is running behind <strong>Caddy</strong>.</p>
    <p>Deployment: <code>${DEPLOY_ID}</code></p>
    <p>Started: <code>${START_TIME}</code></p>
    <p>Port: <code>${PORT}</code></p>
  </div>
</body>
</html>`;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`hello-brimble listening on port ${PORT}`);
});
