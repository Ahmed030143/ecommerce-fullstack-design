# ecommerce-fullstack-design

**Developer:** Rafique Ahmed

Backend Live API: https://ecommerce-fullstack-design-production-493c.up.railway.app/

Live Demo: https://ecommerce-fullstack-design-alpha.vercel.app/

This is a complete **eCommerce web application** built with **React (frontend)** and **Node.js/Express + MongoDB (backend)**.  
The project follows a professional design workflow and includes **user authentication, admin dashboard, product search & filter, cart & checkout system**, and fully responsive UI.  

---

## 🚀 Features

### User Features
- Signup and login with **JWT authentication**
- Browse products and categories
- Add/remove/view items in cart
- Search and filter products
- Responsive UI for desktop and mobile

### Admin Features
- Admin login
- Add, edit, delete products
- Manage categories
- View orders

### Other Features
- RESTful API backend
- Zustand for frontend state management
- Cloudinary integration for product images
- Fully responsive design
- Ready for deployment

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS, Zustand  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Deployment:** Railway (backend), Vercel (frontend)  
- **Version Control:** Git & GitHub

---

## ⚙️ Environment Variables (`.env`)

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
VITE_API_URL=https://ecommerce-fullstack-design-production-493c.up.railway.app/


📂 Project Structure
ecommerce-fullstack-design/
├── backend/           # Node.js + Express server
│   ├── models/        # Database schemas
│   ├── routes/        # API routes
│   └── server.js      # Entry point
├── frontend/          # React app
│   ├── components/    # React components
│   ├── pages/         # Pages (Home, Login, Cart, etc.)
│   └── App.js
├── README.md
└── .gitignore

💻 Run Locally

Frontend
cd frontend
npm install
npm run dev

Backend
cd backend
npm install
npm run dev

🔗 Live Links

Backend Live API: https://ecommerce-fullstack-design-production-493c.up.railway.app/

Live Demo (Frontend): https://ecommerce-fullstack-design-alpha.vercel.app/



