import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send } from "lucide-react";
import avatarImage from "@assets/image_1762015817701.png";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! Soy Bria, tu asesora financiera. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const predefinedResponses: Record<string, string> = {
    hola: "¡Hola! ¿Cómo puedo ayudarte con tus inversiones hoy?",
    precio: "Nuestros planes van desde el Plan Básico hasta el Plan Premium. ¿Te gustaría conocer más detalles sobre algún plan específico?",
    precios: "Nuestros planes van desde el Plan Básico hasta el Plan Premium. ¿Te gustaría conocer más detalles sobre algún plan específico?",
    servicios: "Ofrecemos asesoría financiera profesional, gestión de inversiones, planificación de patrimonio y educación financiera. ¿Sobre cuál te gustaría saber más?",
    contacto: "Puedes reservar una consultoría gratuita haciendo clic en el botón 'Reservar tu consultoría gratis' o contactarnos por WhatsApp.",
    horario: "Ofrecemos soporte 24/7 y sesiones de asesoría en vivo diariamente. ¿Te gustaría agendar una sesión?",
    inversion: "Te ayudamos a maximizar tus inversiones con estrategias personalizadas. ¿Tienes experiencia previa en inversiones?",
    inversión: "Te ayudamos a maximizar tus inversiones con estrategias personalizadas. ¿Tienes experiencia previa en inversiones?",
    riesgo: "Todo tipo de inversión conlleva riesgos. Nuestro equipo te ayuda a entender y gestionar estos riesgos de manera profesional. ¿Quieres saber más sobre gestión de riesgos?",
    ayuda: "Estoy aquí para ayudarte con información sobre nuestros servicios, planes, inversiones y asesoría financiera. ¿Qué te gustaría saber?",
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    return "Gracias por tu pregunta. Para una asesoría personalizada, te recomiendo reservar una consultoría gratuita o contactarnos por WhatsApp. También puedes llamar directamente a Bria usando el botón de voz. ¿Hay algo más en lo que pueda ayudarte?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessageText = inputValue.trim();
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: userMessageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userMessageText),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          size="icon"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 h-16 w-16 rounded-full bg-primary border-none shadow-lg z-40"
          data-testid="button-open-chat"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-8 right-8 w-[380px] h-[600px] flex flex-col z-40 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-primary">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <img
                  src={avatarImage}
                  alt="Bria"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white">Bria</h3>
                <p className="text-xs text-white/80">Asesora Financiera</p>
              </div>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
              data-testid="button-close-chat"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                  data-testid={`message-${message.sender}-${message.id}`}
                >
                  <div
                    className={`max-w-[75%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-white/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString("es-ES", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu pregunta..."
                className="flex-1"
                data-testid="input-chat-message"
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-primary"
                data-testid="button-send-message"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Para asesoría personalizada, usa el botón de voz
            </p>
          </div>
        </Card>
      )}
    </>
  );
}
