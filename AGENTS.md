# Origen Caral — instrucciones para el agente

Estás construyendo la web de **Origen Caral**: una colección de personajes digitales de las culturas del antiguo Perú, presentada como un viaje en el tiempo desde Caral (hacia 3000 a.C.) hasta los Incas. El público principal son turistas extranjeros de gasto alto; el segundo, coleccionistas.

La web debe verse como el trabajo de un estudio de diseño de alto nivel: sobria, editorial y con mucho espacio en blanco. Nada debe parecer una plantilla ni una web generada con IA.

## Lee primero

1. `docs/01-proyecto.md`: qué es el proyecto, páginas, secciones y textos.
2. `docs/02-sistema-de-diseno.md`: colores, tipografía, retícula, componentes y reglas visuales. Es obligatorio.
3. `referencia/inicio.html`: referencia visual estática de la página de inicio. Ábrela en el navegador. Reproduce su composición, no copies su código tal cual (usa estilos en línea solo porque es un prototipo).
4. `assets/portada-portal-del-origen.svg`: ilustración de la portada.

## Stack

- Next.js (App Router) con TypeScript.
- CSS Modules con variables CSS para los tokens del sistema de diseño. No uses Tailwind ni librerías de componentes de UI.
- Fuentes con `next/font/google` (Instrument Serif y Hanken Grotesk). `next/font` las aloja en el propio servidor; no cargues fuentes desde los servidores de Google.
- Idiomas español (por defecto) e inglés con `next-intl`. Rutas `/` y `/en`. Todos los textos van en archivos de traducción, nunca escritos directamente en los componentes.
- Despliegue previsto en Vercel.

## Alcance de la fase 1

1. Página de inicio (`/`), según `referencia/inicio.html`.
2. Página Edición Fundadora (`/fundadores`), con el contenido de `docs/01-proyecto.md`.
3. Formulario de lista de espera (correo electrónico) en la página de fundadores: validación en cliente y servidor, estados de envío, éxito y error. Deja el guardado detrás de una función `saveWaitlistEmail()` con un `TODO` para conectar el proveedor después.
4. Páginas legales vacías con su estructura: Términos, Privacidad y Libro de reclamaciones.

Fuera de alcance por ahora: market, app, pagos, cuentas de usuario y chips NFC.

## Reglas que no se rompen

- No prometas entradas, descuentos ni beneficios en sitios arqueológicos o restaurantes. Esos beneficios dependen de convenios que aún no existen. Usa solo los textos de `docs/01-proyecto.md`.
- No inventes datos históricos. Si falta un dato, deja un marcador visible como `[POR CONFIRMAR]`.
- Imágenes: usa marcadores grises con una etiqueta (`[Render: ...]`) donde aún no hay imagen real. No uses imágenes de bancos ni generadas con IA.
- Accesibilidad: contraste AA, foco visible en todos los enlaces y botones, textos alternativos, `prefers-reduced-motion` respetado, navegable con teclado.
- Responsive desde 360 px de ancho.
- Rendimiento: puntuación Lighthouse de 90 o más en todas las categorías.

## Cómo trabajar

- Haz commits pequeños y descriptivos.
- Antes de dar por terminada una página, compárala con la referencia y con el sistema de diseño.
- Si algo de estos documentos se contradice, pregunta antes de decidir.
