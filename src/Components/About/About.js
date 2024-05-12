import "../About/About.scss";
import { Link } from "react-router-dom";
import aboutheader from "../../assets/img/about/10-Steps-for-Establishing-Team-Norms-center-for-creative-leadership.jpg.webp";
import aboutImg from "../../assets/img/about/1-2.png";
export const About = () => {
  return (
    <div className="container" style={{overflowX : "hidden"}}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About us
          </li>
        </ol>
      </nav>
      <div className="about">
        <img
          src={aboutheader}
          alt="about-header"
          className="about-header w-100"
        />
        <div className="content p-5">
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </h3>
          <p className="my-5">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <figure>
            <blockquote className="blockquote mb-4">
              <p>
                <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                <span className="font-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur sint nesciunt ad itaque aperiam expedita officiis
                  incidunt minus facere, molestias quisquam impedit inventore.
                </span>
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Miranda Smith in <cite title="Source Title">The Guardian</cite>
            </figcaption>
          </figure>
        </div>

        <div className="row d-flex align-items-center about-info">
          <div className="col-12 col-lg-4 col-md-4">
            <img
              src={aboutImg}
              className="about-img img-fluid"
              alt="aboutImg"
            />
          </div>
          <div className="col-12 col-lg-8 col-md-8 why-us py-3">
            <h3>Why Us?</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>

      <section className="gradient-custom my-5">
        <div className="container py-5">
          <h3 className="text-center">Testimonials</h3>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col col-xl-10">
              <div className="card my-5">
                <div className="card-body">
                  <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        data-bs-interval="10000"
                      >
                        <div className="row d-flex justify-content-center">
                          <div className="col-md-8 col-lg-9 col-xl-8">
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                  className="rounded-circle mb-4 mb-lg-0 shadow-2"
                                  alt="woman avatar"
                                  width="90"
                                  height="90"
                                />
                              </div>
                              <div className="flex-grow-1 ms-4 ps-3 mb-5">
                                <figure>
                                  <blockquote className="blockquote mb-4">
                                    <p>
                                      <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                      <span className="font-italic">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Pariatur sint nesciunt
                                        ad itaque aperiam expedita officiis
                                        incidunt minus facere, molestias
                                        quisquam impedit inventore.
                                      </span>
                                    </p>
                                  </blockquote>
                                  <figcaption className="blockquote-footer">
                                    Miranda Smith in{" "}
                                    <cite title="Source Title">
                                      The Guardian
                                    </cite>
                                  </figcaption>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval="2000">
                        <div className="row d-flex justify-content-center">
                          <div className="col-md-8 col-lg-9 col-xl-8">
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                  className="rounded-circle mb-4 mb-lg-0 shadow-2"
                                  alt="woman avatar"
                                  width="90"
                                  height="90"
                                />
                              </div>
                              <div className="flex-grow-1 ms-4 ps-3 mb-5">
                                <figure>
                                  <blockquote className="blockquote mb-4">
                                    <p>
                                      <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                      <span className="font-italic">
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo
                                        inventore veritatis.
                                      </span>
                                    </p>
                                  </blockquote>
                                  <figcaption className="blockquote-footer">
                                    Annie Hall{" "}
                                    <cite title="Source Title">
                                      New York Times
                                    </cite>
                                  </figcaption>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                          <div className="col-md-8 col-lg-9 col-xl-8">
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                  className="rounded-circle mb-4 mb-lg-0 shadow-2"
                                  alt="woman avatar"
                                  width="90"
                                  height="90"
                                />
                              </div>
                              <div className="flex-grow-1 ms-4 ps-3 mb-5">
                                <figure>
                                  <blockquote className="blockquote mb-4">
                                    <p>
                                      <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                      <span className="font-italic">
                                        At vero eos et accusamus et iusto odio
                                        dignissimos qui blanditiis praesentium
                                        voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint
                                        amet dolore.
                                      </span>
                                    </p>
                                  </blockquote>
                                  <figcaption className="blockquote-footer">
                                    Jason More in{" "}
                                    <cite title="Source Title">
                                      Smash Magazine
                                    </cite>
                                  </figcaption>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
