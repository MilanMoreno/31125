import { Card } from "@/components/ui/card";
import avatarImage from "@assets/image_1762015817701.png";

export default function TeamSection() {
  return (
    <section id="equipo" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-team-title">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-muted-foreground mb-2" data-testid="text-team-subtitle">
            Expertos en Asesoría Financiera
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-team-description">
            Profesionales certificados comprometidos con tu éxito financiero
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="p-8 max-w-md hover-elevate transition-transform" data-testid="card-team-member">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/20">
                <img 
                  src={avatarImage} 
                  alt="Bria - Asesora Financiera Principal" 
                  className="w-full h-full object-cover"
                  data-testid="avatar-team-member"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2" data-testid="text-member-name">Bria</h3>
              <p className="text-primary mb-4" data-testid="text-member-role">Asesora Financiera Principal</p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-member-bio">
                Experta en gestión de patrimonio e inversiones con más de 10 años de experiencia 
                ayudando a clientes a alcanzar sus objetivos financieros. Especializada en 
                planificación estratégica y análisis de mercados.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
