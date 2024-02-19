import { useState } from "react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import CheckboxItems from "./CheckboxItems";
import '../Categories/Category.scss';
import { Link } from "react-router-dom";
export const Category = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        setSelectedOptions((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((option) => option !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    const filteredData = CheckboxItems.filter((item) => {
        if (selectedOptions.length === 0
        ) {
            return true;
        } else {
            return selectedOptions.includes(item.category);
        }


    });

    return (
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className="link" to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Book Categories</li>
                </ol>
            </nav>
            <div className="row">
                <div className="col-lg-4">
                    <h3 className='title mt-5'>Filter by Categories</h3>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"
                            value="horror"
                            checked={selectedOptions.includes('horror')}
                            onChange={handleCheckboxChange}
                            className='form-check-input'
                        />
                        <label class="form-check-label" >
                            Horror
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"
                            value="biography"
                            checked={selectedOptions.includes('biography')}
                            onChange={handleCheckboxChange}
                            className='form-check-input'
                        />
                        <label class="form-check-label" >
                            Biography
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"
                            value="history"
                            checked={selectedOptions.includes('history')}
                            onChange={handleCheckboxChange}
                            className='form-check-input'
                        />
                        <label class="form-check-label" >
                            History
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"
                            value="romance"
                            checked={selectedOptions.includes('romance')}
                            onChange={handleCheckboxChange}
                            className='form-check-input'
                        />
                        <label class="form-check-label" >
                            Romance
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"
                            value="science-fiction"
                            checked={selectedOptions.includes('science-fiction')}
                            onChange={handleCheckboxChange}
                            className='form-check-input'
                        />
                        <label class="form-check-label" >
                            Science-Fiction
                        </label>
                    </div>

                    <h3 className='title mt-5'>Filter by Author</h3>
                    <div className="d-flex flex-column" role="tablist">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                                href="javascrip:0;"
                                
                            />
                            <label class="form-check-label" >
                                Mohamed Taha
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                               

                            />
                            <label class="form-check-label" >
                                Ahmad Khalid Tawfiq
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                                

                            />
                            <label class="form-check-label" >
                                Mohamed Sadek
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                               

                            />
                            <label class="form-check-label" >
                                Radwa Ashour
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                               
                            />
                            <label class="form-check-label" >
                                Matt-Haig
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                               

                            />
                            <label class="form-check-label" >
                                Hassan El-Gendy
                            </label>
                        </div>

                    </div>

                    <h3 className='title my-5'>Filter by Price</h3>
                    <RangeSlider className="price-slider" min={50} max={500} />
                </div>
                <div className="col-lg-8 filter-results mt-4">
                    <select className="form-select w-25 p-2 me-0 ms-auto" aria-label="Default select example">
                        <option selected>Browse by</option>
                        <option value="LowToHigh">Name </option>
                        <option value="new">New</option>
                        <option value="old">Old</option>
                    </select>
                    <div className="row">

                        {filteredData.map((item) => (

                            <div className="col-6 col-lg-4 col-md-4 item mt-4" id={item.id}>
                                <Link to="/details">
                                    <img className="img-fluid" src={item.image} alt={item.name} />
                                </Link>
                                
                                <div className='options'>
                                    <i className="fa-solid fa-cart-shopping me-3"></i>
                                    <i className="fa-regular fa-heart me-3"></i>
                                    <Link to="/details">
                                        <i class="fa-solid fa-eye"></i>
                                    </Link>
                                    
                                </div>
                                <div className='details mt-3'>
                                    <h5>{item.name}</h5>
                                    <span className='stars'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </span>
                                    <div className='price'>
                                        <span>{item.price}</span>
                                    </div>
                                    <div className='sale'>
                                        <span className="badge bg-secondary text">{item.sale}</span>
                                        <span className="badge bg-secondary value">{item.value}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}