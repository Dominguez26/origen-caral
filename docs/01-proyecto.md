# Origen Caral — proyecto, páginas y textos

## Qué es

Origen Caral es una colección de personajes digitales (y, más adelante, figuras físicas fabricadas por artesanos con licencia) de las culturas del antiguo Perú. Cada personaje cuenta la historia de su cultura. La experiencia se inspira en el menú degustación del restaurante Central: un recorrido por etapas, en este caso a través del tiempo.

En el futuro, cada personaje dará beneficios en sitios arqueológicos y restaurantes aliados mediante convenios con PromPerú y el Ministerio de Cultura. **Esos convenios aún no existen: la web no debe prometer ningún beneficio de ese tipo.**

## Público

1. Turistas extranjeros de gasto alto, de 25 a 55 años. Leen en inglés o español.
2. Coleccionistas de figuras y arte digital.

## Tono de los textos

Sobrio, claro y concreto. Frases cortas, voz activa, datos reales en lugar de adjetivos. Nada de "experiencia única", "inolvidable" ni "mágica". Mayúscula solo al inicio de la frase.

---

## Página de inicio (`/`)

### 1. Portada (pantalla completa)

- Fondo: `assets/portada-portal-del-origen.svg`, recortado desde abajo al centro para que la pirámide y los personajes siempre se vean.
- Menú sobre la imagen, en claro: logotipo "Origen Caral" a la izquierda; enlaces El viaje, Colección, Fundadores y selector ES / EN a la derecha. En móvil, menú desplegable.
- Etiqueta: Perú, de 3000 a.C. a 1532 d.C.
- Título: Todo comenzó aquí.
- Subtítulo: Cinco mil años de culturas, territorios y sabores, en un solo viaje.
- Enlace: Descubrir (baja a la sección El origen). Va en el bloque de texto, no al centro de la imagen, para no tapar a los personajes.

### 2. El origen

- Etiqueta: El origen
- Título: Mil años antes que cualquier otra ciudad de América, en el valle de Supe ya se levantaban pirámides.
- Texto: Origen Caral es un recorrido por las culturas del antiguo Perú. Cada personaje de la colección cuenta la historia de su pueblo y te lleva al lugar donde vivió.
- Enlace: Ver el recorrido

### 3. El viaje

- Etiqueta: El viaje
- Título: Ocho culturas, ocho paradas.
- Lista de 8 filas (número, cultura, época, sitio). Aquí sí va la numeración porque es una secuencia:

| N.º | Cultura | Época | Sitio |
| --- | --- | --- | --- |
| 01 | Caral | Hacia 3000 a.C. | Ciudad Sagrada de Caral |
| 02 | Chavín | 1200 – 200 a.C. | Chavín de Huántar |
| 03 | Paracas | 800 a.C. – 100 d.C. | Paracas, Ica |
| 04 | Nazca | 100 – 800 d.C. | Líneas y Cahuachi |
| 05 | Moche | 100 – 700 d.C. | Huaca de la Luna |
| 06 | Wari | 600 – 1000 d.C. | Complejo Wari, Ayacucho |
| 07 | Chimú | 900 – 1470 d.C. | Chan Chan |
| 08 | Inca | 1400 – 1532 d.C. | Machu Picchu |

Las fechas son aproximadas y deben validarse con el asesor histórico antes del lanzamiento.

### 4. La colección

- Imagen grande a la izquierda: `[Render: El Músico de la Ciudad Sagrada]`.
- Etiqueta: La colección
- Título: Personajes que guardan una historia.
- Texto 1: En los templos de Caral se hallaron flautas de hueso de pelícano y de cóndor. El Músico de la Ciudad Sagrada es el primero de la colección.
- Texto 2: Cada personaje llega con su historia, un certificado de autenticidad y un chip que lo conecta con el viaje.
- Enlace: Conocer la colección

### 5. Edición Fundadora (franja oscura)

- Etiqueta: Edición Fundadora
- Título: Cien ediciones por personaje. Ni una más.
- Texto: Quienes se sumen primero recibirán un número de edición del 001 al 100 y beneficios exclusivos como fundadores.
- Enlace: Reservar mi edición (lleva a `/fundadores`)

### 6. Pie de página

Logotipo, "Lima, Perú", enlaces de navegación y enlaces legales (Términos, Privacidad, Libro de reclamaciones). El Libro de reclamaciones es obligatorio en Perú.

---

## Página Edición Fundadora (`/fundadores`)

Usa el mismo sistema de diseño que la página de inicio.

### 1. Encabezado

- Etiqueta: Edición Fundadora, solo 100 por personaje
- Título: Sé de los primeros en guardar 5,000 años de historia.
- Texto: Origen Caral comienza con tres personajes de las culturas del antiguo Perú. Quienes los adquieran hoy serán fundadores del proyecto y recibirán beneficios que nadie más tendrá.

### 2. Los tres primeros personajes

| Personaje | Cultura y época | Historia | Atributos |
| --- | --- | --- | --- |
| El Músico de la Ciudad Sagrada | Caral, hacia 3000 a.C. | En los templos de Caral se hallaron flautas hechas de hueso de pelícano y de cóndor. Él toca para las ceremonias de la ciudad más antigua de América. | Manto de algodón, flauta de hueso, cuentas de colores |
| El Guerrero Mochica | Moche, 100 – 700 d.C. | Los ceramios moches retratan a guerreros de élite en combates rituales. Lleva los adornos de oro que distinguían a los señores del norte. | Tocado de media luna, nariguera de oro, porra y escudo |
| La Sacerdotisa de Paracas | Paracas, 800 a.C. – 100 d.C. | Los mantos bordados de Paracas están entre los textiles más finos del mundo antiguo. Ella custodia sus colores y sus símbolos. | Manto bordado, diadema, motivos del ser oculado |

Cada uno con su marcador de imagen `[Render: nombre del personaje]`.

### 3. Ediciones y precios (USD)

| Edición | Precio | Incluye |
| --- | --- | --- |
| Esencial | 50 | Tu personaje 3D en la app; su historia y la de su cultura; certificado digital de autenticidad |
| Coleccionista | 80 | Todo lo de Esencial; versión estilo anime del mismo personaje; míralo en realidad aumentada desde tu celular |
| Fundador (solo 100 por personaje) | 100 | Todo lo de Coleccionista; número de edición del 001 al 100; tu nombre en el muro de fundadores; primer acceso a cada nuevo personaje; descuento en la figura física cuando se lance `[% POR DEFINIR]` |

Debajo, en texto pequeño: Los beneficios en sitios arqueológicos y restaurantes se anunciarán cuando se firmen los convenios correspondientes y no forman parte de esta edición.

En la fase 1 los botones de cada edición llevan a la lista de espera (no hay pagos todavía).

### 4. Lista de espera

- Título: Reserva tu edición
- Texto: Déjanos tu correo y te avisamos el día del lanzamiento, antes que al público general.
- Campo: Correo electrónico (con etiqueta visible).
- Botón: Quiero ser fundador
- Éxito: Listo. Te escribiremos antes del lanzamiento.
- Error de formato: Escribe un correo válido, por ejemplo nombre@correo.com.
- Error de envío: No pudimos guardar tu correo. Inténtalo de nuevo en unos minutos.
- Casilla obligatoria de consentimiento: Acepto recibir correos de Origen Caral sobre el lanzamiento. (Enlace a Privacidad.)
