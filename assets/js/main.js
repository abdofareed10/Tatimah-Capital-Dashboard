// Sidebar toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("sidebarToggle"); // get menu item for click event

  if (menu) {
    menu.addEventListener("click", function () {
      expandSidebar();
      showHover();
    });
  }

  // Show stored sidebar state on page load
  showStoredSidebar();
});

/**
 * expand sidebar if it is short, otherwise collapse it
 */
function expandSidebar() {
  const body = document.querySelector("body");
  const sidebar = document.getElementById("sidebar");
  const sidebarIcon = document.getElementById("sidebarIcon");

  body.classList.toggle("short");

  if (body.classList.contains("short")) {
    // Collapse sidebar
    sidebar.classList.remove("w-75");
    sidebar.classList.add("w-24");

    // Update icon to show expand arrow
    sidebarIcon.innerHTML = `
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        `;

    localStorage.setItem("keepSidebar", "true");
  } else {
    // Expand sidebar
    sidebar.classList.remove("w-24");
    sidebar.classList.add("w-75");

    // Update icon to show collapse arrow
    sidebarIcon.innerHTML = `
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        `;

    localStorage.removeItem("keepSidebar");
  }
}

/**
 * show hover effect on sidebar - only when collapsed
 */
function showHover() {
  const sidebarLinks = document.querySelectorAll(
    "nav a, .user-avatar-section a"
  );

  sidebarLinks.forEach(function (item) {
    // Remove existing event listeners by cloning and replacing
    const newItem = item.cloneNode(true);
    item.parentNode.replaceChild(newItem, item);

    newItem.addEventListener("mouseover", function () {
      // Only show tooltip if sidebar is collapsed
      if (document.querySelector("body").classList.contains("short")) {
        const text = newItem.querySelector(".sidebar-text");
        if (text) {
          text.classList.add("hover");
          text.style.display = "block";
          text.style.position = "absolute";
          text.style.left = "100%";
          text.style.top = "50%";
          text.style.transform = "translateY(-50%)";
          text.style.background = "#111122";
          text.style.padding = "8px 12px";
          text.style.borderRadius = "6px";
          text.style.marginLeft = "8px";
          text.style.whiteSpace = "nowrap";
          text.style.zIndex = "1000";
          text.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          text.style.color = "white";
          text.style.fontSize = "14px";
          text.style.fontWeight = "500";
        }
      }
    });

    newItem.addEventListener("mouseout", function () {
      const text = newItem.querySelector(".sidebar-text");
      if (text) {
        text.classList.remove("hover");
        text.style.display = "";
        text.style.position = "";
        text.style.left = "";
        text.style.top = "";
        text.style.transform = "";
        text.style.background = "";
        text.style.padding = "";
        text.style.borderRadius = "";
        text.style.marginLeft = "";
        text.style.whiteSpace = "";
        text.style.zIndex = "";
        text.style.boxShadow = "";
        text.style.color = "";
        text.style.fontSize = "";
        text.style.fontWeight = "";
      }
    });
  });
}

/**
 * check local storage for keep sidebar
 */
function showStoredSidebar() {
  if (localStorage.getItem("keepSidebar") === "true") {
    const body = document.querySelector("body");
    const sidebar = document.getElementById("sidebar");
    const sidebarIcon = document.getElementById("sidebarIcon");

    body.classList.add("short");

    // Collapse sidebar
    sidebar.classList.remove("w-75");
    sidebar.classList.add("w-24");

    // Update icon to show expand arrow
    sidebarIcon.innerHTML = `
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        `;

    showHover();
  }
}

// Add CSS for smooth transitions and hover effects
const style = document.createElement("style");
style.textContent = `
    #sidebar {
        transition: width 0.3s ease-in-out;
    }
    
    body.short #sidebar {
        width: 6rem !important;
    }
    
    body.short .sidebar-text {
        display: none !important;
    }
    
    /* Only show hover tooltip when sidebar is collapsed */
    body.short .sidebar-text.hover {
        display: block !important;
        position: absolute !important;
        left: 100% !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        background: #111122 !important;
        padding: 8px 12px !important;
        border-radius: 6px !important;
        margin-left: 8px !important;
        white-space: nowrap !important;
        z-index: 1000 !important;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
        color: white !important;
        font-size: 14px !important;
        font-weight: 500 !important;
    }
    
    /* Make nav items relative for hover positioning */
    nav a, .user-avatar-section a {
        position: relative;
    }
    
    /* Ensure proper spacing in collapsed state */
    body.short nav a {
        justify-content: center;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
    }
    
    /* User avatar section styling for collapsed state */
    body.short .user-avatar-section {
        padding: 0.5rem !important;
    }
    
    body.short .user-avatar-section .flex {
        justify-content: center !important;
        align-items: center !important;
        padding: 0.75rem !important;
        gap: 0 !important;
    }
    
    /* Hide avatar text when collapsed */
    body.short .user-avatar-section .sidebar-text {
        display: none !important;
    }
    
    /* Ensure avatar image is properly sized and centered when collapsed */
    body.short .user-avatar-section img {
        display: block !important;
        width: 2.5rem !important;
        height: 2.5rem !important;
        margin: 0 auto !important;
    }
    
    /* Remove extra spacing elements when collapsed */
    body.short .user-avatar-section .text-neutral-400 {
        display: none !important;
    }

    body.short .sidebar-link {
        position: relative;
    }
    
    body.short .sidebar-tooltip {
        display: none;
        position: absolute;
        left: 130%;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        color: #111122;
        padding: 18px 38px;
        border-radius: 18px;
        font-size: 1.35rem;
        font-weight: 700;
        white-space: nowrap;
        z-index: 100;
        box-shadow: 0 6px 24px rgba(0,0,0,0.10);
        border: none;
        letter-spacing: 0.01em;
        transition: opacity 0.15s;
        display: flex;
        align-items: center;
    }
    
    body.short .sidebar-link:hover .sidebar-tooltip {
        display: flex;
        opacity: 1;
    }
    
    body.short .sidebar-tooltip::before {
        content: "";
        position: absolute;
        left: -18px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-top: 14px solid transparent;
        border-bottom: 14px solid transparent;
        border-right: 18px solid #fff;
    }
`;
document.head.appendChild(style);

