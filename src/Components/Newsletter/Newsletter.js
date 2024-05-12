import { useState } from "react";
import "../Newsletter/Newsletter.scss";
export const Newsletter = () => {
    const [email, setEmail] = useState('');
    return (
        <section className="newsletter my-5" style={{overflowX : "hidden"}}>
            <div className="container">
                <div className="row py-5">
                    <div className="col-12 col-lg-5 col-md-12">
                        <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
                    </div>
                    <div className="col-12 col-lg-7 col-md-12">
                        <form>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
