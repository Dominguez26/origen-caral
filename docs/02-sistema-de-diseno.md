# Origen Caral — sistema de diseño

La idea central: **piedra, adobe y silencio**. La web se apoya en los materiales de Caral (piedra clara, adobe ocre) y en mucho espacio vacío. Lo memorable es la portada; todo lo demás es tranquilo y disciplinado.

## Colores

| Token | Hex | Uso |
| --- | --- | --- |
| `--piedra` | `#EDEBE6` | Fondo general |
| `--tinta` | `#1C1A17` | Texto principal, franja oscura, líneas fuertes |
| `--tinta-suave` | `#5E574D` | Texto secundario sobre fondo claro |
| `--linea` | `#D9D2C6` | Separadores finos |
| `--adobe` | `#9A5B2E` | Único color de acento sobre fondo claro (etiquetas, números) |
| `--adobe-claro` | `#D9A274` | Acento sobre fondo oscuro |
| `--piedra-oscura` | `#E4DDD1` | Marcadores de imagen |
| `--texto-sobre-oscuro` | `#C9BFB1` | Texto secundario sobre `--tinta` |

Todos los pares de texto y fondo cumplen contraste AA. No agregues colores nuevos.

## Tipografía

- **Instrument Serif** (regular): títulos, nombres de culturas y personajes, números del recorrido.
- **Hanken Grotesk** (400 y 500): texto, etiquetas, menú, enlaces, formularios.

Carga ambas con `next/font/google`. No uses cursivas para resaltar palabras sueltas dentro de un título.

| Nivel | Fuente | Escritorio | Móvil | Interlineado |
| --- | --- | --- | --- | --- |
| Título de portada | Instrument Serif | 92 px | 52 px | 0.98 |
| Título de sección | Instrument Serif | 52 px | 36 px | 1.08 |
| Nombre en lista | Instrument Serif | 34 px | 26 px | 1.1 |
| Texto | Hanken Grotesk 400 | 17–18 px | 17 px | 1.6 |
| Etiqueta | Hanken Grotesk 500 | 14 px | 14 px | 1.4, espaciado 0.02em |
| Detalle | Hanken Grotesk 400 | 14 px | 13 px | 1.5 |

- Etiquetas en mayúscula y minúscula, nunca todo en mayúsculas.
- Texto corrido con un máximo de 65 caracteres por línea.
- Una sola idea por título.

## Retícula y espacio

- Contenedor máximo de 1200 px, márgenes laterales de 40 px (20 px en móvil).
- Retícula de 12 columnas con 24 px de separación.
- Composición asimétrica: el título ocupa las columnas 1 a 7 y el texto de apoyo las columnas 9 a 12. En "La colección", imagen en columnas 1 a 6 y texto en 8 a 12.
- En móvil todo pasa a una sola columna.
- Espacio vertical entre secciones: 140 px en escritorio, 88 px en móvil.
- Escala de espaciado: 8, 12, 16, 20, 28, 40, 48, 64, 88, 140.
- Alineación siempre a la izquierda, salvo el número de edición en la lista de precios.

## Estructura de cada sección

Siempre en este orden: **etiqueta, título, texto y una sola acción**. Nunca dos acciones del mismo nivel en una sección.

## Componentes

- **Menú:** logotipo a la izquierda, enlaces a la derecha, sin fondo sobre la portada; al hacer scroll pasa a fondo `--piedra` con una línea `--linea` abajo.
- **Enlace de acción:** texto de etiqueta con subrayado de 1 px separado 4 px. Al pasar el cursor, el subrayado pasa a 2 px. Sin flechas ni íconos.
- **Botón** (solo en formularios): fondo `--tinta`, texto `--piedra`, alto mínimo de 48 px, esquinas de 2 px.
- **Fila del recorrido:** número en `--adobe`, nombre de la cultura, época y sitio, con una línea `--linea` debajo. Toda la fila es un enlace.
- **Marcador de imagen:** fondo `--piedra-oscura` con la etiqueta centrada en `--tinta-suave`.
- **Campo de formulario:** etiqueta visible encima, borde de 1 px `--tinta`, fondo blanco roto, alto mínimo de 48 px, mensaje de error debajo en texto.

## Movimiento

- Un solo momento orquestado: al cargar la portada, el título y el subtítulo aparecen con un fundido lento (unos 900 ms, uno tras otro).
- Nada de animaciones de entrada en cada sección ni efectos en cada tarjeta.
- Respeta `prefers-reduced-motion`: sin animación si el usuario lo pide.

## Lo que no se usa

Tarjetas redondeadas con sombra, degradados decorativos, íconos genéricos, emojis, flechas en los enlaces, etiquetas en mayúsculas, puntos medios para separar datos, numeración en secciones que no son una secuencia, palabras resaltadas en cursiva o en otro color dentro de los títulos, fuentes monoespaciadas, y textos de relleno como "experiencia única".
