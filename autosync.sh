#!/bin/bash
echo "🚀 [S8 Engine] Monitor Qwik Activo. Esperando cambios en Acode..."
while inotifywait -r -e modify,create,delete --exclude 'node_modules|.git|dist' /data/data/com.termux/files/home/qwik; do
  echo "✨ Cambio detectado. Sincronizando..."
  git add .
  git commit -m "update from acode [samsung s8]"
  git push origin main
  echo "📦 Generando Build..."
  pnpm build
  # El truco del 404
  cp dist/index.html dist/404.html
  echo "🚀 Desplegando a GitHub Pages..."
  npx gh-pages -d dist
  echo "✅ ¡Web actualizada! Esperando siguiente cambio..."
done
