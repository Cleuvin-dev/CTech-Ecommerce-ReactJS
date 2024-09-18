import NotebookImg from "../../assets/Notebook.png";
import "./styles.css";

export default function ProductDetailsCard() {
  return (
    <div className="ctech-card ctech-mb20">
      <div className="ctech-product-details-top ctech-line-bottom">
        <img src={NotebookImg} alt="Notebook" />
      </div>
      <div className="ctech-product-details-bottom">
        <h3>R$ 5000,00</h3>
        <h4>Computador Gamer XT Pro</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque culpa
          consequuntur mollitia quia praesentium maiores molestias alias autem
          unde dolores voluptatibus nisi eum optio, explicabo reiciendis? Nobis
          ipsum blanditiis eveniet?
        </p>

        <div className="ctech-category-container">
          <div className="ctech-category">Eletronicos</div>
          <div className="ctech-category">Computadores</div>
        </div>
      </div>
    </div>
  );
}
