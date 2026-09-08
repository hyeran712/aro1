import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
              신선한 식재료로
              <br />
              정성껏 준비한 메뉴입니다.
            </h1>

            <p>
              베뉴와 부부의 결에 맞춰 매번 새롭게 구성됩니다. 아래는 참고용 샘플
              메뉴입니다.
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
                  <div className="menu-image-wrap">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/menu/${item.image}`}
                      alt={item.title}
                      className="menu-image"
                    />
                  </div>

                  <div className="menu-card-copy">
                    <span className="menu-category">{item.category}</span>

                    <h2>{item.title}</h2>

                    <p>{item.desc}</p>
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
