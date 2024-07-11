import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sliderSettings = {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000
    },
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesToShow: 1,
        spaceBetween: 40
      },
      1200: {
        slidesToShow: 3,
        spaceBetween: 20
      }
    }
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What they're saying about us</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Slider {...sliderSettings}>
          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="Saul Goodman" />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="Sara Wilsson" />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="Jena Karlis" />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="Matt Brandon" />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="John Larson" />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
