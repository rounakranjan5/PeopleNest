import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import AuthComponent from "./components/AuthComponent";
import DashboardComponent from "./components/DashboardComponent";
import FeatureComponent from "./components/FeatureComponent";
import FooterComponent from "./components/FooterComponent";
import HeroContent from "./components/HeroContent";
import NavbarComponent from "./components/NavbarComponent";

const isAuthenticated = () => {
  try {
    return Boolean(JSON.parse(localStorage.getItem("peopleNestUser") || "null"));
  } catch {
    localStorage.removeItem("peopleNestUser");
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const Home = () => (
  <>
    <NavbarComponent />
    <HeroContent />
    <FeatureComponent />
    <FooterComponent />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <>
              <NavbarComponent minimal />
              <AuthComponent mode="login" />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <NavbarComponent minimal />
              <AuthComponent mode="signup" />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardComponent />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
