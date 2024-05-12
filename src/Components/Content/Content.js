import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Content/content.scss";
import Books from "../Latest-Published/books";
import { useState } from "react";
export const Content = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [items, setItems] = useState(Books);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = Books.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updateItems);
    setActive(true);
  };

  return (
    <section className="best-selling" style={{overflowX : "hidden"}}>
      <div className="container">
        <div className="">
          <h2>Best-Selling Books</h2>
          <Carousel
            responsive={responsive}
            arrows={false}
            showDots={true}
            renderDotsOutside={true}
            autoPlay={true}
            infinite={true}
            className="owl-carousel owl-theme best-selling-slider"
          >
            {items.map((elem) => {
              const { id, name, image, price, sale, value } = elem;
              return (
                <div className="item mx-4" key={id}>
                  <img src={image} alt={image}/>
                  <div className="options">
                    <i className="fa-solid fa-cart-shopping me-3"></i>
                    <i className="fa-regular fa-heart me-3"></i>
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="details  mt-3">
                    <h5>{name}</h5>
                    <span className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star-half-stroke"></i>
                    </span>
                    <div className="price">
                      <span>{price}</span>
                    </div>
                    <div className="sale">
                      <span className="badge bg-secondary text">{sale}</span>
                      <span className="badge bg-secondary value">{value}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
