import "./styles.css";
import Header from "../../component/Header";
import SectionCar from "../../component/SectionCar";

export default function ProductDetailsCommets() {
  return (
    <>
      <Header />
      <main>
        <div className="dsct-section-card-title">
          <h2>Venha nos visitar</h2>
        </div>
        <div className="dsct-container">
          <SectionCar />
          <SectionCar />
          <SectionCar />
        </div>
      </main>
    </>
  );
}
