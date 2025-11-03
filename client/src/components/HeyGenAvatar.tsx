import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import StreamingAvatar, {
  AvatarQuality,
  StreamingEvents,
  TaskType,
  TaskMode,
} from "@heygen/streaming-avatar";

const MYSRA_KNOWLEDGE_BASE = `
Eres Milan Moreno, un asistente virtual amigable, cercano y profesional de MysraProductions.
Tu misión es ayudar a los usuarios a comprender quiénes somos, qué ofrecemos y cómo
funciona nuestra asesoría financiera profesional.

Tu personalidad:
- Cercana, cálida y fácil de hablar.
- Profesional y clara al explicar conceptos de inversión y finanzas.
- Siempre transmite confianza, empatía y seguridad.
- Usa un tono natural, con frases cortas y directas.

Qué debes hacer:
- Responder preguntas sobre MysraProductions (beneficios, servicios, planes, equipo, advertencias de riesgo, etc.).
- Dar explicaciones simples y fáciles de entender, incluso en temas complejos de inversión.
- Usar ejemplos cuando sea necesario para que el usuario lo entienda mejor.
- Recordar siempre que las inversiones tienen riesgos y no garantizar resultados.

Qué NO debes hacer:
- No inventes información sobre MysraProductions ni sobre inversiones.
- No des asesoría financiera personalizada ni recomendaciones de inversión específicas.
- No hables de temas que no estén relacionados con MysraProductions o asesoría financiera.

Estilo de respuestas:
- Sé breve y clara al inicio, y solo detállate más si el usuario lo pide.
- Mantén un balance entre calidez y profesionalismo.

Información sobre MysraProductions:

SERVICIOS:
- Asesoría Financiera Profesional para maximizar inversiones
- Sesiones de consultoría personalizadas
- Análisis de riesgo y gestión de cartera
- Planificación financiera a largo plazo
- Soporte 24/7 para nuestros clientes

PLANES Y PRECIOS:
1. Plan Diarias ($49/mes):
   - Sesiones en Vivo
   - Acceso a la comunidad
   - Material educativo
   - Ideas de inversión

2. Plan Global ($149/mes):
   - Todo lo del plan Diarias
   - Análisis de mercado avanzado
   - Sesiones grupales ilimitadas
   - Soporte prioritario

3. Plan 24/7 ($299/mes):
   - Todo lo del plan Global
   - Soporte personalizado 24/7
   - Consultoría one-on-one
   - Acceso VIP a eventos

4. Plan Premium ($499/mes):
   - Todo lo anterior
   - Educación continua premium
   - Asesor dedicado
   - Estrategias personalizadas

CONTACTO:
- WhatsApp: Disponible en el botón verde del sitio web
- Reserva tu consultoría gratis: Botón en la navegación
- Comunidad activa de inversores

IMPORTANTE - ADVERTENCIA DE RIESGO:
Las inversiones conllevan riesgos sustanciales y no son adecuadas para todos los inversores.
Un inversor podría potencialmente perder toda o más que la inversión inicial. 
Solo utiliza capital que puedas permitirte perder.
El rendimiento pasado no es indicativo de resultados futuros.
`;

