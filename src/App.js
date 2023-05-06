import "./App.css";
import { Footer, Navbar } from "./components";
import AppRoutes from "./utils/AppRoutes";

function App() {
  return (
    <>
    <div className="app">
      <Navbar />
      <AppRoutes />
      <Footer />
      </div>
    </>
  );
}

export default App;
