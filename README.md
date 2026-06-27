# React Routing Application

A simple React application built using **React Router DOM**, demonstrating client-side routing, nested routing, reusable components, and a custom 404 page. The project is styled with **Tailwind CSS** and includes a common navigation bar and footer.

---

## 🚀 Features

- Home Page
- About Page
- Service Page
- Product Page
- Nested Product Routes
  - Men
  - Women
  - Kid
- Custom 404 Not Found Page
- Reusable Navigation Bar
- Reusable Footer
- Tailwind CSS Styling
- SCSS Support

---

## 🛠️ Technologies Used

- React
- Vite
- React Router DOM
- Tailwind CSS
- Sass (SCSS)

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── NavBar.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Sarvice.jsx
│   ├── Product.jsx
│   ├── Men.jsx
│   ├── Women.jsx
│   ├── Kid.jsx
│   └── Notfound.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📌 Routing Structure

| Route | Description |
|--------|-------------|
| `/` | Home Page |
| `/about` | About Page |
| `/sarvice` | Service Page |
| `/product` | Product Page |
| `/product/men` | Men's Products |
| `/product/women` | Women's Products |
| `/product/kid` | Kid's Products |
| `*` | Custom 404 Not Found Page |

---

## 📚 React Router Concepts Covered

- BrowserRouter
- Routes
- Route
- Link
- Nested Routes
- Outlet
- Wildcard Route (`*`)

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/react-routing-app.git
```

Navigate to the project folder

```bash
cd react-routing-app
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 📜 Available Scripts

Start the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

---

## 🎯 Learning Outcomes

This project demonstrates:

- Client-side routing with React Router DOM
- Creating reusable React components
- Implementing nested routes using `Outlet`
- Navigation using `Link`
- Handling invalid routes with a custom 404 page
- Organizing a React project into reusable components and pages
- Styling with Tailwind CSS and SCSS

---

## 👨‍💻 Author

**Your Name**

GitHub: https://github.com/your-username

---

## 📄 License

This project is intended for learning and educational purposes.
