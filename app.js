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
      nav_features: "FEATURES",
      nav_preview: "PREVIEW",
      hero_before: "A ",
      hero_after: " PLAYER FOR MACOS",
      download: "DOWNLOAD",
      release_checking: "CHECKING LATEST RELEASE…",
      release_latest: (tag, date) => `LATEST: ${tag} • ${date}`,
      release_soon: (ver) => `COMING SOON: v${ver} — publish your first Release`,
      coming_soon: "COMING SOON — WINDOWS",
      preview_title: "PREVIEW",
      preview_sub: "REAL APP SCREENSHOT — COMING SOON",
      preview_ph_title: "REAL SCREENSHOT COMING SOON",
      preview_ph_body: "A real capture of MAKP on macOS 26 Tahoe<br/>with Liquid Glass, sidebar and player will be here.",
      features_title: "BUILT FOR REAL COLLECTIONS",
      features_sub: "NOT FOR DEMOS. FOR TERABYTES OF VIDEO YOU ALREADY OWN.",
      feat1_title: "YOUR DISK, YOUR LIBRARY",
      feat1_desc: "NO IMPORT, NO DUPLICATION, NO WAITING. OPEN AND BROWSE YOUR FOLDERS AS THEY ARE.",
      feat2_title: "MKV WITHOUT EXCUSES",
      feat2_desc: "THE FORMAT EVERYONE AVOIDS IS OUR STARTING POINT. NO CONVERSION, NO PLUGINS.",
      feat3_title: "TRULY NATIVE",
      feat3_desc: "NO ELECTRON. STARTS IN MILLISECONDS, SMOOTH WITH THOUSANDS OF FILES, FEELS LIKE MACOS.",
      feat4_title: "PRIVATE BY DESIGN",
      feat4_desc: "NO ACCOUNT, NO CLOUD, NO TELEMETRY. YOUR COLLECTION NEVER LEAVES YOUR MAC.",
      cta_title: "READY TO TRY IT?",
      scroll: "SCROLL"
    },
    es: {
      title: "MAKP — A MKV PLAYER FOR MACOS",
      desc: "Makp: A MKV PLAYER FOR MACOS. Reproductor nativo con Liquid Glass, VLCKit, preview hover y playlists. Soporta MKV/MP4/MPG/AVI/MOV/WMV y más.",
      nav_features: "FUNCIONES",
      nav_preview: "VISTA PREVIA",
      hero_before: "A ",
      hero_after: " PLAYER FOR MACOS",
      // keep English hero for consistency but translate if needed: "UN REPRODUCTOR "
      download: "DESCARGAR",
      release_checking: "DETECTANDO ÚLTIMO RELEASE…",
      release_latest: (tag, date) => `ÚLTIMA: ${tag} • ${date}`,
      release_soon: (ver) => `PRÓXIMAMENTE: v${ver} — publica tu primera Release`,
      coming_soon: "COMING SOON — WINDOWS",
      preview_title: "VISTA PREVIA",
      preview_sub: "SCREENSHOT REAL DE LA APP — PRÓXIMAMENTE",
      preview_ph_title: "SCREENSHOT REAL PRÓXIMAMENTE",
      preview_ph_body: "Aquí irá una captura real de MAKP en macOS 26 Tahoe<br/>con Liquid Glass, sidebar y player.",
      features_title: "PENSADO PARA COLECCIONES REALES",
      features_sub: "NO PARA DEMOS. PARA TERAS DE VÍDEO QUE YA TIENES.",
      feat1_title: "TU DISCO, TU BIBLIOTECA",
      feat1_desc: "SIN IMPORTAR, SIN DUPLICAR, SIN ESPERAR. ABRE Y NAVEGA TUS CARPETAS TAL CUAL ESTÁN.",
      feat2_title: "MKV SIN PEROS",
      feat2_desc: "EL FORMATO QUE TODOS EVITAN ES NUESTRO PUNTO DE PARTIDA. SIN CONVERTIR, SIN PLUGINS.",
      feat3_title: "NATIVO HASTA LA MÉDULA",
      feat3_desc: "SIN ELECTRON. ARRANCA EN MILISEGUNDOS, FLUIDO CON MILES DE ARCHIVOS, SE SIENTE MACOS.",
      feat4_title: "PRIVADO POR DISEÑO",
      feat4_desc: "SIN CUENTA, SIN NUBE, SIN TELEMETRÍA. TU COLECCIÓN NO SALE DE TU MAC.",
      cta_title: "¿LISTO PARA PROBARLO?",
      scroll: "SCROLL"
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
      feat1_title: "你的磁盘，就是你的资料库",
      feat1_desc: "无需导入，无需复制，无需等待。直接打开并浏览你的文件夹。",
      feat2_title: "MKV 毫无妥协",
      feat2_desc: "人人回避的格式是我们的起点。无需转换，无需插件。",
      feat3_title: "真正原生",
      feat3_desc: "非 Electron，毫秒级启动，数千文件依然流畅，原生 macOS 体验。",
      feat4_title: "隐私设计",
      feat4_desc: "无需账号，无需云端，无任何遥测。你的收藏仅留在你的 Mac 上。",
      cta_title: "准备好试试了吗？",
      scroll: "滚动"
    },
    ru: {
      title: "MAKP — MKV ПЛЕЕР ДЛЯ MACOS",
      desc: "Makp: MKV плеер для macOS. Нативный Liquid Glass плеер с VLCKit, предпросмотром и плейлистами. Поддержка MKV/MP4/MPG/AVI/MOV/WMV и др.",
      nav_features: "ФУНКЦИИ",
      nav_preview: "ПРЕВЬЮ",
      hero_before: "",
      hero_after: " ПЛЕЕР ДЛЯ MACOS",
      download: "СКАЧАТЬ",
      release_checking: "ПРОВЕРКА ПОСЛЕДНЕГО РЕЛИЗА…",
      release_latest: (tag, date) => `ПОСЛЕДНИЙ: ${tag} • ${date}`,
      release_soon: (ver) => `СКОРО: v${ver} — опубликуйте первый Release`,
      coming_soon: "СКОРО — WINDOWS",
      preview_title: "ПРЕВЬЮ",
      preview_sub: "РЕАЛЬНЫЙ СКРИНШОТ ПРИЛОЖЕНИЯ — СКОРО",
      preview_ph_title: "РЕАЛЬНЫЙ СКРИНШОТ СКОРО",
      preview_ph_body: "Здесь будет реальный скриншот MAKP на macOS 26 Tahoe<br/>с Liquid Glass, боковой панелью и плеером.",
      features_title: "СОЗДАН ДЛЯ РЕАЛЬНЫХ КОЛЛЕКЦИЙ",
      features_sub: "НЕ ДЛЯ ДЕМО. ДЛЯ ТЕРАБАЙТОВ ВИДЕО, КОТОРЫЕ У ТЕБЯ УЖЕ ЕСТЬ.",
      feat1_title: "ТВОЙ ДИСК — ТВОЯ БИБЛИОТЕКА",
      feat1_desc: "БЕЗ ИМПОРТА, БЕЗ ДУБЛИРОВАНИЯ, БЕЗ ОЖИДАНИЯ. ОТКРЫВАЙ И ПРОСМАТРИВАЙ ПАПКИ КАК ЕСТЬ.",
      feat2_title: "MKV БЕЗ ОГОВОРОК",
      feat2_desc: "ФОРМАТ, КОТОРОГО ВСЕ ИЗБЕГАЮТ — НАША ОТПРАВНАЯ ТОЧКА. БЕЗ КОНВЕРТАЦИИ, БЕЗ ПЛАГИНОВ.",
      feat3_title: "ПО-НАСТОЯЩЕМУ НАТИВНЫЙ",
      feat3_desc: "БЕЗ ELECTRON. ЗАПУСК ЗА МИЛЛИСЕКУНДЫ, ПЛАВНОСТЬ С ТЫСЯЧАМИ ФАЙЛОВ, ОЩУЩАЕТСЯ КАК MACOS.",
      feat4_title: "ПРИВАТНОСТЬ ПО УМОЛЧАНИЮ",
      feat4_desc: "БЕЗ АККАУНТА, БЕЗ ОБЛАКА, БЕЗ ТЕЛЕМЕТРИИ. ТВОЯ КОЛЛЕКЦИЯ НЕ ПОКИДАЕТ ТВОЙ MAC.",
      cta_title: "ГОТОВ ПОПРОБОВАТЬ?",
      scroll: "ПРОКРУТКА"
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
  // --- Lang switcher ---
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> {
      applyI18n(btn.getAttribute('data-lang'));
      // re-check release text with new lang
      checkRelease();
    });
  });
  applyI18n(currentLang);

  // --- Reduce motion respect ---
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('.reveal').forEach(el=> el.classList.add('is-visible'));
  }
})();
