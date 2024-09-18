import cartIcon from "../../assets/cart.svg.svg";
import "./styles.css";

export default function HeaderClient() {
  return (
    <header className="ctech-header-client">
      <nav className="ctech-container">
        <h1>C-Tech ECommerce</h1>
        <div className="ctech-navbar-rigth">
          <div className="ctech-menu-items-container">
            <div className="ctech-menu-item">
              <img src={cartIcon} alt="Carrinho de compra" />
            </div>
          </div>
          <a href="./confirmation.html">Entrar</a>
        </div>
      </nav>
    </header>
  );
}
