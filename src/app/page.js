import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/styles.min.css";
import "../assets/css/custom.css";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Developers from "@/components/developer/Developers";

export default function Home() {
  return (
    <>
      <Header />
      <Developers />
      <Footer />
    </>
  );
}
