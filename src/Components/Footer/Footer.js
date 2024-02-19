import "../Footer/Footer.scss";
import logo from "../../assets/img/logo/kisspng-book-image-magic-author-portable-network-graphics-5c1ca352b2c6c4.9971151115453806907323.png";
export const Footer = () => {

    return (
        <section className="footer mt-5">
            <div className="bg-light px-5 py-5">
                <div className="row">
                    <div className="col-lg-2 text-center text-lg-start">
                        <h5>Categories</h5>
                        <ul>
                            <li><a href="">Horror</a></li>
                            <li><a href="">History</a></li>
                            <li><a href="">Biography</a></li>
                            <li><a href="">Science Fiction</a></li>
                            <li><a href="">Romance</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-7 text-center px-3 ps-lg-5 mt-5 mt-lg-0 center-content">
                        <img src={logo} alt="logo" className="img-fluid" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <span className="mt-3 text-center social">
                            <i className="fa-brands fa-facebook me-2"></i>
                            <i className="fa-brands fa-twitter me-2"></i>
                            <i className="fa-brands fa-instagram me-2"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </span>
                    </div>
                    <div className="col-lg-3 contact mt-5 mt-lg-0">
                        <h5 className="text-center">Contact</h5>
                        <div className="d-flex flex-column">
                            <div><i className="fa-solid fa-phone pe-3"></i> +365-458-3258</div>
                            <div><i className="fa-solid fa-envelope pe-3"></i>bookstore@gmail.com</div>
                            <div><i className="fa-solid fa-location-dot pe-3"></i>4096 N Highland St, Arlington, VA 32101, USA</div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer text-center text-white p-4">
                <h6>bookstore ©. All rights reserved.</h6>
            </div>
        </section>
    );
};
