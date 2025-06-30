import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { authUser } = useSelector((state) => state.user);

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-between text-white relative">

      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-0" />

      {/* Navbar */}
      <nav className="w-full max-w-7xl flex justify-between items-center p-4 z-10">
        <h1 className="text-3xl font-bold tracking-wide">🔥 BaatChit</h1>

        <div className="flex items-center space-x-4">
          {!authUser ? (
            <>
              <Link
                to="/login"
                className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition"
              >
                Signup
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white text-purple-600 flex justify-center items-center font-bold text-lg">
                {authUser.username[0]?.toUpperCase()}
              </div>
              <span className="text-lg font-medium">{authUser.username}</span>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center items-center text-center px-6 z-10">
        <div className="bg-black bg-opacity-30 backdrop-blur-lg p-10 rounded-xl max-w-xl">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
            Talk Freely. Stay Close.
          </h2>
          <p className="text-[#baa840] text-lg mb-8">
            Experience a refreshing way to chat, bond, and share—only on Baatchit.
          </p>
          {!authUser && (
            <Link
              to="/signup"
              className="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-200 transition"
            >
              Get Started
            </Link>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-4 text-white/70 text-sm z-10">
        © 2025 BaatChit. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
