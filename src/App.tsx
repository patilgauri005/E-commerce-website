import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">About Page</h1></div>} />
                <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">Contact Page</h1></div>} />
                <Route path="/profile" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">Profile Page</h1></div>} />
                <Route path="/orders" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">Orders Page</h1></div>} />
                <Route path="/wishlist" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">Wishlist Page</h1></div>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;