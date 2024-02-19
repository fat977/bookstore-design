
import '../Contact/Contact.scss';
import { Link } from "react-router-dom";
import contact from "../../assets/img/contact/transparent-cartoon-image-skateboard-man-jumping-large-wall-of-cartoon-man-skateboarding-in-front-of-text6557888a8fbb99.2223359217002354025887.png";
import location from "../../assets/img/contact/Simple-Location-Picker.webp";
export const Contact = () => {

    return (
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className='link' to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
            </nav>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src={contact} alt='contact' className='img-fluid' />
                </div>
                <div className='col-lg-6 mt-5'>
                    <h3>GET IN TOUCH</h3>
                    <p className='text-muted'> We'd Love to Hear From You, Lets Get In Touch!</p>
                    <div className='row'>
                        <div className='col'>
                            <h6>Email</h6>
                            <p className='text-secondary'>bookstore@gmail.com</p>
                        </div>
                        <div className='col'>
                            <h6>Phone</h6>
                            <p className='text-secondary'>+365-458-3258</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <h6>Address</h6>
                            <p className='text-secondary'>4096 N Highland St, Arlington, VA 32101, USA</p>
                           
                        </div>

                    </div>
                </div>
            </div>
            <div className='location my-5'>
                <img src={location} alt='location' className='w-100' />
            </div>
            <div className='w-75 d-block mx-auto'>
                <h2 className="text-center">Leave us a message</h2>
                <form action="#" className="mt-5 message">
                    <div className="row my-4">
                        <div className="col">
                            <input type="text" className="form-control p-3" id="name" placeholder="Your name" name="name"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control p-3" id="phone" placeholder="Your phone" name="phone"/>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col">
                            <input type="email" className="form-control p-3" id="email" placeholder="Your email" name="email"/>
                        </div>
                    </div>
                    <textarea className="form-control  my-4" rows="5" id="message" name="text" placeholder="Message"></textarea>
                    <button type="submit" className="btn send-msg">Send Message</button>
                </form>
            </div>
        </div >
    );
}