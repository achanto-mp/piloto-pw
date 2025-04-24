echo "🚧 Construyendo imagen Docker..."
docker build -t playwright-tests .

echo "▶️ Ejecutando tests dentro del contenedor..."
docker run --rm -v $(pwd)/html-report:/app/html-report playwright-tests

echo "✅ Reporte generado en: $(pwd)/html-report/index.html"
echo "ℹ️ Abrilo manualmente o con: open html-report/index.html"