// Make functions globally available
window.expandSidebar = expandSidebar;
window.showHover = showHover;
window.showStoredSidebar = showStoredSidebar;
// Sidebar toggle logic for mobile/tablet (from left, only expanding, with overlay)
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("sidebar-overlay");
  if (window.innerWidth <= 1024) {
    var isOpen = sidebar.classList.toggle("open");
    overlay.style.display = isOpen ? "block" : "none";
  }
}
// Hide sidebar when clicking overlay (mobile/tablet)
document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("sidebar-overlay");
  if (overlay) {
    overlay.addEventListener("click", function () {
      sidebar.classList.remove("open");
      overlay.style.display = "none";
    });
  }
  // Hide sidebar on navigation click (mobile/tablet)
  var sidebarLinks = sidebar.querySelectorAll("a");
  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 1024) {
        sidebar.classList.remove("open");
        overlay.style.display = "none";
      }
    });
  });
});

// ========== INVESTMENT DETAILS DRAWER LOGIC ==========
function openInvestmentDrawer() {
  document.getElementById("investment-details-overlay").style.display = "block";
  document.getElementById("investment-details-drawer").style.display = "flex";
  setTimeout(function () {
    document.getElementById("investment-details-overlay").style.opacity = "1";
    document.getElementById("investment-details-drawer").style.transform =
      "translateX(0)";
  }, 10);
  document.body.style.overflow = "hidden";
}
function closeInvestmentDrawer() {
  document.getElementById("investment-details-overlay").style.opacity = "0";
  document.getElementById("investment-details-drawer").style.transform =
    "translateX(100%)";
  setTimeout(function () {
    document.getElementById("investment-details-overlay").style.display =
      "none";
    document.getElementById("investment-details-drawer").style.display = "none";
    document.body.style.overflow = "";
  }, 300);
}
document.addEventListener("DOMContentLoaded", function () {
  // Overlay click closes drawer
  var overlay = document.getElementById("investment-details-overlay");
  if (overlay) overlay.onclick = closeInvestmentDrawer;
  // Attach open handler to all 'View Details' buttons in Investing Boxes
  var viewBtns = document.querySelectorAll(
    ".investing-box-card .drawer-action-btn, .investing-box-card .view-details-btn"
  );
  viewBtns.forEach(function (btn) {
    btn.onclick = openInvestmentDrawer;
  });
  // Insight card click logic
  var insightCards = document.querySelectorAll(".insight-card");
  insightCards.forEach(function (card) {
    card.addEventListener("click", function () {
      insightCards.forEach(function (c) {
        c.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
  // Chart.js mini charts logic
  if (window.Chart) {
    function randomData(len, min, max) {
      return Array.from(
        { length: len },
        () => Math.floor(Math.random() * (max - min + 1)) + min
      );
    }
    var chartConfigs = [
      {
        id: "miniChart1",
        color: "#19d7c1",
        bg: "rgba(25,215,193,0.18)",
        min: 20,
        max: 80,
      },
      {
        id: "miniChart2",
        color: "#d92d20",
        bg: "rgba(217,45,32,0.18)",
        min: 10,
        max: 60,
      },
      {
        id: "miniChart3",
        color: "#19d7c1",
        bg: "rgba(25,215,193,0.18)",
        min: 40,
        max: 120,
      },
      {
        id: "miniChart4",
        color: "#d92d20",
        bg: "rgba(217,45,32,0.18)",
        min: 30,
        max: 100,
      },
    ];
    chartConfigs.forEach(function (cfg) {
      var el = document.getElementById(cfg.id);
      if (el) {
        new Chart(el.getContext("2d"), {
          type: "line",
          data: {
            labels: Array(8).fill(""),
            datasets: [
              {
                data: randomData(8, cfg.min, cfg.max),
                borderColor: cfg.color,
                backgroundColor: function (ctx) {
                  var gradient = ctx.chart.ctx.createLinearGradient(
                    0,
                    0,
                    0,
                    48
                  );
                  gradient.addColorStop(0, cfg.bg);
                  gradient.addColorStop(1, cfg.bg.replace(/0\.18/, "0"));
                  return gradient;
                },
                borderWidth: 2,
                pointRadius: 0,
                fill: true,
                tension: 0.5,
              },
            ],
          },
          options: {
            responsive: false,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false },
            },
            scales: { x: { display: false }, y: { display: false } },
          },
        });
      }
    });
  }
});

// ========== LOGOUT MODAL LOGIC ==========
function showLogoutModal() {
  // If modal already exists, just show it
  let modal = document.getElementById("logout-modal");
  let overlay = document.getElementById("logout-modal-overlay");
  if (modal && overlay) {
    modal.style.display = "flex";
    overlay.style.display = "block";
    setTimeout(() => {
      overlay.style.opacity = "1";
      modal.style.opacity = "1";
    }, 10);
    document.body.style.overflow = "hidden";
    return;
  }
  // Create overlay
  overlay = document.createElement("div");
  overlay.id = "logout-modal-overlay";
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(41,40,82,0.18)";
  overlay.style.zIndex = "2000";
  overlay.style.transition = "opacity 0.2s";
  overlay.style.opacity = "0";
  document.body.appendChild(overlay);
  // Create modal
  modal = document.createElement("div");
  modal.id = "logout-modal";
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.background = "#fff";
  modal.style.borderRadius = "20px";
  modal.style.boxShadow = "0 8px 32px 0 rgba(41, 40, 82, 0.12)";
  modal.style.zIndex = "2001";
  modal.style.display = "flex";
  modal.style.flexDirection = "column";
  modal.style.alignItems = "center";
  modal.style.padding = "40px 32px 32px 32px";
  modal.style.minWidth = "320px";
  modal.style.maxWidth = "95vw";
  modal.style.opacity = "0";
  modal.innerHTML = `
    <button id="logout-modal-close" style="position:absolute;top:18px;right:18px;background:none;border:none;font-size:1.8rem;color:#d92d20;cursor:pointer;line-height:1;z-index:2;">
      &times;
    </button>
    <div style="background:#FDECEC;border-radius:16px;width:72px;height:72px;display:flex;align-items:center;justify-content:center;margin-bottom:24px;">
      <span class="material-icons" style="font-size:40px;color:#d92d20;">logout</span>
    </div>
    <div style="font-family:'IBM Plex Sans',sans-serif;font-size:1.15rem;font-weight:500;color:#23272f;text-align:center;margin-bottom:32px;">Are you willing to logout your account?</div>
    <div style="display:flex;gap:16px;width:100%;justify-content:center;">
      <button id="logout-modal-cancel" style="flex:1;padding:12px 0;border-radius:10px;border:1.5px solid #d92d20;background:#fff;color:#d92d20;font-weight:600;font-size:1rem;transition:background 0.2s;">Cancel</button>
      <button id="logout-modal-confirm" style="flex:1;padding:12px 0;border-radius:10px;border:none;background:#d92d20;color:#fff;font-weight:600;font-size:1rem;transition:background 0.2s;">Log Out</button>
    </div>
  `;
  document.body.appendChild(modal);
  setTimeout(() => {
    overlay.style.opacity = "1";
    modal.style.opacity = "1";
  }, 10);
  document.body.style.overflow = "hidden";
  // Close logic
  function closeModal() {
    overlay.style.opacity = "0";
    modal.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
      modal.style.display = "none";
      document.body.style.overflow = "";
    }, 200);
  }
  overlay.onclick = closeModal;
  document.getElementById("logout-modal-close").onclick = closeModal;
  document.getElementById("logout-modal-cancel").onclick = closeModal;
  document.getElementById("logout-modal-confirm").onclick = function () {
    window.location.href = "login.html";
  };
  // Escape key closes modal
  function escListener(e) {
    if (e.key === "Escape") closeModal();
  }
  document.addEventListener("keydown", escListener);
  // Remove listener when modal closes
  overlay.addEventListener("transitionend", function handler() {
    if (overlay.style.opacity === "0") {
      document.removeEventListener("keydown", escListener);
      overlay.removeEventListener("transitionend", handler);
    }
  });
}
// Attach to all sidebar logout links (robust selector)
function attachLogoutModalToSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (!sidebar) return;
  var links = sidebar.querySelectorAll("a");
  links.forEach(function (link) {
    // Remove any previous click listeners
    link.replaceWith(link.cloneNode(true));
  });
  links = sidebar.querySelectorAll("a");
  links.forEach(function (link) {
    if (link.textContent && link.textContent.toLowerCase().includes("logout")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        showLogoutModal();
      });
    }
  });
}
document.addEventListener("DOMContentLoaded", attachLogoutModalToSidebar);
