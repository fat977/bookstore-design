import React, { useState } from "react";
import "../Latest-Published/LatestPublished.scss";
import Books from './books';

export const LatestPublished = () => {
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
        <section className="latest-published my-5">
            <div className="container">
                <h2>Latest Published Books</h2>
                <ul className="nav nav-pills justify-content-center" role="tablist">
                    <li className="nav-item me-2">
                        <a
                            className="nav-link active" data-bs-toggle="pill"
                            href="javascrip:0;"
                            onClick={() => setItems(Books)}
                        >
                            All
                        </a>
                    </li>
                    <li className="nav-item me-2">
                        <a
                            className="nav-link" data-bs-toggle="pill"
                            href="javascrip:0;"
                            onClick={() => filterItem("horror")}
                        >
                            Horror
                        </a>
                    </li>
                    <li className="nav-item me-2">
                        <a
                            className="nav-link" data-bs-toggle="pill"
                            href="javascrip:0;"
                            onClick={() => filterItem("romance")}
                        >
                            Romance
                        </a>
                    </li>
                    <li className="nav-item me-2">
                        <a
                            className="nav-link" data-bs-toggle="pill"
                            href="javascrip:0;"
                            onClick={() => filterItem("history")}
                        >
                            History
                        </a>
                    </li>
                    <li className="nav-item me-2">
                        <a
                            className="nav-link" data-bs-toggle="pill"
                            href="javascrip:0;"
                            onClick={() => filterItem("science-fiction")}
                        >
                            Science Fiction
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link" data-bs-toggle="pill"
                            href="javascrip:0;"
                            onClick={() => filterItem("biography")}
                        >
                            Biography
                        </a>
                    </li>

                </ul>
            </div>

            <div className="container mt-4">
                <div className="row">
                    {items.map((elem) => {
                        const { id, name, image, price,sale,value } = elem;

                        return (
                            <div className="col-6 col-lg-3 col-md-4 item mt-4" id={id}>
                                <img className="img-fluid" src={image} alt={name} />
                                <div className='options'>
                                    <i className="fa-solid fa-cart-shopping me-3"></i>
                                    <i className="fa-regular fa-heart me-3"></i>
                                    <i class="fa-solid fa-eye"></i>
                                </div>
                                <div className='details mt-3'>
                                    <h5>{name}</h5>
                                    <span className='stars'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </span>
                                    <div className='price'>
                                        <span>{price}</span>
                                    </div>
                                    <div className='sale'>
                                        <span className="badge bg-secondary text">{sale}</span>
                                        <span className="badge bg-secondary value">{value}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
