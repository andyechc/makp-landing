// MAKP — Dark landing: typewriter, parallax, scroll reveal, releases, i18n
(function(){
  const repo = "andyechc/makp-landing";
  const fallbackVersion = "1.1";
  const fallbackUrl = `https://github.com/${repo}/releases/latest/download/MAKP-${fallbackVersion}.dmg`;
  const fallbackReleases = `https://github.com/${repo}/releases`;

  // --- i18n ---
  const translations = {
    en: {
      title: "MAKP — A MKV PLAYER FOR MACOS",
      desc: "Makp: A MKV PLAYER FOR MACOS. Native Liquid Glass player with VLCKit, hover preview and playlists. Supports MKV/MP4/MPG/AVI/MOV/WMV and more.",
      nav_features: "Features",
      nav_preview: "Preview",
      hero_before: "A ",
      hero_after: " PLAYER FOR MACOS",
      download: "Download",
      release_checking: "Checking latest release…",
      release_latest: (tag, date) => `Latest: ${tag} • ${date}`,
      release_soon: (ver) => `Coming soon: v${ver} — publish your first Release`,
      coming_soon: "COMING SOON — WINDOWS",
      preview_title: "Preview",
      preview_sub: "Real app screenshot — Coming soon",
      preview_ph_title: "Real screenshot coming soon",
      preview_ph_body: "A real capture of MAKP on macOS 26 Tahoe<br/>with Liquid Glass, sidebar and player will be here.",
      features_title: "Built for real collections",
      features_sub: "Not for demos. For terabytes of video you already own.",
      feat1_title: "MKV, native on macOS",
      feat1_desc: "On macOS very few players handle MKV well. Makp plays it natively with integrated VLCKit, no conversion needed.",
      feat2_title: "Your library, untouched",
      feat2_desc: "No import, no duplication. Browse your drives and folders directly, no matter how large.",
      feat3_title: "Truly native",
      feat3_desc: "Built in SwiftUI for macOS. Instant launch and smooth even with thousands of files.",
      feat4_title: "Private by default",
      feat4_desc: "No account, no cloud, no telemetry. Your collection stays on your Mac.",
      cta_title: "Get started",
      scroll: "Scroll"
    },
    es: {
      title: "MAKP — A MKV PLAYER FOR MACOS",
      desc: "Makp: A MKV PLAYER FOR MACOS. Reproductor nativo con Liquid Glass, VLCKit, preview hover y playlists. Soporta MKV/MP4/MPG/AVI/MOV/WMV y más.",
      nav_features: "Funciones",
      nav_preview: "Vista previa",
      hero_before: "A ",
      hero_after: " PLAYER FOR MACOS",
      download: "Descargar",
      release_checking: "Detectando último release…",
      release_latest: (tag, date) => `Última: ${tag} • ${date}`,
      release_soon: (ver) => `Próximamente: v${ver} — publica tu primera Release`,
      coming_soon: "COMING SOON — WINDOWS",
      preview_title: "Vista previa",
      preview_sub: "Screenshot real de la app — Próximamente",
      preview_ph_title: "Screenshot real próximamente",
      preview_ph_body: "Aquí irá una captura real de MAKP en macOS 26 Tahoe<br/>con Liquid Glass, sidebar y player.",
      features_title: "Pensado para colecciones reales",
      features_sub: "Para quienes acumulan terabytes de vídeo y necesitan algo que simplemente funcione.",
      feat1_title: "MKV nativo en macOS",
      feat1_desc: "En macOS muy pocos reproductores gestionan MKV correctamente. Makp lo reproduce de forma nativa, sin convertir ni instalar nada más.",
      feat2_title: "Tu biblioteca, intacta",
      feat2_desc: "No importas ni duplicas. Navega directamente tus discos y carpetas, por grandes que sean.",
      feat3_title: "Rendimiento nativo",
      feat3_desc: "Construido en SwiftUI para macOS. Arranque instantáneo y fluidez con miles de archivos.",
      feat4_title: "Privado por defecto",
      feat4_desc: "Sin cuenta, sin nube y sin telemetría. Tu colección permanece en tu Mac.",
      cta_title: "Comenzar",
      scroll: "Scroll"
    },
    zh: {
      title: "MAKP — 适用于 MACOS 的 MKV 播放器",
      desc: "Makp：适用于 macOS 的 MKV 播放器。原生 Liquid Glass，支持 VLCKit，悬停预览和播放列表。支持 MKV/MP4/MPG/AVI/MOV/WMV 等。",
      nav_features: "功能",
      nav_preview: "预览",
      hero_before: "适用于 MACOS 的 ",
      hero_after: " 播放器",
      download: "下载",
      release_checking: "正在检测最新版本…",
      release_latest: (tag, date) => `最新：${tag} • ${date}`,
      release_soon: (ver) => `即将推出：v${ver} — 发布你的首个 Release`,
      coming_soon: "即将推出 — WINDOWS 版本",
      preview_title: "预览",
      preview_sub: "应用真实截图 — 敬请期待",
      preview_ph_title: "真实截图即将上线",
      preview_ph_body: "此处将展示 MAKP 在 macOS 26 Tahoe 上的<br/>Liquid Glass 侧边栏与播放器真实截图。",
      features_title: "为真实收藏而生",
      features_sub: "不是为了演示，而是为了你已拥有的 TB 级视频。",
      feat1_title: "MKV 原生支持",
      feat1_desc: "在 macOS 上，很少有播放器能良好支持 MKV。Makp 通过集成 VLCKit 原生播放，无需转换。",
      feat2_title: "资料库保持原样",
      feat2_desc: "无需导入或复制。直接浏览你的磁盘和文件夹，无论多大。",
      feat3_title: "真正原生",
      feat3_desc: "使用 SwiftUI 为 macOS 构建。毫秒级启动，数千文件依然流畅。",
      feat4_title: "隐私优先",
      feat4_desc: "无需账号，无需云端，无任何遥测。你的收藏仅留在你的 Mac 上。",
      cta_title: "开始使用",
      scroll: "滚动"
    },
    ru: {
      title: "MAKP — MKV ПЛЕЕР ДЛЯ MACOS",
      desc: "Makp: MKV плеер для macOS. Нативный Liquid Glass плеер с VLCKit, предпросмотром и плейлистами. Поддержка MKV/MP4/MPG/AVI/MOV/WMV и др.",
      nav_features: "Функции",
      nav_preview: "Превью",
      hero_before: "",
      hero_after: " плеер для macOS",
      download: "Скачать",
      release_checking: "Проверка последнего релиза…",
      release_latest: (tag, date) => `Последний: ${tag} • ${date}`,
      release_soon: (ver) => `Скоро: v${ver} — опубликуйте первый Release`,
      coming_soon: "Скоро — Windows",
      preview_title: "Превью",
      preview_sub: "Реальный скриншот приложения — скоро",
      preview_ph_title: "Реальный скриншот скоро",
      preview_ph_body: "Здесь будет реальный скриншот MAKP на macOS 26 Tahoe<br/>с Liquid Glass, боковой панелью и плеером.",
      features_title: "Создан для реальных коллекций",
      features_sub: "Не для демо. Для терабайтов видео, которые у тебя уже есть.",
      feat1_title: "Твой диск — твоя библиотека",
      feat1_desc: "Без импорта, без дублирования, без ожидания. Открывай и просматривай папки как есть.",
      feat2_title: "MKV без оговорок",
      feat2_desc: "Формат, которого все избегают — наша отправная точка. Без конвертации, без плагинов.",
      feat3_title: "По-настоящему нативный",
      feat3_desc: "Без Electron. Запуск за миллисекунды, плавность с тысячами файлов, ощущается как macOS.",
      feat4_title: "Приватность по умолчанию",
      feat4_desc: "Без аккаунта, без облака, без телеметрии. Твоя коллекция не покидает твой Mac.",
      cta_title: "Начать",
      scroll: "Прокрутка"
    }
  };
  let currentLang = localStorage.getItem('makp_lang') || (navigator.language.startsWith('zh') ? 'zh' : navigator.language.startsWith('ru') ? 'ru' : navigator.language.startsWith('es') ? 'es' : 'en');
  if(!translations[currentLang]) currentLang='en';

  function applyI18n(lang){
    const t = translations[lang];
    if(!t) return;
    currentLang = lang;
    localStorage.setItem('makp_lang', lang);
    document.documentElement.lang = lang;
    document.title = t.title;
    const metaDesc = document.querySelector('meta[name=\"description\"]');
    if(metaDesc) metaDesc.setAttribute('content', t.desc);
    const ogTitle = document.querySelector('meta[property=\"og:title\"]');
    if(ogTitle) ogTitle.setAttribute('content', t.title);
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const val = t[key];
      if(typeof val === 'string'){
        // allow <br> in preview body
        if(key.includes('body')) el.innerHTML = val;
        else el.textContent = val;
      }
    });
    // update scroll hint
    const scrollEl = document.querySelector('.scroll-hint span');
    if(scrollEl && t.scroll) scrollEl.textContent = t.scroll;
    // update lang buttons
    document.querySelectorAll('.lang-btn').forEach(b=>{
      b.classList.toggle('active', b.getAttribute('data-lang')===lang);
    });
    const curText = document.querySelector('.lang-current-text');
    if(curText){
      const map = {en:'EN', es:'ES', zh:'中文', ru:'RU'};
      curText.textContent = map[lang] || lang.toUpperCase();
    }
    // update release info if already fetched? keep as is, next fetch will use new lang
  }

  // expose for release checker
  window.__makp_i18n = {translations, applyI18n, getLang:()=>currentLang};

  // --- Typewriter MKV rotating ---
  const codecs = ["MKV","MP4","MPG","AVI","MOV","WMV","FLV","WEBM","M4V","TS","VOB","3GP"];
  const typedEl = document.getElementById('typed-codec');
  let codecIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let typeSpeed = 110;

  function typeTick(){
    if(!typedEl) return;
    const current = codecs[codecIdx];
    const isMKV = current === "MKV";
    if(!deleting){
      // typing
      typedEl.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      typedEl.classList.toggle('mkv', isMKV);
      if(charIdx === current.length){
        // pause at full word
        const pause = isMKV ? 2200 : 1400;
        deleting = false;
        setTimeout(()=>{ deleting = true; typeTick(); }, pause);
        return;
      }
      typeSpeed = isMKV ? 120 : 95;
    } else {
      // deleting
      typedEl.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if(charIdx === 0){
        deleting = false;
        codecIdx = (codecIdx + 1) % codecs.length;
        // special: after MKV cycle, subtle glow pulse
        if(codecs[codecIdx] === "MKV"){
          typedEl.parentElement.animate(
            [{boxShadow:'0 4px 16px rgba(153,51,230,0.2)'},{boxShadow:'0 8px 32px rgba(191,89,255,0.45)'},{boxShadow:'0 4px 16px rgba(153,51,230,0.2)'}],
            {duration:700, easing:'ease-out'}
          );
        }
        setTimeout(typeTick, 320);
        return;
      }
      typeSpeed = 55;
    }
    setTimeout(typeTick, typeSpeed);
  }
  // start with MKV already typed, then cycle
  if(typedEl){
    typedEl.textContent = "MKV";
    charIdx = 3;
    // wait a bit then start deleting
    setTimeout(()=>{ deleting = true; typeTick(); }, 2400);
  }

  // --- Scroll reveal ---
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const delay = parseInt(el.getAttribute('data-delay')||'0',10);
        setTimeout(()=> el.classList.add('is-visible'), delay);
        io.unobserve(el);
      }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  reveals.forEach(el=> io.observe(el));
  // also stagger features cards via delay already set

  // --- Parallax ---
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  let ticking = false;
  function updateParallax(){
    const scrollY = window.scrollY;
    parallaxEls.forEach(el=>{
      const speed = parseFloat(el.getAttribute('data-parallax'))||0;
      const rect = el.getBoundingClientRect();
      // only when in viewport
      if(rect.top < window.innerHeight && rect.bottom > 0){
        const y = scrollY * speed * 0.35;
        // for orbs we want subtle, for window we want translateY
        if(el.classList.contains('orb') || el.classList.contains('cta-bg') || el.classList.contains('window-wrap')){
          el.style.transform = `translate3d(0, ${y}px, 0)`;
        } else if(el.classList.contains('hero-logo-wrap')){
          el.style.transform = `translate3d(0, ${scrollY * 0.06}px, 0)`;
        } else {
          el.style.transform = `translate3d(0, ${y}px, 0)`;
        }
      }
    });
    ticking = false;
  }
  window.addEventListener('scroll', ()=>{
    if(!ticking){
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, {passive:true});
  // initial
  updateParallax();

  // subtle mouse parallax for hero
  const hero = document.querySelector('.hero');
  if(hero){
    hero.addEventListener('mousemove', (e)=>{
      const orbs = document.querySelectorAll('.orb');
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      orbs.forEach((orb,i)=>{
        const factor = (i+1)*0.3;
        orb.style.transform = `translate3d(${x*factor}px, ${y*factor}px, 0)`;
      });
    });
  }

  // --- Code copy ---
  const copyBtn = document.querySelector('.code-copy');
  if(copyBtn){
    copyBtn.addEventListener('click', ()=>{
      const code = document.getElementById('code-block');
      if(!code) return;
      navigator.clipboard.writeText(code.textContent).then(()=>{
        const prev = copyBtn.textContent;
        copyBtn.textContent = '✓ copiado';
        copyBtn.style.background = 'rgba(34,197,94,0.15)';
        copyBtn.style.borderColor = 'rgba(34,197,94,0.3)';
        setTimeout(()=>{ copyBtn.textContent = prev; copyBtn.style.background=''; copyBtn.style.borderColor=''; }, 1600);
      });
    });
  }

  // --- Releases ---
  const btns = [document.getElementById('download-btn'), document.getElementById('download-btn2')].filter(Boolean);
  const info = document.getElementById('release-info');
  const banner = document.getElementById('private-banner');

  async function checkRelease(){
    try{
      const r = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {headers:{'Accept':'application/vnd.github.v3+json'}});
      if(!r.ok) throw new Error(r.status);
      const j = await r.json();
      const tag = j.tag_name || `v${fallbackVersion}`;
      const ver = tag.replace(/^v/,'');
      const asset = (j.assets||[]).find(a=>a.name.endsWith('.dmg')) || (j.assets||[])[0];
      const url = asset ? asset.browser_download_url : `https://github.com/${repo}/releases/download/${tag}/MAKP-${ver}.dmg`;
      const date = j.published_at ? new Date(j.published_at).toLocaleDateString(currentLang==='en'?'en-US':currentLang==='zh'?'zh-CN':currentLang==='ru'?'ru-RU':'es-ES',{year:'numeric',month:'short',day:'numeric'}) : '';
      btns.forEach(b=>{
        b.href = url;
        const sub = b.querySelector('.btn-sub');
        if(sub) sub.textContent = `DMG • ${ver}`;
        else if(b.classList.contains('large')) {
          const t = translations[currentLang]||translations.en;
          b.innerHTML = `<span class="btn-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v12m0 0l-5-5m5 5l5-5M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span> ${t.download}`;
        }
      });
      const t = translations[currentLang]||translations.en;
      if(info) info.textContent = t.release_latest(tag, date);
      if(banner) banner.hidden = true;
    }catch(e){
      const t = translations[currentLang]||translations.en;
      if(info) info.textContent = t.release_soon(fallbackVersion);
      if(banner) banner.hidden = false;
      btns.forEach(b=>{
        b.href = fallbackReleases;
        b.setAttribute('data-fallback','true');
      });
      console.warn('No releases:', e);
    }
  }
  btns.forEach(b=>{
    b.addEventListener('click', ()=>{
      if(b.getAttribute('data-fallback')==='true'){
        console.log('Redirect to releases — sin release');
      }
    });
  });
  const ua = navigator.userAgent;
  const isMac = /Mac/.test(ua);
  if(!isMac && info){
    const hint = document.createElement('div');
    hint.style.cssText='margin-top:8px;font-size:12px;color:#71717A';
    hint.textContent='Estás en '+ ( /Windows/.test(ua) ? 'Windows' : /Linux/.test(ua) ? 'Linux' : 'otro sistema') +' — la descarga es solo para macOS.';
    info.parentElement.appendChild(hint);
  }
  checkRelease();

  // --- Smooth scroll offset for nav ---
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      if(id.length>1){
        const target = document.querySelector(id);
        if(target){
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({top, behavior:'smooth'});
        }
      }
    });
  });

  // --- Nav glass on scroll ---
  const nav = document.getElementById('nav');
  if(nav){
    const onNavScroll = ()=> nav.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onNavScroll, {passive:true});
    onNavScroll();
  }
  // --- Nav toggle (mobile) ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if(navToggle && navLinks){
    navToggle.addEventListener('click', (e)=>{
      e.stopPropagation();
      const open = navToggle.getAttribute('aria-expanded')==='true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navLinks.classList.toggle('open', !open);
      if(!open) navLinks.querySelector('a')?.focus();
    });
    navLinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
      navToggle.setAttribute('aria-expanded','false');
      navLinks.classList.remove('open');
    }));
    document.addEventListener('click', (e)=>{
      if(!navToggle.contains(e.target) && !navLinks.contains(e.target)){
        navToggle.setAttribute('aria-expanded','false');
        navLinks.classList.remove('open');
      }
    });
  }
  // --- Header logo: hidden until hero logo leaves viewport (fade) ---
  const navLogo = document.getElementById('navLogo');
  const heroLogoWrap = document.querySelector('.hero-logo-wrap');
  if(navLogo && heroLogoWrap){
    navLogo.classList.add('is-hidden');
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting) navLogo.classList.add('is-hidden');
        else navLogo.classList.remove('is-hidden');
      });
    }, {threshold:0, rootMargin:'-40px 0px 0px 0px'});
    obs.observe(heroLogoWrap);
  }
  // --- Lang dropdown custom ---
  const langSwitcher = document.getElementById('langSwitcher');
  const langCurrent = document.getElementById('langCurrent');
  const langMenu = document.getElementById('langMenu');
  if(langCurrent && langMenu){
    langCurrent.addEventListener('click', (e)=>{
      e.stopPropagation();
      const isHidden = langMenu.hasAttribute('hidden');
      if(isHidden){
        langMenu.removeAttribute('hidden');
        langCurrent.setAttribute('aria-expanded','true');
        langSwitcher.classList.add('open');
      } else {
        langMenu.setAttribute('hidden','');
        langCurrent.setAttribute('aria-expanded','false');
        langSwitcher.classList.remove('open');
      }
    });
    document.addEventListener('click', (e)=>{
      if(!langSwitcher.contains(e.target)){
        langMenu.setAttribute('hidden','');
        langCurrent.setAttribute('aria-expanded','false');
        langSwitcher.classList.remove('open');
      }
    });
  }
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> {
      applyI18n(btn.getAttribute('data-lang'));
      checkRelease();
      if(langMenu){
        langMenu.setAttribute('hidden','');
        langCurrent.setAttribute('aria-expanded','false');
        langSwitcher.classList.remove('open');
      }
    });
  });
  applyI18n(currentLang);

  // --- Easter Eggs: Matroska + Mac (Makp = Mac + Matroska) ---
  const egg = document.getElementById('matroskaEgg');
  const eggClose = document.getElementById('eggClose');
  function openEgg(){
    if(!egg) return;
    egg.removeAttribute('hidden');
    document.body.style.overflow='hidden';
  }
  function closeEgg(){
    if(!egg) return;
    egg.setAttribute('hidden','');
    document.body.style.overflow='';
  }
  if(eggClose) eggClose.addEventListener('click', closeEgg);
  egg?.querySelector('.egg-backdrop')?.addEventListener('click', closeEgg);
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && egg && !egg.hasAttribute('hidden')) closeEgg(); });
  let logoClicks=0, logoTimer;
  document.querySelectorAll('.hero-logo-wrap, .hero-logo, #navLogo, #navLogo img, .brand').forEach(el=>{
    el.style.cursor='pointer';
    el.addEventListener('click', (e)=>{
      if(el.classList.contains('brand') && logoClicks<2) return;
      e.preventDefault(); e.stopPropagation();
      logoClicks++; clearTimeout(logoTimer); logoTimer=setTimeout(()=>logoClicks=0,1500);
      // tremble indicating interaction
      el.animate([
        {transform:'translateX(0)'},
        {transform:'translateX(-4px)'},
        {transform:'translateX(4px)'},
        {transform:'translateX(-3px)'},
        {transform:'translateX(3px)'},
        {transform:'translateX(0)'}
      ],{duration:320, easing:'ease-out'});
      el.animate([{transform:'scale(1)'},{transform:'scale(0.97)'},{transform:'scale(1)'}],{duration:220});
      if(logoClicks>=3){
        logoClicks=0;
        openEgg();
        console.log('%c Matryoshka + Player = Makp — Makp = Mac + Player ', 'background:linear-gradient(90deg,#BF59FF,#9933E6);color:#fff;padding:6px 12px;border-radius:999px;font-weight:800');
      }
    });
  });
  let keyBuffer="";
  document.addEventListener('keydown', e=>{
    if(e.key.length===1) keyBuffer+=e.key.toLowerCase();
    else if(e.key==='Backspace') keyBuffer=keyBuffer.slice(0,-1);
    keyBuffer=keyBuffer.slice(-14);
    if(keyBuffer.includes('matryoshka')){
      openEgg(); keyBuffer="";
      console.log('%c Matryoshka + Player = Makp — Makp = Mac + Player ', 'background:linear-gradient(90deg,#BF59FF,#7C3AED);color:#fff;padding:4px 10px;border-radius:8px;font-weight:700');
    } else if(keyBuffer.endsWith('makp')){
      document.querySelector('.hero-makp')?.animate([{transform:'scale(1)'},{transform:'scale(1.08)'},{transform:'scale(1)'}],{duration:320});
      openEgg(); keyBuffer="";
    } else if(keyBuffer.endsWith('mac')){
      const m = document.querySelector('.hero-makp');
      if(m) m.animate([{textShadow:'0 0 0 transparent'},{textShadow:'0 0 16px rgba(191,89,255,0.6)'},{textShadow:'0 0 0 transparent'}],{duration:600});
    }
  });
  const typedWrapEl = document.querySelector('.typed-wrap');
  if(typedWrapEl){
    typedWrapEl.title='Matryoshka Video — click me';
    typedWrapEl.style.cursor='pointer';
    typedWrapEl.addEventListener('click', ()=> openEgg());
  }
  console.log('%c Makp easter egg: escribe "matryoshka" / "makp" o haz 3 clicks en el logo ', 'color:#BF59FF;font-weight:700');
  console.log('%c Matryoshka + Player = Makp — Makp = Mac + Player ', 'color:#A1A1AA;font-style:italic');

  // --- Reduce motion respect ---
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('.reveal').forEach(el=> el.classList.add('is-visible'));
  }
})();
