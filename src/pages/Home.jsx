import Menu from "./Menu";
import Footer from "./Footer";
function Home() {
    return (
        <>
            <div class="hero_area">
                <Menu />

                <div class="hero_bg_box">
                    <img src="./images/hero-bg.png" alt="" />
                </div>

                <section class="slider_section">
                    <div id="customCarousel1" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="container ">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <div class="detail-box">
                                                <h1 style={{ fontSize: '35px', whiteSpace: 'nowrap' }}>
                                                    Welcome to Radiant Skin Clinic - Your Trusted Skin Care Partner
                                                </h1>
                                                <p>
                                                    At Radiant Skin Clinic, we are committed to providing advanced skin care solutions with cutting-edge technology and
                                                    personalized treatment plans. Our experienced specialists prioritize your health
                                                    and well-being, offering expert care for early detection and effective treatment
                                                    of skin conditions. Trust Radiant Skin Clinic to be your partner in achieving healthier,
                                                    radiant skin </p>
                                                <div class="row">

                                                    <div class="btn-box col-md-3">
                                                        <a href="signup" class="btn1">
                                                            Signup
                                                        </a>
                                                    </div>
                                                    <div class="btn-box  col-md-3">
                                                        <a href="login" class="btn1">
                                                            Login
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <section class="department_section layout_padding">
                <div class="department_container">
                    <div class="container ">
                        <div class="heading_container heading_center">
                            <h2>
                                Our Departments
                            </h2>
                            <p>
                                Asperiores sunt consectetur impedit nulla molestiae delectus repellat laborum dolores doloremque
                                accusantium
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="./images/s1.png" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            Dermapathology
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable page when looking at its
                                            layout.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="./images/s2.png" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            Diagnosis
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable page when looking at its
                                            layout.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="./images/s3.png" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            Laser Surgery
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable page when looking at its
                                            layout.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="./images/s4.png" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            First Aid
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable page when looking at its
                                            layout.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="about_section layout_margin-bottom">
                <div class="container  ">
                    <div class="row">
                        <div class="col-md-6 ">
                            <div class="img-box">
                                <img src="./images/about-img.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="detail-box">
                                <div class="heading_container">
                                    <h2>
                                        About <span>Us</span>
                                    </h2>
                                </div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                    in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                    are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                    the middle of text.
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="doctor_section layout_padding">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Our Doctors
                        </h2>
                        <p class="col-md-10 mx-auto px-0">
                            "Our expert dermatologists provide precise and reliable skin assessments, ensuring accurate diagnosis
                            and effective treatment. Using advanced technology, we identify skin conditions early, helping you
                            maintain healthy and radiant skin. Trust our expertise for personalized care and professional guidance."
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-lg-4 mx-auto">
                            <div class="box">
                                <div class="img-box">
                                    <img src="./images/d1.jpg" alt="" />
                                </div>
                                <div class="detail-box">
                                    <div class="social_box">
                                        <a href="">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-youtube" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <h5>
                                        Elina Josh
                                    </h5>
                                    <h6 class="">
                                        Doctor
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 mx-auto">
                            <div class="box">
                                <div class="img-box">
                                    <img src="./images/d2.jpg" alt="" />
                                </div>
                                <div class="detail-box">
                                    <div class="social_box">
                                        <a href="">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-youtube" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <h5>
                                        Adam View
                                    </h5>
                                    <h6 class="">
                                        Doctor
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 mx-auto">
                            <div class="box">
                                <div class="img-box">
                                    <img src="./images/d3.jpg" alt="" />
                                </div>
                                <div class="detail-box">
                                    <div class="social_box">
                                        <a href="">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-youtube" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <h5>
                                        Mia Mike
                                    </h5>
                                    <h6 class="">
                                        Doctor
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 mx-auto">
                            <div class="box">
                                <div class="img-box">
                                    <img src="./images/d4.jpg" alt="" />
                                </div>
                                <div class="detail-box">
                                    <div class="social_box">
                                        <a href="">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-youtube" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <h5>
                                        Mike Tyson
                                    </h5>
                                    <h6 class="">
                                        Doctor
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 mx-auto">
                            <div class="box">
                                <div class="img-box">
                                    <img src="./images/d5.jpg" alt="" />
                                </div>
                                <div class="detail-box">
                                    <div class="social_box">
                                        <a href="">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-youtube" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <h5>
                                        Mohammed Ali
                                    </h5>
                                    <h6 class="">
                                        Doctor
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 mx-auto">
                            <div class="box">
                                <div class="img-box">
                                    <img src="./images/d6.jpg" alt="" />
                                </div>
                                <div class="detail-box">
                                    <div class="social_box">
                                        <a href="">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-youtube" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <h5>
                                        Tessa
                                    </h5>
                                    <h6 class="">
                                        Doctor
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="client_section layout_padding-bottom">
                <div class="container">
                    <div class="heading_container heading_center ">
                        <h2>
                            Testimonial
                        </h2>
                    </div>
                    <div id="carouselExample2Controls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-md-11 col-lg-10 mx-auto">
                                        <div class="box">
                                            <div class="img-box">
                                                <img src="./images/client.jpg" alt="" />
                                            </div>
                                            <div class="detail-box">
                                                <div class="name">
                                                    <h6>
                                                        Alan Emerson
                                                    </h6>
                                                </div>
                                                <p>
                                                    Accurate skin cancer diagnosis requires advanced techniques and reliable medical
                                                    assessments.
                                                    Detecting abnormalities early can help prevent complications and improve
                                                    treatment outcomes.
                                                    Dermatologists use various diagnostic methods, including dermoscopy, biopsy, and
                                                    AI-powered image analysis,
                                                    to identify potential cancerous lesions. Regular screenings and awareness are
                                                    essential for early detection and effective management
                                                </p>
                                                <i class="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-11 col-lg-10 mx-auto">
                                        <div class="box">
                                            <div class="img-box">
                                                <img src="./images/client1.jpg" alt="" />
                                            </div>
                                            <div class="detail-box">
                                                <div class="name">
                                                    <h6>
                                                        Adam
                                                    </h6>
                                                </div>
                                                <p>
                                                    Accurate diagnosis of skin cancer requires advanced methods,
                                                    ensuring precise identification of abnormal cells.
                                                    Medical experts employ innovative techniques to detect potential risks early,
                                                    preventing complications.
                                                    The integration of AI in dermatology enhances diagnostic accuracy, offering
                                                    reliable assessments for effective treatment.
                                                </p>
                                                <i class="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel_btn-container">
                            <a class="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
}

export default Home;

