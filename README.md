# 📦 Nexus Product API – Prueba Técnica Backend

API desarrollada con **NestJS**.  
Permite buscar productos, ver el detalle de un producto y almacenar un historial persistente de los últimos 5 productos visitados.

---

## 🚀 Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- [Swagger](https://swagger.io/) para documentación
- [Axios](https://www.npmjs.com/package/axios) para peticiones HTTP
- `fs` para almacenamiento persistente en archivo JSON

---

## 🧩 Estructura del Proyecto

<pre>
src/
├── products/
│   ├── controllers/products.controller.ts
│   ├── services/products.service.ts
│   └── interfaces/product.interface.ts
├── history/
│   ├── history.service.ts
│   └── history.json
├── app.module.ts
└── main.ts

---

## 📥 Instalación

1. Clona el repositorio:
\`\`\`bash
git clone https://github.com/tuusuario/nexus-product-api.git
cd nexus-product-api
\`\`\`

2. Instala dependencias:
\`\`\`bash
npm install
\`\`\`

3. Asegúrate de crear el archivo \`src/history/history.json\` con contenido vacío:
\`\`\`json
[]
\`\`\`

---

## ▶️ Ejecución del servidor

\`\`\`bash
npm run start:dev
\`\`\`

El servidor estará corriendo en:  
\`\`\`
http://localhost:3000
\`\`\`

---

## 📚 Documentación Swagger

Disponible automáticamente al iniciar el servidor:  
👉 \`http://localhost:3000/api\`

---

## 🧪 Endpoints disponibles

| Método | Endpoint            | Descripción                                  |
|--------|---------------------|----------------------------------------------|
| GET    | \`/search?q=term\`    | Busca productos según término de búsqueda    |
| GET    | \`/products/:id\`     | Devuelve el detalle del producto por ID      |
| GET    | \`/history\`          | Devuelve los últimos 5 productos visitados   |

> **Nota:** El historial se actualiza **solo cuando visitas un producto por su ID**.

---

## ✅ Criterios cumplidos

- [x] API funcional en NestJS
- [x] Documentación Swagger disponible
- [x] Código limpio y organizado
- [x] Historial persistente con `fs`
- [x] Sin autenticación, conforme a requisitos

---

## 👨‍💻 Autor

**Alexi Lobos Rojas**  
📧 loboalexis2001@gmail.com

---
