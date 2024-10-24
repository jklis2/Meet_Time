import HomeContent from "../containers/HomeContent";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeContent />
      <Footer />
    </div>
  );
}
