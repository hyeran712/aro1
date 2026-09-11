import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandText from "../components/BrandText";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const menuItems = [
    {
      id: 1,
      category: "PLATED",
      image: "fish.png",
      title: "Seasonal Fish",
      desc: "Fresh Fish · Orzo · Rich Jus",
    },
    {
      id: 2,
      category: "PLATED",
      image: "food2.png",
      title: "Chef's Plate",
      desc: "Seasonal Ingredients · Sauce · Garnish",
    },
    {
      id: 3,
      category: "PLATED",
      image: "food4.png",
      title: "Signature Plate",
      desc: "Vegetables · Purée · House Sauce",
    },
    {
      id: 4,
      category: "PLATED",
      image: "food5.png",
      title: "Seasonal Course",
      desc: "Seasonal Produce · Herbs · Jus",
    },

    {
      id: 5,
      category: "PASTA",
      image: "pasta.png",
      title: "Fresh Pasta",
      desc: "Seasonal Sauce · Herbs · Cheese",
    },
    {
      id: 6,
      category: "PASTA",
      image: "pasta1.png",
      title: "Signature Pasta",
      desc: "Fresh Pasta · Rich Sauce · Garnish",
    },
    {
      id: 7,
      category: "PASTA",
      image: "risotto.png",
      title: "Seasonal Risotto",
      desc: "Rice · Seasonal Ingredients · Parmesan",
    },
    {
      id: 8,
      category: "PASTA",
      image: "noodle.png",
      title: "Seasonal Noodle",
      desc: "Noodle · Cream · Fresh Garnish",
    },
    {
      id: 9,
      category: "PASTA",
      image: "noodle1.png",
      title: "Signature Noodle",
      desc: "Handcrafted Sauce · Seasonal Topping",
    },

    {
      id: 10,
      category: "SALAD",
      image: "salad.png",
      title: "Seasonal Salad",
      desc: "Fresh Greens · Vegetables · Dressing",
    },
    {
      id: 11,
      category: "SALAD",
      image: "salad1.png",
      title: "Garden Salad",
      desc: "Seasonal Produce · Fresh Cheese · Herbs",
    },
    {
      id: 12,
      category: "SALAD",
      image: "salad2.png",
      title: "Chef's Salad",
      desc: "Vegetables · Protein · House Dressing",
    },
    {
      id: 13,
      category: "SALAD",
      image: "salad3.png",
      title: "Seasonal Garden",
      desc: "Fresh Produce · Sauce · Herbs",
    },
  ];

  const categories = ["ALL", "PLATED", "PASTA", "SALAD"];

  const filteredItems =
    activeCategory === "ALL"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header />

      <main className="menu-page">
        {/* =====================================
            MENU HERO
        ===================================== */}
        <section className="menu-hero">
          <div className="wrap">
            <div className="label">MENU</div>

            <h1>
              좋은 재료와 섬세한 조리로
              <br />
              완성한 <BrandText />의 메뉴입니다.
            </h1>

            <p>
              계절과 공간, 그리고 자리의 분위기에 맞춰 메뉴를 새롭게 구성합니다.
            </p>
          </div>
        </section>

        {/* =====================================
            MENU LIST
        ===================================== */}
        <section className="menu-gallery-section">
          <div className="wrap">
            {/* CATEGORY TAB */}
            <div className="menu-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category ? "menu-tab active" : "menu-tab"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* GRID */}
            <div className="menu-gallery-grid">
              {filteredItems.map((item, index) => (
                <article
                  key={item.id}
                  className={`menu-card ${
                    index === 0 ? "menu-card-featured" : ""
                  }`}
                >
                  <div
                    className="menu-image-wrap"
                    tabIndex={0}
                    role="group"
                    aria-label={item.title}
                    aria-describedby={`menu-description-${item.id}`}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/menu/${item.image}`}
                      alt={item.title}
                      className="menu-image"
                    />
                    <div className="menu-image-overlay">
                      <p
                        id={`menu-description-${item.id}`}
                        className="menu-image-description"
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="menu-card-copy">
                    <span className="menu-category">{item.category}</span>

                    <h2>{item.title}</h2>

                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Menu;
