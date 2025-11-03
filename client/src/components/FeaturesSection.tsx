import { Card } from "@/components/ui/card";
import { TrendingUp, GraduationCap, Shield, ChartBar } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Consultoría Personalizada",
    description: "Recibe asesoramiento financiero adaptado a tus objetivos específicos. Analizamos tu situación actual y diseñamos estrategias personalizadas para maximizar el crecimiento de tu patrimonio."
  },
  {
    icon: GraduationCap,
    title: "Educación Financiera",
    description: "Aprende de expertos financieros certificados sobre inversiones, gestión de patrimonio y planificación financiera. Te proporcionamos el conocimiento necesario para tomar decisiones informadas."
  },
  {
    icon: Shield,
    title: "Gestión de Riesgos",
    description: "Protege tu capital con estrategias profesionales de gestión de riesgos. Evaluamos oportunidades de inversión considerando tu perfil de riesgo y horizonte temporal."
  },
  {
    icon: ChartBar,
    title: "Análisis de Mercado",
    description: "Accede a análisis profundo de mercados financieros, tendencias económicas y oportunidades de inversión. Herramientas diseñadas para ayudarte a tomar decisiones estratégicas informadas."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-features-title">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-primary mb-2" data-testid="text-features-subtitle">
            Soluciones Financieras Profesionales
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-description">
            Descubre cómo nuestros servicios de asesoría financiera pueden ayudarte a alcanzar tus metas de inversión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover-elevate transition-transform" data-testid={`card-feature-${index}`}>
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
