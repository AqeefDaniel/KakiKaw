# Kaki Kaw 🛍️

A modern, full-featured e-commerce web application built with React and Firebase. Kaki Kaw provides a seamless shopping experience with product browsing, cart management, user authentication, and order tracking.

## ✨ Features

- **Product Catalog**: Browse through a comprehensive collection of products with search and filter capabilities
- **Product Details**: View detailed product information including images, descriptions, and pricing
- **Shopping Cart**: Add, remove, and manage products in your cart with real-time updates
- **User Authentication**: Secure login and registration system powered by Firebase
- **Order Management**: Place orders and track your order history
- **Responsive Design**: Fully responsive UI that works seamlessly across all devices
- **Loading Screen**: Elegant loading animation for better user experience
- **Toast Notifications**: Real-time feedback for user actions
- **Newsletter Subscription**: Stay updated with the latest products and offers

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern UI library
- **Vite 6.0.5** - Fast build tool and development server
- **React Router DOM 7.1.1** - Client-side routing
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **Firebase 12.6.0** - Backend services (Authentication, Database)
- **FontAwesome** - Icon library
- **React Toastify** - Toast notifications

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd KakiKaw
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database
   - Copy your Firebase configuration
   - Update `src/config/firebase.js` with your Firebase credentials

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
KakiKaw/
├── public/              # Static assets
│   └── logo.jpg        # Application logo
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductItem.jsx
│   │   ├── CartTotal.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── NewsLetterBox.jsx
│   │   ├── OurPolicy.jsx
│   │   ├── Title.jsx
│   │   ├── NewArrival.jsx
│   │   └── YouMayLike.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Collection.jsx
│   │   ├── Product.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── PlaceOder.jsx
│   │   ├── Orders.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── config/         # Configuration files
│   │   └── firebase.js # Firebase configuration
│   ├── context/        # React Context for state management
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── backend/            # Backend structure (for future implementation)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # TailwindCSS configuration
├── eslint.config.js    # ESLint configuration
└── package.json        # Project dependencies and scripts
```

## 🚀 Usage

### For Users
1. **Browse Products**: Navigate to the Collection page to view all available products
2. **Search**: Use the search bar to find specific products
3. **View Details**: Click on any product to see detailed information
4. **Add to Cart**: Select size and quantity, then add items to your cart
5. **Checkout**: Review your cart and proceed to place an order
6. **Track Orders**: View your order history in the Orders page

### For Developers
- The application uses React Router for navigation
- State management is handled through React Context
- Firebase handles authentication and data storage
- TailwindCSS provides responsive styling
- Component-based architecture for easy maintenance and scalability

## 🔐 Firebase Configuration

To set up Firebase:

1. Create a new Firebase project
2. Enable Email/Password authentication
3. Create a Firestore database
4. Add your web app to get configuration credentials
5. Update `src/config/firebase.js` with your credentials:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For any inquiries or support, please visit the Contact page in the application.

---

Built with ❤️ using React and Firebase
