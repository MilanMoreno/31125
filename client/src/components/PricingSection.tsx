import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Consulta Inicial",
    price: "$150",
    period: "/sesión",
    features: [
      "Evaluación Financiera Completa",
      "Análisis de Situación Actual",
      "Recomendaciones Personalizadas",
      "Plan de Acción Inicial",
      "Sesión de 90 minutos"
    ]
  },
  {
    name: "Asesoría Mensual",
    price: "$450",
    period: "/mes",
    recommended: true,
    features: [
      "Seguimiento Continuo",
      "Revisiones Mensuales",
      "Estrategias de Inversión",
      "Gestión de Patrimonio",
      "Soporte Prioritario"
    ]
  },
  {
    name: "Plan Platinum",
    price: "$1,200",
    period: "/trimestre",
    features: [
      "Asesoría Integral",
      "Planificación Fiscal",
      "Revisiones Semanales",
      "Análisis de Mercado Avanzado",
      "Acceso Directo al Asesor"
    ]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-pricing-title">
            Planes de Asesoría Financiera
          </h2>
          <p className="text-xl text-muted-foreground mb-2" data-testid="text-pricing-subtitle">
            Elige el plan que mejor se adapte a tus objetivos
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-description">
            Servicios profesionales de asesoría financiera diseñados para maximizar tu potencial de inversión. Transparencia total, sin cargos ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 flex flex-col ${plan.recommended ? 'border-2 border-primary' : ''}`}
              data-testid={`card-pricing-${index}`}
            >
              {plan.recommended && (
                <div className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-md self-start mb-4" data-testid="badge-recommended">
                  Recomendado
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3" data-testid={`feature-${index}-${idx}`}>
                    <Check className="w-5 h-5 text-chart-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={plan.recommended ? "bg-primary hover:bg-primary w-full" : "w-full"}
                variant={plan.recommended ? "default" : "outline"}
                data-testid={`button-select-${index}`}
              >
                Seleccionar Plan
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
