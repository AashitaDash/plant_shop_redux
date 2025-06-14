import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="text-center p-10 bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('/bg.jpg')` }}>
      <h1 className="text-4xl font-bold mb-4">GreenLife Plants</h1>
      <p className="mb-4">We bring green into your life with a variety of healthy houseplants.</p>
      <button onClick={() => navigate("/products")} className="bg-green-500 text-white px-4 py-2 rounded">Get Started</button>
    </div>
  );
}

export default LandingPage;
