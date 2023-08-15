import "./styles.css";
import Header from "../../component/Header";
import SectionCar from "../../component/SectionCar";
import SectionComment from "../../component/SectionComment";

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
        <div className="dsct-container-comments">
          <div className="dsct-section-card-title">
            <h2>O que estão dizendo</h2>
          </div>
          <SectionComment />
          <SectionComment />
          <SectionComment />
          <SectionComment />
          <SectionComment />
        </div>
      </main>
    </>
  );
}
