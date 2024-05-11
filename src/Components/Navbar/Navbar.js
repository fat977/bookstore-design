import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.scss';
import logo from '../../assets/img/logo/kisspng-book-image-magic-author-portable-network-graphics-5c1ca352b2c6c4.9971151115453806907323.png';
import book1 from "../../assets/img/books/3z8425PbLIE44qteHf2HG2GVv1D9jx1SeeW9cYfw.jpg";
import $ from 'jquery';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const form = () => {

        $('.dropdown-menu form').on('click', function (event) {
            event.stopPropagation();
        });


        $(".register").on("click", function (event) {
            event.preventDefault();
            $("#login-form").hide("");
            $("#register-form").toggleClass('d-none');

        });

        $(".login").on("click", function (event) {
            event.preventDefault();
            $("#login-form").show("");
            $("#register-form").toggleClass('d-none');

        });

    }

    return (
        <nav className={scrolled ? 'scrolled bg-light navbar fixed container-fluid d-flex justify-content-around stickyTop align-items-center my-5 py-4 shadow' : 'container-fluid navbar d-flex justify-content-around align-items-center my-5'}>
            {/* logo with offcanvas */}
            <>
                <div className="d-flex menu">
                    <div className="container" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3 ms-3"></div>
                    </div>
                    <img src={logo} alt="logo" />
                </div>

                <div className="offcanvas offcanvas-start w-75" data-bs-dismiss="offcanvas" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h3 className="offcanvas-title" id="offcanvasExampleLabel">Book Store</h3>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul>
                            <li><Link className='navbar-link' to="/">Home</Link></li>
                            <li><Link className='navbar-link' to="/Category">Categories</Link></li>
                            <li><Link className='navbar-link' to="/about">About Us</Link></li>
                            <li><Link className='navbar-link' to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </>

            {/* search */}
            <div className="search">
                <input type="search" placeholder="Search" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            {/* search on sm screen */}
            <i className="fa-solid fa-magnifying-glass d-block d-md-none" data-bs-toggle="modal" data-bs-target="#myModal"></i>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="search">
                                <input type="search" placeholder="Search" />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* icons */}
            <div className="icons">
                <i className="fa-regular fa-heart me-3"></i>

                <a className="form-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" href="#"><i className="fa-regular fa-user me-3"></i></a>
                <div className="dropdown-menu me-0 ms-auto p-3">

                    <form action="#" id="login-form" >
                        <h3 className="text-center">Login</h3>
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="form-floating mt-3 mb-3">
                            <input type="text" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                            <label htmlFor="pwd">Password</label>
                        </div>
                        <div className="login_remember_box my-3 d-flex justify-content-between">
                            <div className="form-check mt-0">
                                <label className="form-check-label">Remember me</label>
                                <input className="form-check-input" type="checkbox" id="check1" name="option1"
                                    value="something" />
                            </div>
                            <a href="#" className="forget_password text-danger">
                                Forgot Password
                            </a>
                        </div>
                        <button type="submit" className="btn-login d-block w-100">SIGN IN</button>
                        <p className="text-center register mt-3" onClick={form} id="register-form-link">Create account</p>
                    </form>

                    <form action="#" className="d-none" id="register-form">
                        <h3 className="text-center">Register</h3>
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" className="form-control" id="f-name" placeholder="Enter First Name" name="f-name" />
                            <label htmlFor="f-name">First Name</label>
                        </div>
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" className="form-control" id="l-name" placeholder="Enter Last Name" name="l-name" />
                            <label htmlFor="l-name">Last Name</label>
                        </div>
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mt-3 mb-3">
                            <input type="text" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                            <label htmlFor="pwd">Password</label>
                        </div>

                        <button type="submit" className="btn-register d-block w-100">Register</button>
                        <p className="text-center login mt-3" id="login-form-link">Already have an account ?</p>
                    </form>
                </div>

                <span className="position-relative me-3" data-bs-toggle="offcanvas" href="#offcanvasExample1" role="button" aria-controls="offcanvasExample1">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span
                        className="position-absolute top-0  translate-middle badge rounded-pill bg-warning">1</span>
                </span>
            </div>

            {/* offcanvas of cart icon */}
            <div className="offcanvas offcanvas-end w-75" tabIndex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr className="w-75 d-block mx-auto" />
                <div className="offcanvas-body">
                    <div className="">
                        <div className="d-flex justify-content-start cast">
                            <img src={book1} alt="book-cart" className="w-25 img-fluid" />
                            <div className="cart-info ms-3">
                                <h6 className="">Extinct oriental man</h6>
                                <p className=""> 1 X $120.00 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-75 d-block mx-auto" />
                <div className="mx-3">
                    <div className="float-start">Total</div>
                    <div className="float-end">$120.00</div>
                </div>
                <div className='w-100 px-3 cart-buttons mb-4 mt-2 d-block mx-auto'>
                    <button type='button' className="me-5">Add to cart</button>
                    <button type='button'>Buy Now</button>
                </div>
            </div>
        </nav>

    )
}
