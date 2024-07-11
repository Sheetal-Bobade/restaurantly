import { useEffect } from "react";
import '../main.css';
import EventsSection from "./custom-events";
import TestimonialsSection from "./testimonials";

function Main() {

  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        preloader.remove();
      }
    };

    window.addEventListener('load', handleLoad);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
   
    <main class="main">
      <section id="hero" class="hero section dark-background">

        <img src="./assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

        <div class="container">
          <div class="row">
            <div class="col-lg-8 d-flex flex-column align-items-center align-items-lg-start">
              <h2 data-aos="fade-up" data-aos-delay="100">Welcome to <span>Restaurantly</span></h2>
              <p data-aos="fade-up" data-aos-delay="200">Delivering great food for more than 18 years!</p>
              <div class="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                <a href="#menu" class="cta-btn">Our Menu</a>
                <a href="#book-a-table" class="cta-btn">Book a Table</a>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox pulsating-play-btn"> </a>
            </div>
          </div>
        </div>

      </section>


      <section id="about" class="about section">

        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row gy-4">
            <div class="col-lg-6 order-1 order-lg-2">
              <img src="../assets/img/about.jpg" class="img-fluid about-img" alt="" />
            </div>
            <div class="col-lg-6 order-2 order-lg-1 content">
              <h3>Voluptatem dignissimos provident</h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i class="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                <li><i class="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                <li><i class="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>
            </div>
          </div>

        </div>

      </section>

      <section id="why-us" class="why-us section">


        <div class="container section-title" data-aos="fade-up">
          <h2>WHY US</h2>
          <p>Why Choose Our Restaurant</p>
        </div>

        <div class="container">

          <div class="row gy-4">

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="card-item">
                <span>01</span>
                <h4><a href="/" class="stretched-link">Lorem Ipsum</a></h4>
                <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
              </div>
            </div>

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="card-item">
                <span>02</span>
                <h4><a href="/" class="stretched-link">Repellat Nihil</a></h4>
                <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
              </div>
            </div>

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div class="card-item">
                <span>03</span>
                <h4><a href="/" class="stretched-link">Ad ad velit qui</a></h4>
                <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section id="menu" class="menu section">


        <div class="container section-title" data-aos="fade-up">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>

        <div class="container isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul class="menu-filters isotope-filters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-starters">Starters</li>
                <li data-filter=".filter-salads">Salads</li>
                <li data-filter=".filter-specialty">Specialty</li>
              </ul>
            </div>
          </div>

          <div class="row isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div class="col-lg-6 menu-item isotope-item filter-starters">
              <img src="assets/img/menu/lobster-bisque.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="/">Lobster Bisque</a><span>$5.95</span>
              </div>
              <div class="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>

            <div class="col-lg-6 menu-item isotope-item filter-specialty">
              <img src="assets/img/menu/bread-barrel.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="/">Bread Barrel</a><span>$6.95</span>
              </div>
              <div class="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>

            <div class="col-lg-6 menu-item isotope-item filter-starters">
              <img src="assets/img/menu/cake.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="/">Crab Cake</a><span>$7.95</span>
              </div>
              <div class="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and tartar sauce
              </div>
            </div>
            <div class="col-lg-6 menu-item isotope-item filter-salads">
              <img src="assets/img/menu/caesar.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="/">Caesar Selections</a><span>$8.95</span>
              </div>
              <div class="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>

            <div class="col-lg-6 menu-item isotope-item filter-specialty">
              <img src="assets/img/menu/tuscan-grilled.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="/">Tuscan Grilled</a><span>$9.95</span>
              </div>
              <div class="menu-ingredients">
                Grilled chicken with provolone, artichoke hearts, and roasted red pesto
              </div>
            </div>

            <div class="col-lg-6 menu-item isotope-item filter-starters">
              <img src="assets/img/menu/mozzarella.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="/">Mozzarella Stick</a><span>$4.95</span>
              </div>
              <div class="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>

            <div class="col-lg-6 menu-item isotope-item filter-salads">
              <img src="assets/img/menu/greek-salad.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="/">Greek Salad</a><span>$9.95</span>
              </div>
              <div class="menu-ingredients">
                Fresh spinach, crisp romaine, tomatoes, and Greek olives
              </div>
            </div>

            <div class="col-lg-6 menu-item isotope-item filter-salads">
              <img src="assets/img/menu/spinach-salad.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="/">Spinach Salad</a><span>$9.95</span>
              </div>
              <div class="menu-ingredients">
                Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
              </div>
            </div>

            <div class="col-lg-6 menu-item isotope-item filter-specialty">
              <img src="assets/img/menu/lobster-roll.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="/">Lobster Roll</a><span>$12.95</span>
              </div>
              <div class="menu-ingredients">
                Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
              </div>
            </div>

          </div>

        </div>

      </section>

      <section id="specials" class="specials section">


        <div class="container section-title" data-aos="fade-up">
          <h2>Specials</h2>
          <p>Check Our Specials</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">
                <li class="nav-item">
                  <a class="nav-link active show" data-bs-toggle="tab" href="#specials-tab-1">Modi sit est</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#specials-tab-2">Unde praesentium sed</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#specials-tab-3">Pariatur explicabo vel</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#specials-tab-4">Nostrum qui quasi</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#specials-tab-5">Iusto ut expedita aut</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-9 mt-4 mt-lg-0">
              <div class="tab-content">
                <div class="tab-pane active show" id="specials-tab-1">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3>Architecto ut aperiam autem id</h3>
                      <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                    </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-1.png" alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="specials-tab-2">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3>Et blanditiis nemo veritatis excepturi</h3>
                      <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                    </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-2.png" alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="specials-tab-3">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                      <p class="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                      <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                    </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-3.png" alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="specials-tab-4">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                      <p class="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                      <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                    </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-4.png" alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="specials-tab-5">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                      <p class="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                      <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                    </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-5.png" alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      <EventsSection/>


      <section id="book-a-table" class="book-a-table section">

        <div class="container section-title" data-aos="fade-up">
          <h2>RESERVATION</h2>
          <p>Book a Table</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">

        <form class="php-email-form">
            <div class="row gy-4">
              <div class="col-lg-4 col-md-6">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="" />
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="" />
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone" required="" />
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="date" name="date" class="form-control" id="date" placeholder="Date" required="" />
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="time" class="form-control" name="time" id="time" placeholder="Time" required="" />
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="number" class="form-control" name="people" id="people" placeholder="# of people" required="" />
              </div>
            </div>

            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
            </div>

            <div class="text-center mt-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
              <button type="submit">Book a Table</button>
            </div>
          </form>

        </div>

      </section>

      <TestimonialsSection/>


      <section id="gallery" class="gallery section">


        <div class="container section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          <p>Some photos from Our Restaurant</p>
        </div>

        <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">

          <div class="row g-0">

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a href="assets/img/gallery/gallery-1.jpg" class="glightbox" data-gallery="images-gallery">
                  <img src="assets/img/gallery/gallery-1.jpg" alt="" class="img-fluid" />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a href="assets/img/gallery/gallery-2.jpg" class="glightbox" data-gallery="images-gallery">
                  <img src="assets/img/gallery/gallery-2.jpg" alt="" class="img-fluid" />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a href="assets/img/gallery/gallery-3.jpg" class="glightbox" data-gallery="images-gallery">
                  <img src="assets/img/gallery/gallery-3.jpg" alt="" class="img-fluid" />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a href="assets/img/gallery/gallery-4.jpg" class="glightbox" data-gallery="images-gallery">
                  <img src="assets/img/gallery/gallery-4.jpg" alt="" class="img-fluid" />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a href="assets/img/gallery/gallery-5.jpg" class="glightbox" data-gallery="images-gallery">
                  <img src="assets/img/gallery/gallery-5.jpg" alt="" class="img-fluid" />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a href="assets/img/gallery/gallery-6.jpg" class="glightbox" data-gallery="images-gallery">
                  <img src="assets/img/gallery/gallery-6.jpg" alt="" class="img-fluid" />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a href="assets/img/gallery/gallery-7.jpg" class="glightbox" data-gallery="images-gallery">
                  <img src="assets/img/gallery/gallery-7.jpg" alt="" class="img-fluid" />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a href="assets/img/gallery/gallery-8.jpg" class="glightbox" data-gallery="images-gallery">
                  <img src="assets/img/gallery/gallery-8.jpg" alt="" class="img-fluid" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </section>


      <section id="chefs" class="chefs section">


        <div class="container section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Necessitatibus eius consequatur</p>
        </div>

        <div class="container">

          <div class="row gy-4">

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="member">
                <img src="assets/img/chefs/chefs-1.jpg" class="img-fluid" alt="" />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Walter White</h4>
                    <span>Master Chef</span>
                  </div>
                  <div class="social">
                    <a href="/"><i class="bi bi-twitter-x"></i></a>
                    <a href="/"><i class="bi bi-facebook"></i></a>
                    <a href="/"><i class="bi bi-instagram"></i></a>
                    <a href="/"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="member">
                <img src="assets/img/chefs/chefs-2.jpg" class="img-fluid" alt="" />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Sarah Jhonson</h4>
                    <span>Patissier</span>
                  </div>
                  <div class="social">
                    <a href="/"><i class="bi bi-twitter-x"></i></a>
                    <a href="/"><i class="bi bi-facebook"></i></a>
                    <a href="/"><i class="bi bi-instagram"></i></a>
                    <a href="/"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div class="member">
                <img src="assets/img/chefs/chefs-3.jpg" class="img-fluid" alt="" />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                  </div>
                  <div class="social">
                    <a href="/"><i class="bi bi-twitter-x"></i></a>
                    <a href="/"><i class="bi bi-facebook"></i></a>
                    <a href="/"><i class="bi bi-instagram"></i></a>
                    <a href="/"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>


      <section id="contact" class="contact section">


        <div class="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        <div class="mb-5" data-aos="fade-up" data-aos-delay="200">
          
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row gy-4">

            <div class="col-lg-4">
              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Location</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Open Hours</h3>
                  <p>Monday-Saturday:<br />11:00 AM - 2300 PM</p>
                </div>
              </div>

              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>

            </div>

            <div class="col-lg-8">
              <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div class="row gy-4">

                  <div class="col-md-6">
                    <input type="text" name="name" class="form-control" placeholder="Your Name" required="" />
                  </div>

                  <div class="col-md-6 ">
                    <input type="email" class="form-control" name="email" placeholder="Your Email" required="" />
                  </div>

                  <div class="col-md-12">
                    <input type="text" class="form-control" name="subject" placeholder="Subject" required="" />
                  </div>

                  <div class="col-md-12">
                    <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}

export default Main;
