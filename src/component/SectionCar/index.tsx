import "./styles.css";
import carImg from "../../assets/car.png";

export default function SectionCar() {
  return (
    <section id="cars">
      <div className="dsct-card-description dsct-mgbottom">
        <img src={carImg} alt="Carro" />
        <p>Lorem ipsum dolor</p>
      </div>
    </section>
  );
}
