# Gestor de Usuarios con React + Vite

[![Deploy to GitHub Pages](https://github.com/eber2k1/demo04/actions/workflows/deploy.yml/badge.svg)](https://github.com/eber2k1/demo04/actions/workflows/deploy.yml)

Aplicación web desarrollada con React, Vite y Tailwind CSS para visualizar y gestionar usuarios. La aplicación consume datos de la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## 🌐 Demo

La aplicación está desplegada en GitHub Pages: [Ver Demo](https://eber2k1.github.io/demo04/)

## 🚀 Características

- Lista de usuarios con información básica
- Vista detallada de cada usuario
- Interfaz responsiva con Tailwind CSS
- Gestión de estado con React Context API
- Carga asíncrona de datos

## 🛠️ Tecnologías

- ⚛️ React 19
- 🚀 Vite
- 💅 Tailwind CSS
- 🔄 React Hooks
- 🌐 Fetch API
- 🏗️ Context API

## 📦 Estructura del Proyecto

```
src/
├── componentes/         # Componentes reutilizables
│   ├── ListUser.jsx     # Vista detallada de un usuario
│   └── ListUsers.jsx    # Lista de usuarios
├── context/             # Contextos de React
│   ├── UserContext.jsx  # Contexto para el usuario
│   └── UserProvider.jsx # Proveedor del contexto
├── hooks/               # Custom Hooks
│   └── useUser.js       # Hook para acceder al contexto
├── pages/               # Páginas
│   └── home.jsx         # Página principal
└── services/            # Servicios API
    └── apiUsers.js      # Llamadas a la API de usuarios
```

## 🚀 Empezando

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/eber2k1/demo04.git
   cd demo04
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## 📚 Uso

1. La aplicación muestra una lista de usuarios en el panel izquierdo
2. Haz clic en el botón "Ver" de cualquier usuario para ver sus detalles en el panel derecho
3. Los detalles incluyen información personal, dirección y datos de la empresa