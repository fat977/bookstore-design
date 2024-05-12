import "../Services/Service.scss";
export const Service = () => {
    
    return (
        <section className="service my-5" style={{overflowX : "hidden"}}>
            <div className="container">
                <div className="row text-center py-5">
                    <div className="col-6 col-lg-3 mt-3">
                        <i className="fa-solid fa-van-shuttle mb-4"></i>
                        <h4>Free Shipping</h4>
                    </div>
                    <div className="col-6 col-lg-3 mt-3">
                        <i className="fa-solid fa-money-bill mb-4"></i>
                        <h4>Return Policy</h4>
                    </div>
                    <div className="col-6 col-lg-3 mt-3">
                        <i className="fa-solid fa-headphones mb-4"></i>
                        <h4>Online Support</h4>
                    </div>
                    <div className="col-6 col-lg-3 mt-3">
                        <i className="fa-solid fa-gift mb-4"></i>
                        <h4>Free gift box</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};
