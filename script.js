// ============ DATA ============
const SKILLS = [
  { title: 'Backend', icon: 'server', items: ['.NET Framework','.NET Core','ASP.NET MVC','C#','Web APIs','REST APIs','Entity Framework','LINQ','Microservices','Swagger','JWT','OAuth','Hangfire'] },
  { title: 'Frontend', icon: 'layout', items: ['React','JavaScript','HTML5','CSS3','Bootstrap','jQuery','AJAX','Razor Views','Tailwind CSS','Velzon','Limitless'] },
  { title: 'Database & Server', icon: 'database', items: ['SQL Server','Stored Procedures','Query Optimization','Database Design','SQL Profiler','IIS Hosting'] },
  { title: 'AI & Productivity', icon: 'cpu', items: ['Claude Code','GitHub Copilot','Prompt Engineering','AI-Assisted Dev','Workflow Optimization','Vibe Coding'] },
  { title: 'Tools & DevOps', icon: 'git-branch', items: ['Git','GitHub','Azure DevOps','TFS','Agile','Scrum','Postman'] },
  { title: 'Libraries & Integrations', icon: 'puzzle', items: ['DevExpress','ag-Grid','DataTables','Google Maps API','Leaflet','Razorpay','ELMAH','SeriLog','Webhooks'] },
  { title: 'Core Expertise', icon: 'shield-check', items: ['SOLID Principles','Performance Optimization','System Architecture','Team Leadership','Code Review','Scalable Design','Enterprise Apps','Workflow Automation','API Integration'] },
];

const PROJECTS = [
  { title: 'HR Portal', tag: '.NET Core', icon: 'users-round', desc: 'Enterprise HR platform digitizing payroll, attendance, leave, recruitment, onboarding, and performance — with JWT/OAuth and automated workflows.', stack: ['.NET Core','SQL Server','JWT','REST APIs','Hangfire','Bootstrap'] },
  { title: 'Vendor Portal', tag: '.NET Core', icon: 'package', desc: 'Scalable vendor & procurement platform with multi-role auth, quotation/PO/invoice approval workflows, and real-time procurement analytics.', stack: ['.NET Core','SQL Server','REST APIs','JWT','DataTables'] },
  { title: 'Supply Chain Management', tag: '.NET Framework', icon: 'truck', desc: 'Enterprise SCM with workflow engine for procurement approvals, supplier coordination, inventory tracking and operational reporting.', stack: ['.NET Framework','ASP.NET MVC','SQL Server','jQuery','REST APIs'] },
  { title: 'Online Ordering Portal', tag: '.NET Framework', icon: 'shopping-cart', desc: 'Secure ordering platform handling cart, checkout, payment processing via Razorpay, inventory sync and order tracking.', stack: ['ASP.NET MVC','SQL Server','Razorpay','Bootstrap','jQuery'] },
  { title: 'Employee Tracking App', tag: '.NET Core', icon: 'map-pin', desc: 'Real-time field workforce tracking using Google Maps & Leaflet — live location, route visualization, and movement history dashboards.', stack: ['.NET Core','SQL Server','Google Maps','Leaflet','REST APIs'] },
  { title: 'Business Intelligence Dashboard', tag: '.NET Framework', icon: 'bar-chart-3', desc: 'Analytics platform aggregating multi-system data into interactive KPIs, drill-down charts, and role-based executive dashboards.', stack: ['ASP.NET MVC','SQL Server','Charts','jQuery','DataTables'] },
];

// ============ RENDER ============
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = SKILLS.map((s, i) => `
    <div class="skill-card" data-aos="fade-up" data-aos-delay="${i * 60}">
      <div class="flex items-center gap-3 mb-4">
        <div class="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center">
          <i data-lucide="${s.icon}" class="w-5 h-5 text-cyan-300"></i>
        </div>
        <h4>${s.title}</h4>
      </div>
      <div>${s.items.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = PROJECTS.map((p, i) => `
    <div class="project-card group" data-aos="fade-up" data-aos-delay="${(i % 2) * 100}">
      <div class="flex items-start justify-between mb-5">
        <div class="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center">
          <i data-lucide="${p.icon}" class="w-6 h-6 text-black"></i>
        </div>
        <span class="font-mono text-[10px] tracking-widest text-cyan-300 border border-cyan-400/30 px-2 py-1 rounded-full">${p.tag}</span>
      </div>
      <h3 class="font-[Space_Grotesk] text-2xl font-bold text-white">${p.title}</h3>
      <p class="text-slate-400 text-sm mt-3 leading-relaxed">${p.desc}</p>
      <div class="mt-5 flex flex-wrap gap-2">${p.stack.map(t => `<span class="tech-pill">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

// ============ INIT ============
window.addEventListener('load', () => {
  // Loader
  setTimeout(() => {
    const l = document.getElementById('loader');
    l.style.transition = 'opacity .6s';
    l.style.opacity = '0';
    setTimeout(() => l.remove(), 600);
  }, 900);

  renderSkills();
  renderProjects();

  AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 });
  lucide.createIcons();

  // GSAP hero
  gsap.to('.hero-fade', { opacity: 1, y: 0, duration: 1, stagger: 0.12, delay: 0.3, ease: 'power3.out' });
  gsap.from('.hero-title', { opacity: 0, y: 40, duration: 1.2, delay: 0.1, ease: 'power3.out' });

  initCounters();
});

// Cursor glow
const glow = document.getElementById('cursor-glow');
window.addEventListener('mousemove', (e) => {
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

// Glass card mouse track
document.addEventListener('mousemove', (e) => {
  document.querySelectorAll('.glass-card').forEach(card => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
});

// Scroll progress + navbar
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById('scroll-progress').style.width = pct + '%';
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile menu
document.getElementById('menu-btn')?.addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});
document.querySelectorAll('#mobile-menu a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.add('hidden');
}));

// Magnetic buttons
document.addEventListener('mousemove', (e) => {
  document.querySelectorAll('.magnetic').forEach(btn => {
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < 100) {
      btn.style.transform = `translate(${dx * 0.25}px, ${dy * 0.25}px)`;
    } else {
      btn.style.transform = '';
    }
  });
});

// Counters
function initCounters() {
  const els = document.querySelectorAll('[data-counter]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const el = en.target;
        const target = +el.dataset.counter;
        const dur = 1500;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min((t - start) / dur, 1);
          el.textContent = Math.floor(p * target) + (p === 1 ? '+' : '');
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
}

// Particles
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
resize();
addEventListener('resize', resize);
for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r: Math.random() * 1.5 + 0.5,
  });
}
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.fillStyle = 'rgba(34,211,238,0.5)';
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
  });
  // connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d = Math.hypot(dx, dy);
      if (d < 120) {
        ctx.strokeStyle = `rgba(34,211,238,${0.15 * (1 - d / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();
