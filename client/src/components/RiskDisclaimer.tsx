import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function RiskDisclaimer() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <Card className="p-8 border-chart-3/50 bg-chart-3/5" data-testid="card-risk-disclaimer">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-chart-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-chart-3" data-testid="text-risk-title">
                Aviso de Riesgo de Inversión
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-risk-content">
                Todas las inversiones conllevan riesgos inherentes. El valor de las inversiones puede fluctuar y existe la posibilidad de pérdida parcial o total del capital invertido. El rendimiento pasado no garantiza resultados futuros. Consulte con un asesor financiero profesional antes de tomar decisiones de inversión.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
