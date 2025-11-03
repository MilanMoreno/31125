import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, PhoneOff, X, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Vapi from "@vapi-ai/web";
import presentationVideo from "@assets/Bria F.T._1760785077267.mp4";
import avatarImage from "@assets/image_1762015817701.png";

const VAPI_PUBLIC_KEY = "afc88041-71c8-44a9-a43e-90a3902b558c";
const VAPI_ASSISTANT_ID = "98a71ea9-9c2a-4752-a1fc-7d477b3e0542";

export default function Hero() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const publicKey = VAPI_PUBLIC_KEY;
    const assistantId = VAPI_ASSISTANT_ID;
    
    console.log("🔑 Configuración Vapi:", {
      publicKey: publicKey ? `${publicKey.substring(0, 8)}...` : "NO DEFINIDA",
      assistantId: assistantId ? `${assistantId.substring(0, 8)}...` : "NO DEFINIDA"
    });

    if (publicKey) {
      const vapiInstance = new Vapi(publicKey);
      setVapi(vapiInstance);

      vapiInstance.on("call-start", () => {
        console.log("✅ Llamada iniciada");
        setIsCallActive(true);
      });

      vapiInstance.on("call-end", () => {
        console.log("❌ Llamada finalizada");
        setIsCallActive(false);
      });

      vapiInstance.on("error", (error) => {
        console.error("❌ Error de Vapi:", error);
      });

      return () => {
        vapiInstance.stop();
      };
    } else {
      console.error("❌ VITE_VAPI_PUBLIC_KEY no está configurado");
    }
  }, []);

  const handleCallToggle = async () => {
    console.log("📞 Click en botón de llamada. Estado actual:", isCallActive ? "ACTIVA" : "INACTIVA");
    
    if (!vapi) {
      console.error("❌ Vapi no está inicializado");
      return;
    }

    if (isCallActive) {
      console.log("🔴 Finalizando llamada...");
      vapi.stop();
    } else {
      const assistantId = VAPI_ASSISTANT_ID;
      console.log("🟢 Iniciando llamada con Assistant ID:", assistantId);
      
      if (assistantId) {
        try {
          await vapi.start(assistantId);
        } catch (error) {
          console.error("❌ Error al iniciar la llamada:", error);
        }
      } else {
        console.error("❌ VITE_VAPI_ASSISTANT_ID no está configurado");
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+15556344242';
    const message = encodeURIComponent('Hola! Quiero inscribirme en MysraProductions');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Avatar flotante con indicador de voz */}
      <div className="fixed bottom-8 left-8 z-40 group" data-testid="floating-avatar">
        <div className="relative">
          {isCallActive && (
            <div className="absolute inset-0 rounded-full bg-chart-2 animate-ping opacity-75"></div>
          )}
          <div className={`relative w-24 h-24 rounded-full overflow-hidden border-4 ${isCallActive ? 'border-chart-2' : 'border-primary/30'} transition-all hover-elevate`}>
            <img 
              src={avatarImage} 
              alt="Bria - Tu Asesora Financiera" 
              className="w-full h-full object-cover"
            />
          </div>
          {isCallActive && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-chart-2 rounded-full border-2 border-background flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-32 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-hero-title">
          MYSRAPRODUCTIONS
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12" data-testid="text-hero-subtitle">
          Asesoría Financiera Profesional para Maximizar tus Inversiones
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <Button
              size="icon"
              onClick={handleCallToggle}
              className={`h-16 w-16 rounded-full transition-all ${
                isCallActive 
                  ? "bg-chart-2 hover:bg-chart-2 border-none" 
                  : "bg-destructive hover:bg-destructive border-none"
              }`}
              data-testid="button-call-toggle"
            >
              {isCallActive ? (
                <PhoneOff className="w-6 h-6 text-white" />
              ) : (
                <Phone className="w-6 h-6 text-white" />
              )}
            </Button>
            <span className="text-xs text-muted-foreground" data-testid="text-call-status">
              {isCallActive ? "En llamada" : "Hablar con Bria"}
            </span>
          </div>

          <Button
            size="lg"
            onClick={() => setIsVideoModalOpen(true)}
            className="bg-primary hover:bg-primary text-white rounded-full px-8"
            data-testid="button-watch-presentation"
          >
            Ver presentación
          </Button>

          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] text-white rounded-full px-8 gap-2"
            data-testid="button-whatsapp"
          >
            <MessageCircle className="w-5 h-5" />
            Habla con nosotros por WhatsApp
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("features")}
            className="text-lg px-8 backdrop-blur-sm"
            data-testid="button-learn-more"
          >
            Conoce Más
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center" data-testid="stat-sessions">
            <div className="text-3xl font-bold text-chart-2">Diarias</div>
            <div className="text-sm text-muted-foreground mt-1">Sesiones en Vivo</div>
          </div>
          <div className="text-center" data-testid="stat-community">
            <div className="text-3xl font-bold text-chart-2">Global</div>
            <div className="text-sm text-muted-foreground mt-1">Comunidad</div>
          </div>
          <div className="text-center" data-testid="stat-support">
            <div className="text-3xl font-bold text-chart-2">24/7</div>
            <div className="text-sm text-muted-foreground mt-1">Soporte</div>
          </div>
          <div className="text-center" data-testid="stat-education">
            <div className="text-3xl font-bold text-chart-2">Premium</div>
            <div className="text-sm text-muted-foreground mt-1">Educación</div>
          </div>
        </div>
      </div>

      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-6xl w-[90vw] p-0 bg-black/95 border-none">
          <DialogTitle className="sr-only">Video de presentación de Fractal Traders</DialogTitle>
          <DialogDescription className="sr-only">
            Mira nuestra presentación de Bria y conoce más sobre Fractal Traders
          </DialogDescription>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50" data-testid="button-close-modal">
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Cerrar</span>
          </DialogClose>
          
          <div className="w-full aspect-video rounded-md overflow-hidden">
            <video
              className="w-full h-full rounded-md"
              controls
              autoPlay
              src={presentationVideo}
              data-testid="video-presentation"
            >
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
