// IMPORTANT: DO NOT ADD ANY COMMENTS
import logoUrl from '../Public/images/logo.png';

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0; const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToCss(h: number, s: number, l: number) {
  return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
}

function clamp(v: number, min: number, max: number) { return Math.max(min, Math.min(max, v)); }

function generateShades(h: number, s: number, l: number) {
  const baseL = l;
  const shades = {
    50: hslToCss(h, clamp(s * 0.15, 0, 100), clamp(baseL + 45, 0, 100)),
    100: hslToCss(h, clamp(s * 0.25, 0, 100), clamp(baseL + 35, 0, 100)),
    200: hslToCss(h, clamp(s * 0.5, 0, 100), clamp(baseL + 20, 0, 100)),
    500: hslToCss(h, s, baseL),
    600: hslToCss(h, clamp(s * 1.05, 0, 100), clamp(baseL - 5, 0, 100)),
    700: hslToCss(h, clamp(s * 1.1, 0, 100), clamp(baseL - 12, 0, 100)),
    900: hslToCss(h, clamp(s * 1.15, 0, 100), clamp(baseL - 25, 0, 100)),
  } as const;
  return shades;
}

function setBrandVariables(colors: Record<string, string>) {
  const root = document.documentElement;
  root.style.setProperty('--brand-50', colors[50]);
  root.style.setProperty('--brand-100', colors[100]);
  root.style.setProperty('--brand-200', colors[200]);
  root.style.setProperty('--brand-500', colors[500]);
  root.style.setProperty('--brand-600', colors[600]);
  root.style.setProperty('--brand-700', colors[700]);
  root.style.setProperty('--brand-900', colors[900]);
  const tmp = document.createElement('div');
  tmp.style.color = colors[600];
  document.body.appendChild(tmp);
  const cs = getComputedStyle(tmp).color;
  document.body.removeChild(tmp);
  const m = cs.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  let contrast = '#ffffff';
  if (m) {
    const r = parseInt(m[1], 10), g = parseInt(m[2], 10), b = parseInt(m[3], 10);
    const lum = 0.2126 * (r/255) + 0.7152 * (g/255) + 0.0722 * (b/255);
    contrast = lum > 0.6 ? '#000000' : '#ffffff';
  }
  root.style.setProperty('--brand-contrast', contrast);
}

export async function initBrandColors() {
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const i = new Image();
      i.crossOrigin = 'anonymous';
      i.onload = () => resolve(i);
      i.onerror = reject;
      i.src = logoUrl;
    });
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('noctx');
    const w = 64, imgH = 64;
    canvas.width = w; canvas.height = imgH;
    ctx.drawImage(img, 0, 0, w, imgH);
    const data = ctx.getImageData(0, 0, w, imgH).data;
    let rSum = 0, gSum = 0, bSum = 0, count = 0;
    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3];
      if (a < 128) continue;
      const r = data[i], g = data[i + 1], b = data[i + 2];
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      if (max - min < 10) continue;
      rSum += r; gSum += g; bSum += b; count += 1;
    }
    if (count === 0) throw new Error('nocolor');
    const r = Math.round(rSum / count);
    const g = Math.round(gSum / count);
    const b = Math.round(bSum / count);
    const { h, s, l } = rgbToHsl(r, g, b);
    const colors = generateShades(h, s, l);
    setBrandVariables(colors);
  } catch {
    setBrandVariables({
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      900: '#7f1d1d',
    } as Record<string, string>);
  }
}