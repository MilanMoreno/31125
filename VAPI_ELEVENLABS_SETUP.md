# Configuración de Vapi con Eleven Labs

## Pasos para configurar la voz de Eleven Labs en Vapi

Para que Bria hable con la voz colombiana de Eleven Labs, sigue estos pasos en el dashboard de Vapi:

### 1. Acceder al Dashboard de Vapi
1. Ve a https://dashboard.vapi.ai
2. Inicia sesión con tu cuenta
3. Busca el asistente: **Bria_Agente_Principal_MILGRACIAS**
   - Assistant ID: `98a71ea9-9c2a-4752-a1fc-7d477b3e0542`

### 2. Configurar Eleven Labs como Provider
1. En la configuración del asistente, ve a la sección **Voice Configuration**
2. Selecciona **Provider**: `Eleven Labs` (en lugar de Cartesia)
3. Ingresa tu API Key de Eleven Labs: `sk_4d9fbd347482e73c825f87207e6c297c0a9da3f8c76e80ba`

### 3. Configurar la Voz Colombian Girl
1. En **Voice ID**, ingresa: `86V9x9hrQds83qf7zaGn`
2. Esta es la voz de "Colombian girl" que seleccionaste en Eleven Labs
3. Ajusta los siguientes parámetros según prefieras:
   - **Stability**: 0.5-0.7 (para una voz más natural)
   - **Similarity Boost**: 0.7-0.8 (para mantener el acento)
   - **Model**: Eleven Multilingual v2 (para mejor calidad en español)

### 4. Configuración Adicional Recomendada
```json
{
  "provider": "11labs",
  "voiceId": "86V9x9hrQds83qf7zaGn",
  "model": "eleven_multilingual_v2",
  "stability": 0.6,
  "similarityBoost": 0.75,
  "style": 0,
  "useSpeakerBoost": true
}
```

### 5. Guardar y Probar
1. Guarda la configuración en Vapi
2. Prueba la voz haciendo clic en el botón "Test" en Vapi dashboard
3. En tu sitio web, haz clic en el botón rojo "Hablar con Bria" para probar la integración completa

## Notas Importantes

- **API Key de Eleven Labs**: Ya está configurada como variable de entorno `ELEVENLABS_API_KEY`
- **Voice ID**: `86V9x9hrQds83qf7zaGn` es la voz específica de Colombian girl
- **Latencia**: Eleven Labs tiene mejor calidad de voz que Cartesia, pero puede tener ~100-200ms más de latencia
- **Costos**: Verifica los costos de Eleven Labs en tu cuenta, ya que puede ser más costoso que Cartesia

## Solución de Problemas

### La voz no suena colombiana
- Verifica que el Voice ID sea exactamente: `86V9x9hrQds83qf7zaGn`
- Asegúrate de seleccionar el modelo "Eleven Multilingual v2"

### Error de autenticación
- Verifica que la API Key de Eleven Labs sea correcta y esté activa
- Revisa que tengas créditos disponibles en tu cuenta de Eleven Labs

### Latencia alta
- Considera usar el modelo "Eleven Turbo v2" para menor latencia
- Ajusta el parámetro `chunk_size` en la configuración avanzada

## Recursos
- [Vapi Documentation](https://docs.vapi.ai/)
- [Eleven Labs Voice Library](https://elevenlabs.io/voice-library)
- [Eleven Labs API Docs](https://elevenlabs.io/docs/api-reference/introduction)
