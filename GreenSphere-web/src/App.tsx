import { Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Products from './pages/Products/Products';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';
import SignInPage from './pages/SignIn/SignInPage';
import Welcome from './pages/Welcome/Welcome';
import { Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Plant from './pages/Plant/Plant';
import { useEffect } from 'react';
function App() {
  return (
    <>
      <SignedOut>
        <Navigate to="/" replace />
        <Routes>
          <Route path="/" element={<SignInPage />} />
        </Routes>
      </SignedOut>
      <SignedIn>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/plants/:plantId" element={<Plant />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SignedIn>
    </>
  );
}

export default App;
