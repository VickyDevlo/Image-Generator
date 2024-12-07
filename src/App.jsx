import { Footer, Navbar } from "./components";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-100 to-orange-100">
      <Navbar />
      <div className="container mx-auto">
        <Layout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
