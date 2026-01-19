# Tailwind CSS v4 - Installation Guide

## Quick Setup (Vite + React)

### 1. Install Packages
```bash
npm install -D tailwindcss@next @tailwindcss/vite --legacy-peer-deps
```

### 2. Update `vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 3. Add to `src/index.css` (top of file)
```css
@import "tailwindcss";
```

### 4. Restart Dev Server
```bash
npm run dev
```

### 5. Test It
```jsx
<div className="bg-blue-500 text-white p-4">
  Tailwind is working!
</div>
```

---

## Key Points
- ✅ No `tailwind.config.js` needed
- ✅ No `postcss.config.js` needed
- ✅ Must restart server after config changes
- ✅ Use `--legacy-peer-deps` flag for Vite 7

## Troubleshooting
**Styles not showing?**
1. Check `vite.config.js` has `tailwindcss()` in plugins
2. Verify `@import "tailwindcss";` is in `index.css`
3. Restart dev server
4. Hard refresh browser (Ctrl+Shift+R)
