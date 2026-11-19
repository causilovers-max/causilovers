# Plantilla de sitio web para emprendimientos (3.° y 4.° de secundaria)

Esta plantilla muestra **tus productos con precios** y un botón de **contacto por WhatsApp**.
**No necesitas programar:** solo cambias 2 archivos de texto y subes tus imágenes.

> 🔒 Tu sitio será **público en internet**. Usa **datos ficticios** o el número de contacto que te indique tu docente.
> No publiques tu número personal, tu dirección ni datos de otras personas.

## Qué vas a cambiar

| Archivo o carpeta | Qué contiene |
|---|---|
| `src/data/marca.json` | Nombre, eslogan, colores, fuentes, textos y contacto |
| `src/data/productos.json` | Tus productos: nombre, descripción, precio e imagen |
| `public/logo.svg` (o `.png`) | Tu logo |
| `public/productos/` | Las fotos de tus productos |

No cambies nada más.

## Paso 1. Crea tu copia

1. Entra a la dirección de la plantilla que te dio tu docente.
2. Pulsa **Use this template** (*Usar esta plantilla*) → **Create a new repository**.
3. Ponle un nombre sin espacios ni tildes (ejemplo: `mi-tienda`) y elige **Public**.
4. Pulsa **Create repository**.

## Paso 2. Activa la publicación (una sola vez)

1. En tu repositorio entra a **Settings** → **Pages**.
2. En **Source**, elige **GitHub Actions**.

## Paso 3. Cambia tus datos

1. Abre `src/data/marca.json` y pulsa el **lápiz** (✏️ *Edit this file*).
2. Cambia **solo lo que está entre comillas** a la derecha de cada dato. No borres comillas, comas ni llaves.
3. Pulsa **Commit changes** → **Commit changes** otra vez.
4. Repite con `src/data/productos.json`.

**Cómo escribir los datos:**

- **Colores:** con `#` y 6 caracteres, por ejemplo `"#1F6F5B"`. Usa los colores de tu logo.
- **Fuentes:** el nombre exacto de una fuente de [Google Fonts](https://fonts.google.com) que tenga **Regular y Bold** (ejemplo: `"Poppins"`).
- **Esquinas:** `"rectas"`, `"suaves"` o `"redondas"`.
- **WhatsApp:** `51` + 9 dígitos, sin espacios ni `+` (ejemplo: `"51900000000"`). Usa el número que te indique tu docente.
- **Precio:** número **sin comillas** y con punto decimal (ejemplo: `12.5`).
- **Productos:** copia un bloque completo `{ ... }`, pégalo debajo y sepáralos con una coma. Máximo 12.

## Paso 4. Sube tus imágenes

1. Entra a la carpeta `public/productos/`.
2. Pulsa **Add file** → **Upload files**, arrastra tus fotos y pulsa **Commit changes**.
3. En `productos.json`, escribe el **nombre exacto** del archivo (ejemplo: `"productos/pan-integral.jpg"`).
4. Para el logo, sube tu archivo a la carpeta `public/` y escribe su nombre en `marca.json`, en `"logo"`.

**Consejos para las imágenes:**

- Usa nombres en minúscula, sin espacios ni tildes: `pan-integral.jpg`.
- Fotos de **menos de 300 KB** y con proporción **4:3** (horizontales).
- Que sean fotos reales de **tu** producto, tomadas con luz natural.

## Paso 5. Mira tu sitio

1. Entra a la pestaña **Actions** de tu repositorio: verás el proceso de publicación.
2. Cuando aparezca ✅, tu sitio estará en:
   `https://TU-USUARIO.github.io/NOMBRE-DE-TU-REPOSITORIO/`
3. Si aparece ❌, abre el proceso en rojo: el mensaje te dice **qué dato corregir** (por ejemplo, un color mal escrito o una imagen que no se encuentra).

## Antes de entregar (lista de cotejo)

- ☐ Cambié el nombre, el eslogan, los colores y las fuentes.
- ☐ Puse mi logo.
- ☐ Todos mis productos tienen **foto real, descripción y precio en soles**.
- ☐ Los textos son verdaderos (si usé IA, los revisé y los corregí).
- ☐ El botón de WhatsApp abre el chat correcto (con el número que indicó mi docente).
- ☐ Abrí mi sitio en el celular y se ve bien.
- ☐ Probé el sitio con 2 o 3 personas y apliqué una mejora.
- ☐ Envié el enlace de mi sitio a mi docente.

---

## Notas para el docente

**Publicar la plantilla**

1. Cree un repositorio **público** con estos archivos y, en *Settings*, active **Template repository**.
2. Haga una **prueba completa con una cuenta nueva** antes de la clase: usar la plantilla, activar Pages con *GitHub Actions*, editar, subir una imagen y ver el sitio publicado.
3. Verifique en la documentación de Astro la versión vigente de la acción `withastro/action` (hoy en `publicar.yml` figura `@v3`) y de `actions/deploy-pages`.
4. GitHub Pages en repositorios **privados** puede requerir un plan de pago; por eso los repositorios de los estudiantes deben ser **públicos**.

**Qué hace la plantilla por usted**

- Calcula sola la dirección (`site` y `base`) para GitHub Pages desde `astro.config.mjs`.
- Revisa los datos al publicar y muestra mensajes en español: colores mal escritos, precios con comillas, número de WhatsApp inválido, imágenes que no existen, fuentes que no están en Google Fonts con Regular y Bold.
- Elige sola el color del texto (blanco o negro) sobre los colores de marca, para que siempre se lea. Avisa si el texto y el fondo contrastan poco.
- Cada producto tiene su botón **Pedir por WhatsApp** con el nombre y el precio en el mensaje.

**Probar en su computadora** (opcional; requiere Node.js 18.20+ o 20+)

```bash
npm install
npm run dev
```

**Privacidad:** consulte la política del colegio y, si corresponde, la autorización de los padres antes de que los estudiantes creen cuentas y publiquen sitios. Pida siempre datos de contacto ficticios o del aula.
