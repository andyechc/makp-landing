// MAKP — Dark landing: typewriter, parallax, scroll reveal, releases
(function(){
  const repo = "andyechc/makp-landing";
  const fallbackVersion = "1.1";
  const fallbackUrl = `https://github.com/${repo}/releases/latest/download/MAKP-${fallbackVersion}.dmg`;
  const fallbackReleases = `https://github.com/${repo}/releases`;

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
      const size = asset ? (asset.size ? (asset.size/1024/1024).toFixed(0)+' MB' : '') : '';
      const date = j.published_at ? new Date(j.published_at).toLocaleDateString('es-ES',{year:'numeric',month:'short',day:'numeric'}) : '';
      btns.forEach(b=>{
        b.href = url;
        const sub = b.querySelector('.btn-sub');
        if(sub) sub.textContent = `DMG • ${ver} • ${size || '~45 MB'}`;
        else if(b.classList.contains('large')) b.innerHTML = `<span class="btn-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v12m0 0l-5-5m5 5l5-5M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span> Descargar MAKP ${ver} para macOS`;
      });
      if(info) info.textContent = `Última: ${tag} • ${date}`;
      if(banner) banner.hidden = true;
    }catch(e){
      if(info) info.textContent = `Próximamente: v${fallbackVersion} — haz tu primera Release`;
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

  // --- Reduce motion respect ---
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('.reveal').forEach(el=> el.classList.add('is-visible'));
  }
})();
