import Notebook from "../../assets/Notebook.png";
import "./styles.css";

export default function CatalogCard() {
  return (
    <div className="ctech-card">
      <div className="ctech-catalog-card-top ctech-line-bottom">
        <img src={Notebook} alt="Notebook" />
      </div>
      <div className="ctech-catalog-card-bottom">
        <h3>R$ 5.000,00</h3>
        <h4>Notebook Dell Inspiron 20 32GB Ram i7</h4>
      </div>
    </div>
  );
}
