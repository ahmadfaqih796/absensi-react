import "../../assets/css/about.css";
import yaqub from "../../assets/image/yaqub.jpeg";
import faqih from "../../assets/image/faqih.jpeg";
import samuel from "../../assets/image/samuel.jpeg";
import indra from "../../assets/image/indra.jpeg";
import NavigasiMonitor from "./Navigasi";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <NavigasiMonitor />
      <main className="konten">
        <legend>Kelompok 4</legend>
      </main>
      <section className="flex-gallery">
        <div className="gallery">
          <img src={yaqub} alt="yaqub" />
          <div className="desc">
            <h5 className="text"> Yacob Pratama </h5>
            <p className="text">Email : yaqubhdn@gmail.com </p>
            <p className="text">Whatsapp : +62 877-2983-9645 </p>
          </div>
        </div>
        <div className="gallery">
          <img src={faqih} alt="faqih" />
          <div className="desc">
            <h5 className="text"> Ahmad Faqih</h5>
            <p className="text">Email : ahmadfaqih796@gmail.com </p>
            <p className="text">Whatsapp : +62 821-8277-1538 </p>
          </div>
        </div>
        <div className="gallery">
          <img src={samuel} alt="samuel" />
          <div className="desc">
            <h5 className="text"> Samuel </h5>
            <p className="text">Email : samuelsdavilantinovn@gmail.com </p>
            <p className="text">Whatsapp : +62 896-5705-5232 </p>
          </div>
        </div>
        <div className="gallery">
          <img src={indra} alt="indra" />
          <div className="desc">
            <h5 className="text"> Indra Cj</h5>
            <p className="text">Email : indracjy@gmail.com </p>
            <p className="text">Whatsapp : +62 877-8457-3407 </p>
          </div>
        </div>
      </section>
			<Footer />
    </>
  );
};
export default About;
