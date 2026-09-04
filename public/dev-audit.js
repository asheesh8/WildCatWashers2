/* Dev-only. Exposes window.contrastAudit() — see tools/contrast-audit.js for the
   annotated source. Loaded only when import.meta.env.DEV is true. */
(() => {
  const lum = ([r,g,b]) => { const f=c=>((c/=255),c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4)); return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b); };
  const parse = c => { const m=c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/); return m?[+m[1],+m[2],+m[3],m[4]===undefined?1:+m[4]]:null; };
  const comp = (f,b) => [0,1,2].map(i=>f[i]*f[3]+b[i]*(1-f[3]));
  const ratio = (a,b) => { const [l1,l2]=[lum(a),lum(b)].sort((x,y)=>y-x); return (l1+0.05)/(l2+0.05); };
  function effBg(el){ const L=[]; for(let n=el;n&&n!==document.documentElement;n=n.parentElement){ const c=parse(getComputedStyle(n).backgroundColor); if(c&&c[3]>0){ L.push(c); if(c[3]>=1)break; } } let b=L.length&&L[L.length-1][3]>=1?L.pop().slice(0,3):[255,255,255]; for(let i=L.length-1;i>=0;i--)b=comp(L[i],b); return b; }

  window.contrastAudit = ({ expand = true } = {}) => {
    if (expand) {
      document.querySelectorAll('.reveal').forEach(e => e.classList.add('in'));
      document.querySelectorAll('details').forEach(d => (d.open = true));
    }
    const out = [];
    document.querySelectorAll('body *').forEach(el => {
      const t = [...el.childNodes].filter(n=>n.nodeType===3&&n.textContent.trim().length>2).map(n=>n.textContent.trim()).join(' ');
      if (!t) return;
      const cs = getComputedStyle(el);
      if (cs.display==='none'||cs.visibility==='hidden'||+cs.opacity===0) return;
      const r = el.getBoundingClientRect(); if (!r.width||!r.height) return;
      if (el.closest('.hero,.shero,.ahero,.rhero,.chero,.hub,.qf-hp,.sr-only')) return;
      for (let n=el;n&&n!==document.body;n=n.parentElement) { const bi=getComputedStyle(n).backgroundImage; if (bi&&bi!=='none'&&!/gradient/.test(bi)) return; }
      const fg = parse(cs.color); if (!fg) return;
      const bg = effBg(el);
      const c = ratio(fg[3]<1?comp(fg,bg):fg.slice(0,3), bg);
      const px = parseFloat(cs.fontSize);
      const need = px>=24||(px>=18.66&&+cs.fontWeight>=700) ? 3 : 4.5;
      if (c<need) out.push({ ratio:+c.toFixed(2), need, px:Math.round(px), color:cs.color, bg:`rgb(${bg.map(Math.round).join(',')})`, sel: el.tagName.toLowerCase()+(typeof el.className==='string'&&el.className?'.'+el.className.trim().split(/\s+/).slice(0,2).join('.'):''), text:t.slice(0,42) });
    });
    const seen = new Set();
    const unique = out.filter(o => { const k=o.sel+o.color+o.bg; return seen.has(k)?false:(seen.add(k),true); });
    if (unique.length) console.table(unique); 
    console.log(`contrastAudit: ${unique.length} failure(s) on ${location.pathname}`);
    return unique;
  };
})();
