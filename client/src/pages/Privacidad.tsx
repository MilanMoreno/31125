import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Inicio
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-4" data-testid="heading-privacy">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-8" data-testid="text-last-updated">
          Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-introduction">1. Introducción</h2>
            <p className="text-muted-foreground leading-relaxed">
              En MysraProductions, valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo 
              recopilamos, usamos, compartimos y protegemos su información personal cuando utiliza nuestros servicios 
              de asesoría financiera.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-information-collected">2. Información que Recopilamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recopilamos varios tipos de información para proporcionar y mejorar nuestros servicios:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">2.1 Información Personal</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono (si es proporcionado)</li>
              <li>Información de pago y facturación</li>
              <li>Nombre de usuario y contraseña</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">2.2 Información de Uso</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li>Dirección IP y ubicación geográfica</li>
              <li>Tipo de navegador y dispositivo</li>
              <li>Páginas visitadas y tiempo de permanencia</li>
              <li>Interacciones con nuestro contenido educativo</li>
              <li>Historial de actividad en la plataforma</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">2.3 Cookies y Tecnologías Similares</h3>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos cookies y tecnologías similares para mejorar su experiencia, recordar sus preferencias 
              y analizar el uso de nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-how-we-use">3. Cómo Utilizamos su Información</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos la información recopilada para los siguientes propósitos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Proporcionar y mantener nuestros servicios educativos</li>
              <li>Procesar pagos y gestionar suscripciones</li>
              <li>Enviar comunicaciones importantes sobre su cuenta</li>
              <li>Personalizar su experiencia de aprendizaje</li>
              <li>Mejorar nuestros servicios y desarrollar nuevas funcionalidades</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Prevenir fraudes y proteger la seguridad de la plataforma</li>
              <li>Enviar material educativo y actualizaciones (con su consentimiento)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-sharing">4. Compartir Información</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No vendemos su información personal. Podemos compartir su información en las siguientes circunstancias:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong className="text-foreground">Proveedores de Servicios:</strong> Con terceros que nos ayudan a operar nuestra plataforma (procesadores de pago, servicios de hosting)</li>
              <li><strong className="text-foreground">Requisitos Legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
              <li><strong className="text-foreground">Transferencias Empresariales:</strong> En caso de fusión, adquisición o venta de activos</li>
              <li><strong className="text-foreground">Con su Consentimiento:</strong> Cuando usted nos autorice explícitamente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-data-security">5. Seguridad de los Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información 
              personal contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
              <li>Encriptación de datos en tránsito y en reposo</li>
              <li>Controles de acceso estrictos</li>
              <li>Auditorías de seguridad regulares</li>
              <li>Protección con contraseña de cuentas de usuario</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-your-rights">6. Sus Derechos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Usted tiene los siguientes derechos respecto a su información personal:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong className="text-foreground">Acceso:</strong> Solicitar una copia de la información que tenemos sobre usted</li>
              <li><strong className="text-foreground">Rectificación:</strong> Corregir información inexacta o incompleta</li>
              <li><strong className="text-foreground">Eliminación:</strong> Solicitar la eliminación de su información personal</li>
              <li><strong className="text-foreground">Portabilidad:</strong> Recibir sus datos en un formato estructurado y legible</li>
              <li><strong className="text-foreground">Oposición:</strong> Oponerse al procesamiento de su información para ciertos fines</li>
              <li><strong className="text-foreground">Retirar Consentimiento:</strong> Retirar su consentimiento en cualquier momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-retention">7. Retención de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos 
              descritos en esta política, a menos que la ley requiera o permita un período de retención más largo. 
              Cuando su información ya no sea necesaria, la eliminaremos o anonimizaremos de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-international">8. Transferencias Internacionales</h2>
            <p className="text-muted-foreground leading-relaxed">
              Su información puede ser transferida y procesada en países distintos al suyo. Nos aseguramos de que 
              estas transferencias cumplan con las leyes de protección de datos aplicables y que su información 
              reciba un nivel adecuado de protección.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-children">9. Privacidad de Menores</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información 
              personal de menores. Si descubrimos que hemos recopilado información de un menor, tomaremos medidas 
              para eliminarla de nuestros sistemas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-policy-changes">10. Cambios a esta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras 
              prácticas o por razones legales. Le notificaremos sobre cambios significativos publicando la nueva 
              política en nuestro sitio web y actualizando la fecha de "última actualización". Le recomendamos 
              revisar esta política regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" data-testid="heading-contact">11. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si tiene preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o el 
              manejo de su información personal, puede contactarnos a través de:
            </p>
            <ul className="list-none space-y-2 text-muted-foreground ml-4">
              <li>• Los canales oficiales disponibles en nuestro sitio web</li>
              <li>• Nuestro equipo de soporte dedicado</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Responderemos a su solicitud dentro de un plazo razonable y de acuerdo con las leyes aplicables.
            </p>
          </section>

          <section className="bg-card border border-border rounded-md p-6">
            <h2 className="text-xl font-semibold mb-3 text-foreground" data-testid="heading-consent">Su Consentimiento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Al utilizar nuestros servicios, usted consiente la recopilación y el uso de su información según 
              se describe en esta Política de Privacidad. Si no está de acuerdo con esta política, le pedimos 
              que no utilice nuestros servicios.
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
