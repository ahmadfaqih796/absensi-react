import "../../assets/css/about.css";
import yaqub from "../../assets/image/yaqub.jpeg";
import faqih from "../../assets/image/faqih.jpeg";
import samuel from "../../assets/image/samuel.jpeg";
import indra from "../../assets/image/indra.jpeg";

const About = () => {
  return (
    <section>
      <h2 className="h2">ABOUT KELOMPOK 4</h2>
      <h4 className="h4">TUGAS AKHIR - QIHTOON</h4>

      <div className="g1">
        <div className="gallery">
          <a target="_blank" href="yaqub.jpeg">
            <img src={yaqub} alt="yaqub" width="200" height="200" />
          </a>
          <div className="desc">
            <h5 className="text"> Yacob Pratama </h5>
            <p className="text">Email : yaqubhdn@gmail.com </p>
            <p className="text">Whatsapp : +62 877-2983-9645 </p>
          </div>
        </div>
      </div>

      <div className="g2">
        <div className="gallery">
          <a target="_blank" href="faqih.jpeg">
            <img src={faqih} alt="faqih" width="200" height="200" />
          </a>
          <div className="desc">
            <h5 className="text"> Ahmad Faqih</h5>
            <p className="text">Email : ahmadfaqih796@gmail.com </p>
            <p className="text">Whatsapp : +62 821-8277-1538 </p>
          </div>
        </div>
      </div>

      <div className="g3">
        <div className="gallery">
          <a target="_blank" href="samuel.jpeg">
            <img src={samuel} alt="samuel" width="200" height="200" />
          </a>
          <div className="desc">
            <h5 className="text"> Samuel </h5>
            <p className="text">Email : samuelsdavilantinovn@gmail.com </p>
            <p className="text">Whatsapp : +62 896-5705-5232 </p>
          </div>
        </div>
      </div>

      <div className="g4">
        <div className="gallery">
          <a target="_blank" href="indra.jpeg">
            <img src={indra} alt="indra" width="200" height="200" />
          </a>
          <div className="desc">
            <h5 className="text"> Indra Cj</h5>
            <p className="text">Email : indracjy@gmail.com </p>
            <p className="text">Whatsapp : +62 877-8457-3407 </p>
          </div>
        </div>
      </div>

      {/* <div className="gallery">
              <a target="_blank" href="img_lights.jpg">
                <img src={indra} alt="Northern Lights" width="200" height="200"/>
              </a>
              <div className="desc">Add a description of the image here</div>
            </div>
            <div className="gallery">
              <a target="_blank" href="img_mountains.jpg">
                <img src={samuel} alt="Mountains" width="200" height="200"/>
              </a>
              <div className="desc">Add a description of the image here</div>
            </div> */}
    </section>
  );
};
export default About;
