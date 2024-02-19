
import '../BookDetails/BookDetails.scss';
import book1 from "../../assets/img/books/3z8425PbLIE44qteHf2HG2GVv1D9jx1SeeW9cYfw.jpg";
import author from "../../assets/img/authors/l0EI1DRUksti7Llos071xkEyvKkIkeJ1xKuLgXEM.jpg";
import user from "../../assets/img/user/149071.png";
import { useState } from 'react';

export const BookDetails = () => {
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        if (amount > 1) {
            setAmount(prevAcount => prevAcount - 1);
        }
    }

    const setIncrease = () => {
        if (amount < 10) {
            setAmount(prevAcount => prevAcount + 1);
        }
    }

    return (
        <div className='container'>
            <div className="row align-items-start mx-0 ms-lg-5 py-5">
                <div className="col-lg-4 col-12 col-md-6 book-img">
                    <img src={book1} className=""
                        alt="poster" />
                </div>
                <div className="col-lg-8 details mt-5 mt-lg-0">
                    <h1>Extinct eastern male</h1>
                    <span className='stars'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </span>
                    <span className='text-muted mx-2'>(one customer review)</span>
                    <div className='price my-2'>
                        <span>$120.00</span>
                        <span className='text-muted ms-2'><del>$200.00</del></span>
                    </div>
                    <ul className="ps-0">
                        <li className="mt-3 mb-3"><span className="badge text-bg-warning p-2 mb-3 me-3"><b>Horror</b></span></li>
                        <li><b>Author</b> : Mohamed Taha</li>
                        <li className="my-2"><b>Release Date</b> : Jan 2010</li>
                        <li className="my-2"><b>No.of pages </b> : 250 </li>
                    </ul>
                    <div className='row'>
                        <div className='col-5 col-md-4'>
                            <div className="input-group">
                                <button type='button' onClick={setDecrease} className='input-group-text'>-</button>
                                <div className='form-control text-center'>{amount}</div>
                                <button type='button' onClick={setIncrease} className='input-group-text'>+</button>
                            </div>
                        </div>
                        <div className='row buttons my-4'>
                            <button type='button'>Add to cart</button>
                            <button type='button'>Buy Now</button>
                        </div>
                    </div>


                </div>
            </div>
            <div className="container py-3">
                <ul className="nav nav-tabs mb-3 justify-content-center" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link active"
                            id="ex1-tab-1"
                            data-bs-toggle="tab"
                            href="#ex1-tabs-1"
                            role="tab"
                            aria-controls="ex1-tabs-1"
                            aria-selected="true">Description</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="ex1-tab-2"
                            data-bs-toggle="tab"
                            href="#ex1-tabs-2"
                            role="tab"
                            aria-controls="ex1-tabs-2"
                            aria-selected="false">Author</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="ex1-tab-3"
                            data-bs-toggle="tab"
                            href="#ex1-tabs-3"
                            role="tab"
                            aria-controls="ex1-tabs-3"
                            aria-selected="false">Reviews (1)</a>
                    </li>
                </ul>
                <div className="tab-content" id="ex1-content">
                    <div
                        className="tab-pane fade show active"
                        id="ex1-tabs-1"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-1"
                    >
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                        <div className="row py-5 d-flex align-items-center">
                            <div className="col-lg-3 col-12 col-md-4 author-img text-center text-md-start text-lg-start">
                                <img src={author} className="img-fluid"
                                    alt="author" />
                            </div>
                            <div className="col-lg-9 col-md-8 details mt-5 mt-lg-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                        <div className='row'>
                            <div className='col-lg-4'>
                                <h3>Reviews</h3>
                                <div className="d-flex justify-content-start review">
                                    <img src={user} alt="user" />
                                    <div className="review-info ms-3">
                                        <span className='stars'>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </span>
                                        <p className='text-muted'>user - August 7, 2019</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 me-0 ms-auto'>
                                <h3>Write a Review</h3>
                                <i>Your email address will not be published. Required fields are marked *</i>
                                <p>Your rating</p>
                                <span className='stars'>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </span>
                                <form action="#" className="mt-5">
                                    <div className="row my-4">
                                        <div className="col">
                                            <input type="text" className="form-control p-3" id="name" placeholder="Your name" name="name" />
                                        </div>

                                    </div>
                                    <div className="row my-4">
                                        <div className="col">
                                            <input type="email" className="form-control p-3" id="email" placeholder="Your email" name="email" />
                                        </div>

                                    </div>

                                    <textarea className="form-control  my-4" rows="5" id="comment" name="text" placeholder="Your review"></textarea>
                                    <button type="submit" className="btn-submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}