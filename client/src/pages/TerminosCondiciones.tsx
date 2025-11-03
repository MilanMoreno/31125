import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Inicio
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-4" data-testid="heading-terms">Términos y Condiciones</h1>
        <p className="text-muted-foreground mb-8" data-testid="text-last-updated">
          Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-acceptance">1. Aceptación de los Términos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Al acceder y utilizar los servicios de MysraProductions, usted acepta estar sujeto a estos Términos y Condiciones. 
              Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-services">2. Descripción de los Servicios</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              MysraProductions ofrece servicios profesionales de asesoría financiera, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Consultoría financiera personalizada</li>
              <li>Análisis de inversiones y gestión de patrimonio</li>
              <li>Planificación financiera estratégica</li>
              <li>Evaluación de riesgos y oportunidades</li>
              <li>Asesoramiento en productos de inversión</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-disclaimer">3. Descargo de Responsabilidad sobre Inversiones</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">IMPORTANTE:</strong> Las inversiones financieras conllevan riesgos inherentes y pueden no ser adecuadas para todos los inversores. 
              Existe la posibilidad de pérdida parcial o total de su capital invertido.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              MysraProductions proporciona asesoramiento financiero profesional basado en su situación individual. Sin embargo, 
              todas las decisiones de inversión final son responsabilidad exclusiva del cliente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              El rendimiento pasado no garantiza resultados futuros. Los ejemplos o proyecciones compartidas son ilustrativos 
              y no constituyen garantías de rendimiento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-membership">4. Membresía y Pagos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Al suscribirse a cualquiera de nuestros planes, usted acepta:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Proporcionar información de pago válida y actualizada</li>
              <li>Autorizar los cargos recurrentes según el plan seleccionado</li>
              <li>Los pagos son no reembolsables salvo que la ley lo requiera</li>
              <li>Podemos modificar los precios con notificación previa de 30 días</li>
              <li>Usted puede cancelar su membresía en cualquier momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-user-conduct">5. Conducta del Usuario</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Al utilizar nuestros servicios, usted se compromete a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>No compartir su cuenta o credenciales de acceso con terceros</li>
              <li>No reproducir, distribuir o revender nuestro contenido sin autorización</li>
              <li>Mantener un comportamiento respetuoso con otros miembros de la comunidad</li>
              <li>No utilizar nuestros servicios para actividades ilegales o fraudulentas</li>
              <li>Cumplir con todas las leyes y regulaciones aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-intellectual-property">6. Propiedad Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todo el contenido, materiales, logos, marcas y diseños en Fractal Traders son propiedad exclusiva de 
              nuestra empresa o de nuestros licenciantes. Está prohibida la reproducción, distribución o modificación 
              de cualquier contenido sin nuestro consentimiento expreso por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-termination">7. Terminación de Servicios</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nos reservamos el derecho de suspender o terminar su acceso a nuestros servicios en cualquier momento, 
              sin previo aviso, si determinamos que ha violado estos Términos y Condiciones o si su conducta es 
              perjudicial para otros usuarios o para nuestra plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-limitation">8. Limitación de Responsabilidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              MysraProductions no será responsable por ningún daño directo, indirecto, incidental, especial o 
              consecuente que resulte del uso o la imposibilidad de usar nuestros servicios, incluyendo pero no 
              limitado a pérdidas financieras derivadas de decisiones de inversión.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-changes">9. Modificaciones a los Términos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. 
              Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. 
              Es su responsabilidad revisar periódicamente estos términos. El uso continuado de nuestros servicios 
              después de cualquier modificación constituye su aceptación de los nuevos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-contact">10. Información de Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Si tiene preguntas sobre estos Términos y Condiciones, por favor contáctenos a través de los 
              canales oficiales disponibles en nuestro sitio web.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/">
            <Button variant="default" data-testid="button-return-home">
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