export default function HeyGenAvatar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAvatarActive, setIsAvatarActive] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const avatarRef = useRef<StreamingAvatar | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const initializeAvatar = async () => {
    if (avatarRef.current || !isOpen) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.heygen.com/v1/streaming.create_token", {
        method: "POST",
        headers: {
          "x-api-key": import.meta.env.HEYGEN_API_KEY || "",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to get HeyGen token");
      }

      const { data } = await response.json();
      const avatar = new StreamingAvatar({ token: data.token });
      avatarRef.current = avatar;

      avatar.on(StreamingEvents.STREAM_READY, (event) => {
        console.log("✅ Avatar stream ready");
        if (videoRef.current && event.detail) {
          videoRef.current.srcObject = event.detail;
          videoRef.current.play();
        }
        setIsAvatarActive(true);
        setIsLoading(false);
      });

      avatar.on(StreamingEvents.AVATAR_START_TALKING, () => {
        console.log("🗣️ Avatar started talking");
        setIsTalking(true);
      });

      avatar.on(StreamingEvents.AVATAR_STOP_TALKING, () => {
        console.log("🤐 Avatar stopped talking");
        setIsTalking(false);
      });

      avatar.on(StreamingEvents.USER_START, () => {
        console.log("👤 User started speaking");
        setIsListening(true);
      });

      avatar.on(StreamingEvents.USER_STOP, () => {
        console.log("👤 User stopped speaking");
        setIsListening(false);
      });

      avatar.on(StreamingEvents.STREAM_DISCONNECTED, () => {
        console.log("❌ Avatar disconnected");
        setIsAvatarActive(false);
        setError("Conexión perdida. Por favor, intenta de nuevo.");
      });

      await avatar.createStartAvatar({
        quality: AvatarQuality.High,
        avatarName: "5ec0029454cd42fbb870b42d8e37eb61",
        language: "es",
        disableIdleTimeout: false,
      });

      await avatar.speak({
        text: "¡Hola! Soy Milan Moreno, tu asesor en MysraProductions. Estoy aquí para ayudarte con cualquier duda sobre nuestros servicios de asesoría financiera. ¿En qué puedo ayudarte hoy?",
        taskType: TaskType.REPEAT,
        taskMode: TaskMode.SYNC,
      });

    } catch (err) {
      console.error("❌ Error initializing avatar:", err);
      setError(err instanceof Error ? err.message : "Error al inicializar el avatar");
      setIsLoading(false);
    }
  };

  const handleClose = async () => {
    if (avatarRef.current) {
      try {
        await avatarRef.current.stopAvatar();
      } catch (err) {
        console.error("Error stopping avatar:", err);
      }
      avatarRef.current = null;
    }
    setIsOpen(false);
    setIsAvatarActive(false);
    setIsTalking(false);
    setIsListening(false);
    setError(null);
  };

  const handleVoiceToggle = async () => {
    if (!avatarRef.current) return;

    try {
      if (isListening) {
        await avatarRef.current.closeVoiceChat();
      } else {
        await avatarRef.current.startVoiceChat();
      }
    } catch (err) {
      console.error("Error toggling voice:", err);
    }
  };

  useEffect(() => {
    if (isOpen && !avatarRef.current) {
      initializeAvatar();
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (avatarRef.current) {
        avatarRef.current.stopAvatar().catch(console.error);
      }
    };
  }, []);

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 left-6 z-50">
          <Button
            size="icon"
            onClick={() => setIsOpen(true)}
            className="h-16 w-16 rounded-full bg-primary hover:bg-primary shadow-lg border-4 border-background"
            data-testid="button-avatar-open"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </Button>
          <div className="absolute -top-1 -right-1">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </span>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-80 md:w-96 bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                {isTalking && (
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-white font-semibold" data-testid="text-avatar-name">Milan Moreno</h3>
                <p className="text-white/80 text-xs" data-testid="text-avatar-status">
                  {isLoading ? "Conectando..." : isAvatarActive ? "En línea" : "Desconectado"}
                </p>
              </div>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={handleClose}
              className="h-8 w-8 text-white hover:bg-white/20"
              data-testid="button-avatar-close"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="relative bg-black" style={{ aspectRatio: "16/9" }}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
              data-testid="video-avatar"
            />
            
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                <div className="text-center text-white">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-2"></div>
                  <p className="text-sm">Iniciando avatar...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80 p-4">
                <div className="text-center text-white">
                  <p className="text-sm mb-2">{error}</p>
                  <Button
                    size="sm"
                    onClick={() => {
                      setError(null);
                      initializeAvatar();
                    }}
                    data-testid="button-retry"
                  >
                    Reintentar
                  </Button>
                </div>
              </div>
            )}
          </div>

          {isAvatarActive && (
            <div className="p-4 bg-card border-t border-border">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {isListening ? "Escuchando..." : "Toca para hablar"}
                </p>
                <Button
                  size="icon"
                  onClick={handleVoiceToggle}
                  className={`h-12 w-12 rounded-full ${
                    isListening ? "bg-destructive hover:bg-destructive" : "bg-primary hover:bg-primary"
                  }`}
                  data-testid="button-voice-toggle"
                >
                  {isListening ? (
                    <Mic className="w-5 h-5 text-white" />
                  ) : (
                    <MicOff className="w-5 h-5 text-white" />
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
