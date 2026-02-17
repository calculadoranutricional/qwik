#!/bin/bash
echo "🚀 [S8 Engine] Monitor Qwik Activo..."
while inotifywait -r -e modify,create,delete --exclude 'node_modules|.git|dist' /data/data/com.termux/files/home/qwik; do
  echo "✨ Cambio detectado. Sincronizando..."
  
  # Git Push del código fuente
  git add .
  git commit -m "update from acode [samsung s8]"
  git push origin main
  
  # Proceso de Build
  echo "📦 Generando Build..."
  pnpm build
  
  # FIXES para GitHub Pages:
  # 1. Crear .nojekyll para que GitHub no ignore archivos de Qwik
  touch dist/.nojekyll
  # 2. El truco del 404
  cp dist/index.html dist/404.html
  
  echo "🚀 Desplegando a GitHub Pages..."
  # Usamos el binario local de gh-pages para evitar que se cuelgue npx
  ./node_modules/.bin/gh-pages -d dist -t true
  
  echo "✅ ¡Web actualizada! Esperando siguiente cambio..."
done
