(function(){
  var s = document.createElement('style');
  s.textContent = `
    .hacker-alert {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 420px;
      background: rgba(0,0,0,0.92);
      border: 2px solid #00ff41;
      border-radius: 8px;
      box-shadow: 0 0 60px #00ff4180, inset 0 0 30px #00ff4122;
      color: #00ff41;
      font-family: 'Courier New', monospace;
      padding: 0;
      z-index: 999999;
      overflow: hidden;
      opacity: 0;
      animation: popup 0.6s forwards;
    }
    .alert-head {
      background: #00ff41;
      color: #000;
      padding: 12px;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 3px;
      border-bottom: 2px solid #00cc33;
    }
    .alert-body {
      padding: 24px 20px;
      font-size: 18px;
      line-height: 1.6;
      text-align: center;
      text-shadow: 0 0 6px #00ff41;
    }
    .blink {
      color: #ff004d;
      font-weight: bold;
      animation: blink 1.4s infinite;
    }
    
    .msg {
      color: #ff004d;
      font-weight: bold;
    }
    .alert-foot {
      text-align: right;
      padding: 10px 16px;
      font-size: 13px;
      background: rgba(0,255,65,0.08);
      border-top: 1px solid #00ff4122;
    }
    @keyframes popup {
      0%   { opacity:0; transform: translate(-50%, -60%) scale(0.7); }
      70%  { transform: translate(-50%, -50%) scale(1.05); }
      100% { opacity:1; transform: translate(-50%, -50%) scale(1); }
    }
    @keyframes blink {
      0%,100% { opacity:1; }
      50%     { opacity:0.2; }
    }
  `;
  document.head.appendChild(s);

  var d = document.createElement('div');
  d.className = 'hacker-alert';
  d.innerHTML = `
    <div class="alert-head">SYSTEM COMPROMISED</div>
    <div class="alert-body">
      EXECUTION SUCCESSFUL<br>
      <span class="blink">[!] ACCESS GRANTED [!]</span><br>
      Payload delivered — 2026 edition
      <span class="msg">[!] Vulnerability Assessment  Found by JavaScript Cross-Site Scripting (XSS) [!]</span><br>
    </div>
    <div class="alert-foot">0xDEADBEEF • root@kali</div>
  `;
  document.body.appendChild(d);

  // Optional: auto-remove after 6 seconds
  setTimeout(function(){
    d.style.opacity = '0';
    d.style.transition = 'opacity 0.8s';
    setTimeout(() => d.remove(), 10000);
  }, 10000);
})();
