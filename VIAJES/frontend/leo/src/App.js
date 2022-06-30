import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NovedadesPage from "./pages/NovedadesPage";
import NosotrosPage from "./pages/NosotrosPage";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <Header/>

<BrowserRouter>
<Nav/>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="nosotros" element={<NosotrosPage />} />
  <Route path="novedades" element={<NovedadesPage />} />
  <Route path="contacto" element={<ContactoPage />} />
</Routes>
</BrowserRouter>
      
      <Footer/>
    </div>
  );
}
export default App;