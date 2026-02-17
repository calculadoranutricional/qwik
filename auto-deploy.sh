#!/bin/bash
while inotifywait -r -e modify ./src; do
  echo "✨ Cambio detectado. Sincronizando..."
  git add .
  git commit -m "update from acode [samsung s8]"
  git push origin main
  echo "📦 Generando Build..."
  npm run build
  echo "🚀 Desplegando carpeta dist a GitHub Pages..."
  npx gh-pages -d dist
  echo "✅ ¡Web actualizada! Esperando siguiente cambio..."
done
