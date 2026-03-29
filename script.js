function runAgent() {
  const loader = document.getElementById("loader");
  const timeline = document.getElementById("timeline");
  const changes = document.getElementById("changes");

  timeline.innerHTML = "";
  changes.innerHTML = "";

  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");

    const data = [
      { v: 1, out: "Initial Decision", conf: 60 },
      { v: 2, out: "Refined Decision", conf: 78 },
      { v: 3, out: "Optimized Decision", conf: 92 }
    ];

    data.forEach(d => {
      timeline.innerHTML += `
        <div class="node">
          <h3>V${d.v}</h3>
          <p>${d.out}</p>
          <p>${d.conf}% Confidence</p>
        </div>
      `;
    });

    changes.innerHTML = `
      <h3>🔍 What Changed</h3>
      <p>V1 → V2: Improved reasoning using feedback</p>
      <p>V2 → V3: Increased confidence after refinement</p>
    `;
  }, 1200);
}