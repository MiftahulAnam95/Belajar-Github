(() => {
  const data = window.GithubLabData;
  const storageKey = "github-beginner-lab-editor-v1";
  const debugAttemptStorageKey = "github-beginner-lab-debug-attempts-v1";

  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const loadStoredMap = (key) => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "{}");
      return value && typeof value === "object" && !Array.isArray(value) ? value : {};
    } catch (error) {
      return {};
    }
  };

  const getActiveDebugChallenge = () => {
    const debugId = new URLSearchParams(window.location.search).get("debug");
    return data.debugChallenges.find((challenge) => challenge.id === debugId);
  };

  const saveDebugDraft = (challenge, code) => {
    if (!challenge) return;
    const attempts = loadStoredMap(debugAttemptStorageKey);
    attempts[challenge.id] = {
      ...(attempts[challenge.id] || {}),
      code,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(debugAttemptStorageKey, JSON.stringify(attempts));
  };

  const loadState = () => {
    const activeDebug = getActiveDebugChallenge();
    const base = { ...data.editorDefaults, ...loadStoredMap(storageKey) };
    if (!activeDebug) return base;

    const attempt = loadStoredMap(debugAttemptStorageKey)[activeDebug.id] || {};
    return {
      ...base,
      commands: attempt.code || activeDebug.code
    };
  };

  const saveState = () => {
    const activeDebug = getActiveDebugChallenge();
    const state = {
      commands: document.getElementById("commandsInput").value,
      readme: document.getElementById("readmeInput").value,
      pages: document.getElementById("pagesInput").value
    };
    localStorage.setItem(storageKey, JSON.stringify(state));
    saveDebugDraft(activeDebug, state.commands);
  };

  const markdownToHtml = (markdown) => {
    const lines = markdown.split(/\r?\n/);
    let inList = false;
    const html = [];
    lines.forEach((line) => {
      if (line.startsWith("# ")) {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        html.push(`<h1>${escapeHtml(line.slice(2))}</h1>`);
      } else if (line.startsWith("## ")) {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        html.push(`<h2>${escapeHtml(line.slice(3))}</h2>`);
      } else if (line.startsWith("- ")) {
        if (!inList) {
          html.push("<ul>");
          inList = true;
        }
        html.push(`<li>${escapeHtml(line.slice(2))}</li>`);
      } else if (line.trim()) {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        html.push(`<p>${escapeHtml(line)}</p>`);
      }
    });
    if (inList) html.push("</ul>");
    return html.join("");
  };

  const analyze = () => {
    const commands = document.getElementById("commandsInput").value;
    const readme = document.getElementById("readmeInput").value;
    const pages = document.getElementById("pagesInput").value;
    const combined = `${commands}\n${readme}\n${pages}`.toLowerCase();

    const checks = [
      { id: "init", label: "Repository lokal", ok: /git\s+(init|clone)/i.test(commands) },
      { id: "status", label: "Cek status", ok: /git\s+status/i.test(commands) },
      { id: "add", label: "Staging", ok: /git\s+add/i.test(commands) },
      { id: "commit", label: "Commit jelas", ok: /git\s+commit\s+-m\s+["'](feat|fix|docs|style|refactor|chore|test):/i.test(commands) },
      { id: "branch", label: "Branch main", ok: /git\s+branch\s+-m\s+main/i.test(commands) || /main/i.test(commands) },
      { id: "remote", label: "Remote origin", ok: /git\s+remote\s+add\s+origin/i.test(commands) },
      { id: "push", label: "Push GitHub", ok: /git\s+push/i.test(commands) },
      { id: "readme", label: "README lengkap", ok: /^#\s+/m.test(readme) && /fitur/i.test(readme) && /teknologi/i.test(readme) },
      { id: "demo", label: "Link demo", ok: /https?:\/\//i.test(readme) },
      { id: "pages", label: "Pages siap", ok: /github pages|settings|branch|root|deploy/i.test(pages) || combined.includes("pages") }
    ];

    const score = Math.round((checks.filter((check) => check.ok).length / checks.length) * 100);
    return { checks, score, commands, readme, pages };
  };

  const renderConsole = ({ checks, commands }) => {
    const lines = [];
    lines.push("$ simulasi workflow GitHub");
    if (/git\s+init/i.test(commands)) lines.push("Initialized empty Git repository.");
    if (/git\s+add/i.test(commands)) lines.push("Changes staged for commit.");
    if (/git\s+commit/i.test(commands)) lines.push("[main abc1234] commit berhasil dibuat.");
    if (/git\s+remote\s+add\s+origin/i.test(commands)) lines.push("Remote origin tersimpan.");
    if (/git\s+push/i.test(commands)) lines.push("Branch main terkirim ke GitHub.");
    if (!lines.some((line) => line.includes("commit berhasil"))) lines.push("Tip: gunakan git add lalu git commit -m untuk menyimpan riwayat.");
    lines.push("");
    lines.push("Checklist:");
    checks.forEach((check) => lines.push(`${check.ok ? "[x]" : "[ ]"} ${check.label}`));
    document.getElementById("editorConsole").textContent = lines.join("\n");
  };

  const renderPreview = () => {
    const result = analyze();
    document.getElementById("repoScore").textContent = `${result.score}%`;
    document.getElementById("repoPreview").innerHTML = `
      <div class="repo-card">
        <h3><i class="bi bi-github"></i> username/portfolio-web</h3>
        <p class="mb-0">Repository latihan dengan workflow GitHub profesional.</p>
        <div class="repo-grid">
          ${result.checks.map((check) => `<div class="repo-pill ${check.ok ? "done" : ""}"><i class="bi ${check.ok ? "bi-check-circle-fill" : "bi-circle"}"></i>${escapeHtml(check.label)}</div>`).join("")}
        </div>
        <div class="readme-preview">
          ${markdownToHtml(result.readme)}
        </div>
      </div>
    `;
    renderConsole(result);
    saveState();
  };

  const bindTabs = () => {
    document.querySelectorAll("[data-editor-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        const tab = button.dataset.editorTab;
        document.querySelectorAll("[data-editor-tab]").forEach((item) => item.classList.toggle("active", item === button));
        document.querySelectorAll("[data-editor-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.editorPanel === tab));
      });
    });
  };

  const reset = () => {
    localStorage.removeItem(storageKey);
    const activeDebug = getActiveDebugChallenge();
    const state = {
      ...data.editorDefaults,
      commands: activeDebug ? activeDebug.code : data.editorDefaults.commands
    };
    document.getElementById("commandsInput").value = state.commands;
    document.getElementById("readmeInput").value = state.readme;
    document.getElementById("pagesInput").value = state.pages;
    renderPreview();
    window.GithubLabLayout?.showToast(activeDebug ? "Draft debugging direset." : "Simulator direset.");
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.dataset.page !== "editor") return;
    const state = loadState();
    document.getElementById("commandsInput").value = state.commands;
    document.getElementById("readmeInput").value = state.readme;
    document.getElementById("pagesInput").value = state.pages;
    const activeDebug = getActiveDebugChallenge();
    if (activeDebug) {
      document.querySelector(".editor-title")?.insertAdjacentHTML("beforeend", ` <span class="editor-debug-badge">debug: ${escapeHtml(activeDebug.title)}</span>`);
    }

    bindTabs();
    document.getElementById("runEditor").addEventListener("click", () => {
      renderPreview();
      window.GithubLabLayout?.showToast("Workflow disimulasikan.");
    });
    document.getElementById("resetEditor").addEventListener("click", reset);
    ["commandsInput", "readmeInput", "pagesInput"].forEach((id) => document.getElementById(id).addEventListener("input", saveState));
    renderPreview();
  });
})();
