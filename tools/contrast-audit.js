/**
 * WCAG contrast audit — paste into the browser console on any page of the site.
 *
 *   Returns every text element whose contrast against its effective background
 *   falls below WCAG AA (4.5:1 normal, 3:1 for large/bold text).
 *
 * It composites translucent background layers properly and skips text sitting on
 * photography (hero scrims), which can't be judged from computed styles alone —
 * check those by eye.
 *
 * Usage:  copy this file, paste in DevTools console, press enter.
 *         Expand accordions first if you want their contents checked:
 *         document.querySelectorAll('details').forEach(d => d.open = true)
 */
(() => {
  const lum = ([r, g, b]) => {
    const f = (c) => ((c /= 255), c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const parse = (c) => {
    const m = c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
    return m ? [+m[1], +m[2], +m[3], m[4] === undefined ? 1 : +m[4]] : null;
  };
  const comp = (fg, bg) => [0, 1, 2].map((i) => fg[i] * fg[3] + bg[i] * (1 - fg[3]));
  const ratio = (a, b) => {
    const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
    return (l1 + 0.05) / (l2 + 0.05);
  };

  /** Walk up collecting background layers, then composite from the opaque base up. */
  function effBg(el) {
    const layers = [];
    for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
      const c = parse(getComputedStyle(n).backgroundColor);
      if (c && c[3] > 0) {
        layers.push(c);
        if (c[3] >= 1) break;
      }
    }
    let base =
      layers.length && layers[layers.length - 1][3] >= 1 ? layers.pop().slice(0, 3) : [255, 255, 255];
    for (let i = layers.length - 1; i >= 0; i--) base = comp(layers[i], base);
    return base;
  }

  const SKIP = '.hero,.shero,.ahero,.rhero,.chero,.hub,.qf-hp,.sr-only';
  const out = [];

  document.querySelectorAll('body *').forEach((el) => {
    const txt = [...el.childNodes]
      .filter((n) => n.nodeType === 3 && n.textContent.trim().length > 2)
      .map((n) => n.textContent.trim())
      .join(' ');
    if (!txt) return;

    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) return;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    if (el.closest(SKIP)) return;

    for (let n = el; n && n !== document.body; n = n.parentElement) {
      const bi = getComputedStyle(n).backgroundImage;
      if (bi && bi !== 'none' && !/gradient/.test(bi)) return; // sits on an image
    }

    const fg = parse(cs.color);
    if (!fg) return;
    const bg = effBg(el);
    const c = ratio(fg[3] < 1 ? comp(fg, bg) : fg.slice(0, 3), bg);
    const px = parseFloat(cs.fontSize);
    const need = px >= 24 || (px >= 18.66 && +cs.fontWeight >= 700) ? 3 : 4.5;

    if (c < need) {
      out.push({
        ratio: +c.toFixed(2),
        need,
        px: Math.round(px),
        color: cs.color,
        bg: `rgb(${bg.map(Math.round).join(',')})`,
        sel:
          el.tagName.toLowerCase() +
          (typeof el.className === 'string' && el.className
            ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.')
            : ''),
        text: txt.slice(0, 42),
      });
    }
  });

  const seen = new Set();
  const unique = out.filter((o) => {
    const k = o.sel + o.color + o.bg;
    return seen.has(k) ? false : (seen.add(k), true);
  });

  console.table(unique);
  console.log(`${unique.length} distinct contrast failure(s) on ${location.pathname}`);
  return unique;
})();
