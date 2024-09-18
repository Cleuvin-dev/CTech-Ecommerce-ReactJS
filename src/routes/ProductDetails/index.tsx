import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductCategory from "../../components/ProductCategory";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import "./styles.css";

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="ctech-container">
          <div className="ctech-btn-page-container">
            <ProductDetailsCard />
            <ButtonPrimary />
            <ButtonInverse />
            <ProductCategory />
          </div>
        </section>
      </main>
    </>
  );
}
