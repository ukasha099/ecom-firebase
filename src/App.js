import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AuthForm from "./pages/AuthForm";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext"; // <-- import CartProvider

function App() {
  const { user } = useAuth();

  return (
    <CartProvider> {/* ✅ Wrap the entire app with CartProvider */}
      <Router>
        {user && <Header />}
        <Routes>
          {!user ? (
            <>
              <Route path="/auth" element={<AuthForm />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
