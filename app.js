// MAKP landing logic
(function(){
  const repo = "andyechc/makp-landing";
  const fallbackVersion = "1.1";
  const fallbackUrl = `https://github.com/${repo}/releases/latest/download/MAKP-${fallbackVersion}.dmg`;
  const fallbackReleases = `https://github.com/${repo}/releases`;
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
        // update sub label
        const sub = b.querySelector('.btn-sub');
        if(sub) sub.textContent = `DMG • ${ver} • ${size || '~45 MB'}`;
        else if(b.classList.contains('large')) b.textContent = `⬇ Descargar MAKP ${ver} para macOS`;
      });
      if(info) info.textContent = `Última: ${tag} • ${date} • ${j.assets?.length||0} archivo(s)`;
      if(banner) banner.hidden = true;
    }catch(e){
      // no release yet -> keep fallback but warn
      if(info) info.textContent = `Próximamente: v${fallbackVersion} — haz tu primera Release para activar descarga`;
      if(banner) banner.hidden = false;
      btns.forEach(b=>{
        // si no hay release, fallback a página de releases
        b.href = fallbackReleases;
        b.setAttribute('data-fallback','true');
      });
      console.warn('No releases:', e);
    }
  }

  // Intercept click if private
  btns.forEach(b=>{
    b.addEventListener('click', (ev)=>{
      if(b.getAttribute('data-fallback')==='true'){
        // allow navigate to releases, but show hint
        // no prevent, just analytics
        console.log('Redirect to releases — repo privado o sin release');
      }
    });
  });

  // Platform hint
  const ua = navigator.userAgent;
  const isMac = /Mac/.test(ua);
  if(!isMac && info){
    const hint = document.createElement('div');
    hint.style.cssText='margin-top:8px;font-size:12px;color:#9ca3af';
    hint.textContent='Estás en '+ ( /Windows/.test(ua) ? 'Windows' : /Linux/.test(ua) ? 'Linux' : 'otro sistema') +' — la descarga es solo para macOS.';
    info.parentElement.appendChild(hint);
  }

  checkRelease();
})();
