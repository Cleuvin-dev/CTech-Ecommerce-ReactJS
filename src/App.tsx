import "./App.css";
import NotebookImg from "./assets/Notebook.png";
import cartImg from "./assets/cart.svg.svg";

function App() {
  return (
    <>
      <header className="ctech-header-client">
        <nav className="ctech-container">
          <h1>C-Tech ECommerce</h1>
          <div className="ctech-navbar-rigth">
            <div className="ctech-menu-items-container">
              <div className="ctech-menu-item">
                <img src={cartImg} alt="Carrinho de compra" />
              </div>
            </div>
            <a href="./confirmation.html">Entrar</a>
          </div>
        </nav>
      </header>
      <main>
        <section id="product-details-section" className="ctech-container">
          <div className="ctech-card ctech-mb20">
            <div className="ctech-product-details-top ctech-line-bottom">
              <img src={NotebookImg} alt="Notebook" />
            </div>
            <div className="ctech-product-details-bottom">
              <h3>R$ 5000,00</h3>
              <h4>Computador Gamer XT Pro</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                culpa consequuntur mollitia quia praesentium maiores molestias
                alias autem unde dolores voluptatibus nisi eum optio, explicabo
                reiciendis? Nobis ipsum blanditiis eveniet?
              </p>

              <div className="ctech-category-container">
                <div className="ctech-category">Eletronicos</div>
                <div className="ctech-category">Computadores</div>
              </div>
            </div>
          </div>
          /* Botões de compra e retorno ao inicio da pagina */
          <div className="ctech-btn-page-container">
            <div className="ctech-btn ctech-btn-blue ctech-mb20">Comprar</div>
            <div className="ctech-btn ctech-btn-white">Inicio</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
