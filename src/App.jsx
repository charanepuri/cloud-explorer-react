import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <AppRoutes />

      <Footer />
    </>
  );
}

export default App;