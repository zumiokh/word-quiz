import Banner from "./components/Banner.jsx";
import Navbar from "./components/Navbar.jsx";
import WordCard from "./components/WordCard.jsx";
import Controller from "./components/Controller.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center p-3">
        <div className="w-full max-w-4xl overflow-hidden rounded-lg bg-stone-100">
          <Navbar />
          <WordCard />
          <Controller />
          <Footer />
        </div>
      </div>
      <Banner />
    </>
  );
}

export default App;
