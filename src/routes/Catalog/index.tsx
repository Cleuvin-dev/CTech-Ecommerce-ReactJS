import ButtonNextPage from "../../components/ButtonNextPage";
import CatalogCard from "../../components/CatalogCard";
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import "./styles.css";

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="ctech-container">
          <SearchBar />
          <div className="ctech-catalog-cards ctech-mb20 ctech-mt20"></div>
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
        </section>

        <ButtonNextPage />
      </main>
    </>
  );
}
