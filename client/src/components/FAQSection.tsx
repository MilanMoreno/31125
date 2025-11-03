import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es MysraProductions?",
    answer: "MysraProductions es una firma de asesoría financiera profesional que ofrece servicios de consultoría personalizada en inversiones, gestión de patrimonio y planificación financiera. Nos enfocamos en estrategias prácticas y análisis detallado para ayudarte a alcanzar tus metas financieras."
  },
  {
    question: "¿Qué tipo de servicios de asesoría ofrecen?",
    answer: "Ofrecemos consultoría financiera integral incluyendo planificación de inversiones, gestión de patrimonio, análisis de riesgos, optimización fiscal y estrategias personalizadas adaptadas a tu perfil y objetivos financieros."
  },
  {
    question: "¿Cómo funciona la consulta inicial?",
    answer: "La consulta inicial es una sesión de 90 minutos donde evaluamos tu situación financiera actual, discutimos tus objetivos y desarrollamos un plan de acción personalizado. Esta sesión nos permite entender tus necesidades y diseñar la estrategia más adecuada."
  },
  {
    question: "¿Qué mercados y productos de inversión manejan?",
    answer: "Trabajamos con una amplia gama de productos de inversión incluyendo acciones, bonos, fondos mutuos, ETFs, bienes raíces y otros vehículos de inversión. Seleccionamos las opciones más adecuadas según tu perfil de riesgo y horizonte temporal."
  },
  {
    question: "¿Están regulados y certificados?",
    answer: "Sí, cumplimos con todas las regulaciones financieras aplicables y nuestros asesores cuentan con las certificaciones profesionales necesarias. La transparencia y el cumplimiento normativo son fundamentales en nuestro servicio."
  },
  {
    question: "¿Cuál es su política de reembolso?",
    answer: "Ofrecemos garantía de satisfacción en la primera consulta. Si no estás completamente satisfecho con nuestro servicio inicial, te reembolsamos el 100% de tu inversión."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-faq-title">
            ¿Tienes preguntas?
          </h2>
          <p className="text-xl text-primary" data-testid="text-faq-subtitle">
            ¡Tenemos las respuestas!
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
