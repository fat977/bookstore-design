import "../Sale/Sale.scss";
import img from "../../assets/img/sale/kisspng-book-stock-photography-clip-art-vector-background-books-5aae4d0b1dd4c1.5261269815213724271222.png";
export const Sale = () => {
    
    return (
        <section className="sale my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 my-5 offer-details">
                        <h3>Special Offer</h3>
                        <h1 className="offer-value p-2">50% OFF</h1>
                        <h3>Grab your first book free</h3>
                        <button className="offer-button mt-3">Shop Now</button>
                    </div>
                    <div className="col-lg-6">
                        <img src={img} alt="sale-img" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
