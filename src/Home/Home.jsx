import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import {
 FaFacebookF,
 FaInstagram,
 FaLinkedinIn,
 FaYoutube
} from "react-icons/fa";
import { db } from "../firebase";
import kitchenHero from "../kitchenHero.avif";
import kitchen1 from "../kitchen1.avif";
import bedroom1 from "../bedroom1.jfif";
import living1 from "../living1.jfif";
import wardrobe1 from "../wardrobe1.avif";
import ceiling1 from "../ceiling1.jfif";
import tvunit1 from "../tvunit1.jfif";
import consultant from "../consultant.jfif";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import asianPaints from "../asian-paints.jfif";
import greenply from "../greenply.png";
import centuryPly from "../centuryply.png";
import hafele from "../hafele.png";
import ebco from "../ebco.jfif";
import kajaria from "../kajaria.png";


import { FaShoppingCart } from "react-icons/fa";

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  city: "",
});


const [selectedImage, setSelectedImage] = useState(null);
const [bhk, setBhk] = useState("");
const [estimate, setEstimate] = useState(null);

const calculateEstimate = () => {
  switch (bhk) {
    case "1":
      setEstimate("₹2.5 Lakh");
      break;

    case "2":
      setEstimate("₹4.5 Lakh");
      break;

    case "3":
      setEstimate("₹6.5 Lakh");
      break;

    case "4":
      setEstimate("₹9 Lakh");
      break;

    default:
      setEstimate(null);
  }
};


const handleSubmit = async () => {

  if (
    !formData.name ||
    !formData.phone ||
    !formData.city
  ) {
    alert("Please fill all fields");
    return;
  }

  try {

    await addDoc(
      collection(db, "leads"),
      {
        ...formData,
        createdAt: serverTimestamp(),
      }
    );

    alert("Lead Submitted Successfully");

    setFormData({
      name: "",
      phone: "",
      city: "",
    });

    setShowPopup(false);

  } catch (error) {

    console.log(error);

    alert("Something went wrong");

  }
};


const [cart, setCart] = useState([]);
const addToCart = (plan) => {
  setCart([...cart, plan]);

  alert(`${plan.name} Added To Cart`);
};

const [showCart, setShowCart] = useState(false);
const navigate = useNavigate();




const products = [

  {
    name:"Soffet Panel Exterior",
    price:"₹400/sqft + GST",
    category:"Exterior",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Modern Sofa Set",
    price:"₹12,000/Set",
    category:"Furniture",
    image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
  },

  {
    name:"Charcoal Panel",
    price:"₹160-350/sqft",
    category:"Wall Panels",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Louver Panel",
    price:"₹160-180/sqft",
    category:"Wall Panels",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"PVC Panel",
    price:"₹50-80/sqft",
    category:"Wall Panels",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Soffet Interior Panel",
    price:"₹180/sqft",
    category:"Wall Panels",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Fluted PVC Panel",
    price:"₹80-120/sqft",
    category:"Wall Panels",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Marble Sheet",
    price:"₹50/sqft",
    category:"Wall Panels",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Laminate Wooden Flooring",
    price:"₹130-450/sqft",
    category:"Flooring",
    image:"https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },

  {
    name:"SPC Flooring",
    price:"₹190-240/sqft",
    category:"Flooring",
    image:"https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },

  {
    name:"LVT Flooring",
    price:"₹70-120/sqft",
    category:"Flooring",
    image:"https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },

  {
    name:"Vinyl Flooring",
    price:"₹30-70/sqft",
    category:"Flooring",
    image:"https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },

  {
    name:"3D Epoxy Flooring",
    price:"₹450-600/sqft",
    category:"Flooring",
    image:"https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },

  {
    name:"Deck Tiles Flooring",
    price:"₹450/sqft",
    category:"Flooring",
    image:"https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },

  {
    name:"PVC Ceiling",
    price:"₹110-150/sqft",
    category:"Ceiling",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Gypsum Ceiling",
    price:"₹80-120/sqft",
    category:"Ceiling",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Stretch Ceiling",
    price:"₹550-1400/sqft",
    category:"Ceiling",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Textile Fabric Ceiling",
    price:"₹1500/sqft",
    category:"Ceiling",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Roller Blind",
    price:"₹150-190/sqft",
    category:"Blinds",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Zebra Blind",
    price:"₹190-450/sqft",
    category:"Blinds",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Wooden Venetian Blind",
    price:"₹300-350/sqft",
    category:"Blinds",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Vertical Blind",
    price:"₹80-130/sqft",
    category:"Blinds",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Artificial Turf",
    price:"₹50-90/sqft",
    category:"Garden",
    image:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
  },

  {
    name:"Vertical Garden",
    price:"₹180-450/sqft",
    category:"Garden",
    image:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
  },

  {
    name:"Carpet Tile",
    price:"₹90-180/sqft",
    category:"Carpet",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Wall To Wall Carpet",
    price:"₹80-200/sqft",
    category:"Carpet",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },

  {
    name:"Imported Wallpaper",
    price:"₹1500-4500/Roll",
    category:"Wallpaper",
    image:"https://images.unsplash.com/photo-1494526585095-c41746248156"
  },

  {
    name:"Custom Wallpaper",
    price:"₹100-180/sqft",
    category:"Wallpaper",
    image:"https://images.unsplash.com/photo-1494526585095-c41746248156"
  },

  {
    name:"Golden Foil Wallpaper",
    price:"₹160-180/sqft",
    category:"Wallpaper",
    image:"https://images.unsplash.com/photo-1494526585095-c41746248156"
  },

  {
    name:"Glass Film",
    price:"₹35-160/sqft",
    category:"Wallpaper",
    image:"https://images.unsplash.com/photo-1494526585095-c41746248156"
  }

];
return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Marv Home</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Designs</li>
          <li>Packages</li>
          <li>Calculator</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button
          className="consult-btn"
          onClick={() => setShowPopup(true)}
        >
          Free Consultation
        </button>

        <div
  className="cart-badge"
  onClick={() => setShowCart(true)}
>
  <FaShoppingCart />

  <span className="cart-count">
    {cart.length}
  </span>
</div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>
              Transform Your House Into
              <span> A Dream Home</span>
            </h1>

            <p>
              Premium Interior Design Solutions
              for Modern Indian Homes.
            </p>

            <div className="hero-buttons">
              <button onClick={() => setShowPopup(true)}>
                Book Free Consultation
              </button>

              <button className="secondary">
                View Designs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      {/* <section className="why-section">
        <h2>Why Choose Marv Home?</h2>

        <div className="why-grid">
          <div className="card">
            <h3>10 Years Warranty</h3>
            <p>Long-lasting quality interiors.</p>
          </div>

          <div className="card">
            <h3>Transparent Pricing</h3>
            <p>No hidden costs ever.</p>
          </div>

          <div className="card">
            <h3>45 Days Delivery</h3>
            <p>Fast project completion.</p>
          </div>

          <div className="card">
            <h3>Premium Materials</h3>
            <p>Top quality fittings & finishes.</p>
          </div>
        </div>
      </section> */}


      <section className="trust-section">

  <div className="trust-left">

    <h2>Here's Why Homeowners Love Marv Home</h2>

    <div className="trust-features">

      <div className="trust-item">
        <h3>10 Years Warranty</h3>
        <p>Long-lasting quality interiors</p>
      </div>

      <div className="trust-item">
        <h3>Transparent Pricing</h3>
        <p>No Hidden Costs</p>
      </div>

      <div className="trust-item">
        <h3>45 Days Delivery</h3>
        <p>On-Time Project Completion</p>
      </div>

      <div className="trust-item">
        <h3>Easy EMI</h3>
        <p>Flexible Payment Options</p>
      </div>

    </div>

    <button
      className="trust-btn"
      onClick={() => setShowPopup(true)}
    >
      Book Free Consultation
    </button>

  </div>

 

   <div className="trust-right">
  <img
    src={consultant}
    alt="Consultant"
  />
</div>

  

</section>


{/* SERVICES */}
      <section className="services">
        <h2>Explore Interior Designs</h2>

        <div className="service-grid">
          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8"
              alt=""
            />
            <h3>Modular Kitchen</h3>
          </div>

          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt=""
            />
            <h3>Bedroom</h3>
          </div>

          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
              alt=""
            />
            <h3>Living Room</h3>
          </div>

          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt=""
            />
            <h3>Wardrobe</h3>
          </div>
        </div>
      </section>


      {/* PACKAGES */}
       <section className="packages">
        <h2>Interior Packages</h2>

        <div className="package-grid">

          <div className="package-card">

  <h3>Basic</h3>

  <h1>₹2.99L</h1>

  <ul>
    <li>Kitchen</li>
    <li>Wardrobe</li>
    <li>TV Unit</li>
  </ul>

  <button
    onClick={() =>
      addToCart({
        name: "Basic Package",
        price: 299000,
      })
    }
  >
    Add To Cart
  </button>

</div>

          <div className="package-card featured">

  <h3>Premium</h3>

  <h1>₹5.99L</h1>

  <ul>
    <li>Everything in Basic</li>
    <li>False Ceiling</li>
    <li>Premium Finish</li>
  </ul>

  <button
    onClick={() =>
      addToCart({
        name: "Premium Package",
        price: 599000,
      })
    }
  >
    Add To Cart
  </button>

</div>

          <div className="package-card">

  <h3>Luxury</h3>

  <h1>₹9.99L</h1>

  <ul>
    <li>Complete Home Interior</li>
    <li>Designer Furniture</li>
    <li>Luxury Finish</li>
  </ul>

  <button
    onClick={() =>
      addToCart({
        name: "Luxury Package",
        price: 999000,
      })
    }
  >
    Add To Cart
  </button>

</div>
        </div>
      </section>



<section className="solutions-section">

  <h2>End-to-End Interior Solutions</h2>

  <div className="solutions-grid">

    <div className="solution-card">
      <span>🍳</span>
      <p>Modular Kitchen</p>
    </div>

    <div className="solution-card">
      <span>🚪</span>
      <p>Storage & Wardrobe</p>
    </div>

    <div className="solution-card">
      <span>📚</span>
      <p>Crockery Units</p>
    </div>

    <div className="solution-card">
      <span>🛋️</span>
      <p>Space Saving Furniture</p>
    </div>

    <div className="solution-card">
      <span>📺</span>
      <p>TV Units</p>
    </div>

    <div className="solution-card">
      <span>🖥️</span>
      <p>Study Tables</p>
    </div>

    <div className="solution-card">
      <span>🏠</span>
      <p>False Ceiling</p>
    </div>

    <div className="solution-card">
      <span>💡</span>
      <p>Lights</p>
    </div>

    <div className="solution-card">
      <span>🖼️</span>
      <p>Wallpaper</p>
    </div>

    <div className="solution-card">
      <span>🎨</span>
      <p>Wall Paint</p>
    </div>

    <div className="solution-card">
      <span>🚿</span>
      <p>Bathroom</p>
    </div>

    <div className="solution-card">
      <span>🛕</span>
      <p>Pooja Unit</p>
    </div>

  </div>

</section>






      {/* <section className="calculator-section">
  <h2>Interior Cost Calculator</h2>

  <select
    value={bhk}
    onChange={(e) => setBhk(e.target.value)}
  >
    <option value="">Select BHK</option>
    <option value="1">1 BHK</option>
    <option value="2">2 BHK</option>
    <option value="3">3 BHK</option>
    <option value="4">4 BHK</option>
  </select>

  <button onClick={calculateEstimate}>
    Calculate Cost
  </button>

  {estimate && (
    <h3>Your Estimated Cost: {estimate}</h3>
  )}
</section> */}


<section className="quote-section">

  <div className="quote-overlay">

    <div className="quote-left">

      <h1 id="hi">
        Want Clarity On Your Interior Budget?
      </h1>

      <h2>
        Get A FREE Quote Now.
      </h2>

    </div>

    <div className="quote-card">

      <h2>
        Personalized Interior Design Quote
      </h2>

      <p className="step-text">
        STEP 1 OF 2
      </p>

      <h3>Your Floorplan</h3>

      <div className="bhk-grid" id="hover">

        <button onClick={() => setBhk("1")} >
          1 BHK
        </button>

        <button onClick={() => setBhk("2")}>
          2 BHK
        </button>

        <button onClick={() => setBhk("3")}>
          3 BHK
        </button>

        <button onClick={() => setBhk("4")}>
          4+ BHK
        </button>

      </div>

      <h3>Purpose</h3>

      <div className="purpose-grid">

        <button>Move In</button>

        <button>Rent Out</button>

        <button>Renovate</button>

      </div>

      <button
        className="estimate-btn"
        onClick={calculateEstimate}
      >
        Get Free Estimate
      </button>

      {estimate && (
        <div className="estimate-box">
          Estimated Cost: {estimate}
        </div>
      )}

    </div>

  </div>

</section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919999999999"
        className="whatsapp-btn"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      {/* CALL */}
      <a
        href="tel:+919999999999"
        className="call-btn"
      >
        Call Now
      </a>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <span
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              ×
            </span>

            <h2>Free Consultation</h2>

           <input
  type="text"
  placeholder="Your Name"
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }
/>

<input
  type="tel"
  placeholder="Mobile Number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
/>

<input
  type="text"
  placeholder="City"
  value={formData.city}
  onChange={(e) =>
    setFormData({
      ...formData,
      city: e.target.value,
    })
  }
/>

           <button
  className="submit-btn"
  onClick={handleSubmit}
>
  Get Free Quote
</button>
          </div>
        </div>
      )}




<section className="stats-section">

  <h2>Trusted By Thousands Of Homeowners</h2>

  <p>
    Delivering quality interiors with trust,
    transparency and excellence.
  </p>

  <div className="stats-grid">

    <div className="stat-card">
      <h3>500+</h3>
      <p>Projects Delivered</p>
    </div>

    <div className="stat-card">
      <h3>10+</h3>
      <p>Years Warranty</p>
    </div>

    <div className="stat-card">
      <h3>1000+</h3>
      <p>Happy Customers</p>
    </div>


    <div className="stat-card">
      <h3>50+</h3>
      <p>Expert Designers</p>
    </div>

    <div className="stat-card">
      <h3>24/7</h3>
      <p>Customer Support</p>
    </div>

  </div>

</section>
      {/* REVIEWS SECTION */}

<section className="reviews-section">
  <h2>What Our Customers Say</h2>

  <div className="reviews-grid">

    <div className="review-card">
      <h3>⭐⭐⭐⭐⭐</h3>
      <p>
        Marv Home transformed our apartment beautifully.
        The team was professional and delivered on time.
      </p>
      <h4>Rahul Sharma</h4>
    </div>

    <div className="review-card">
      <h3>⭐⭐⭐⭐⭐</h3>
      <p>
        Excellent modular kitchen design and premium finish.
        Highly recommended.
      </p>
      <h4>Priya Verma</h4>
    </div>

    <div className="review-card">
      <h3>⭐⭐⭐⭐⭐</h3>
      <p>
        Very transparent pricing and amazing support
        throughout the project.
      </p>
      <h4>Amit Gupta</h4>
    </div>

  </div>
</section>


{/* GALLERY SECTION */}

<section className="gallery-section">

  <h2>Our Interior Designs</h2>

  <div className="gallery-grid">

    <div
      className="gallery-card"
      onClick={() => setSelectedImage(kitchen1)}
    >
      <img src={kitchen1} alt="Kitchen" />
      <h3>Modular Kitchen</h3>
    </div>

    <div
      className="gallery-card"
      onClick={() => setSelectedImage(bedroom1)}
    >
      <img src={bedroom1} alt="Bedroom" />
      <h3>Bedroom Design</h3>
    </div>

    <div
      className="gallery-card"
      onClick={() => setSelectedImage(living1)}
    >
      <img src={living1} alt="Living Room" />
      <h3>Living Room</h3>
    </div>

    <div
      className="gallery-card"
      onClick={() => setSelectedImage(wardrobe1)}
    >
      <img src={wardrobe1} alt="Wardrobe" />
      <h3>Wardrobe</h3>
    </div>

    <div
      className="gallery-card"
      onClick={() => setSelectedImage(ceiling1)}
    >
      <img src={ceiling1} alt="False Ceiling" />
      <h3>False Ceiling</h3>
    </div>

    <div
      className="gallery-card"
      onClick={() => setSelectedImage(tvunit1)}
    >
      <img src={tvunit1} alt="TV Unit" />
      <h3>TV Unit</h3>
    </div>

  </div>

</section>


<section className="service-slider-section">

  <h2>Our Interior Design Services</h2>

  <Swiper
    modules={[Navigation, Autoplay]}
    navigation
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    spaceBetween={30}
    slidesPerView={3}
    breakpoints={{
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
  >

    <SwiperSlide>
      <div className="service-slide">
        <img src={kitchen1} alt="" />
        <h3>Modular Kitchen</h3>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="service-slide">
        <img src={wardrobe1} alt="" />
        <h3>Wardrobe Design</h3>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="service-slide">
        <img src={ceiling1} alt="" />
        <h3>False Ceiling</h3>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="service-slide">
        <img src={tvunit1} alt="" />
        <h3>TV Unit</h3>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="service-slide">
        <img src={living1} alt="" />
        <h3>Home Interior</h3>
      </div>
    </SwiperSlide>

  </Swiper>

</section>




<section className="partners-section">

  <h2>Our Trusted Partners</h2>

  <p>
    We collaborate with India's leading brands to
    deliver premium quality interiors.
  </p>

  <div className="partners-grid">

    <div className="partner-card">
      <img src={asianPaints} alt="Asian Paints" />
    </div>

    <div className="partner-card">
      <img src={greenply} alt="Greenply" />
    </div>

    <div className="partner-card">
      <img src={centuryPly} alt="Century Ply" />
    </div>

    <div className="partner-card">
      <img src={hafele} alt="Hafele" />
    </div>

    <div className="partner-card">
      <img src={ebco} alt="Ebco" />
    </div>

    <div className="partner-card">
      <img src={kajaria} alt="Kajaria" />
    </div>

  </div>

</section>

{/* FAQ SECTION */}

<section className="faq-section">

  <h2>Frequently Asked Questions</h2>

  <div className="faq-container">

    <div className="faq-item">
      <h3>How long does interior work take?</h3>
      <p>
        Most projects are completed within
        45–60 days depending on scope.
      </p>
    </div>

    <div className="faq-item">
      <h3>Do you provide warranty?</h3>
      <p>
        Yes, we provide up to 10 years warranty
        on selected interior packages.
      </p>
    </div>

    <div className="faq-item">
      <h3>Can I customize my design?</h3>
      <p>
        Absolutely. Every design is customized
        according to your requirements.
      </p>
    </div>

    <div className="faq-item">
      <h3>Do you offer EMI options?</h3>
      <p>
        Yes, EMI options are available on
        eligible projects.
      </p>
    </div>

  </div>

</section>

{selectedImage && (
  <div
    className="image-modal"
    onClick={() => setSelectedImage(null)}
  >

    <span className="image-close">
      ×
    </span>

    <img
      src={selectedImage}
      alt="Preview"
      className="modal-image"
    />

  </div>
)}





<section className="cart-section">

  <h2>Your Cart</h2>

  {cart.length === 0 ? (
    <p>No Packages Added Yet</p>
  ) : (
    <>
      {cart.map((item, index) => (
        <div
          key={index}
          className="cart-item"
        >
          <h3>{item.name}</h3>

          <h4>
            ₹{item.price.toLocaleString()}
          </h4>
        </div>
      ))}
    </>
  )}

</section>



<section className="store-section">

  <h2>Shop Interior Products</h2>

  <div className="products-grid">

    {products.map((item,index)=>(
      <div className="product-card" key={index}>

        <img
          src={item.image}
          alt={item.name}
        />

        <h3>{item.name}</h3>

        <p>{item.price}</p>

        <span>{item.category}</span>

        <button
          onClick={() => addToCart(item)}
        >
          Add To Cart
        </button>

      </div>
    ))}

  </div>

</section>

<h2>
  Total :
  ₹
  {cart
    .reduce(
      (total, item) =>
        total + item.price,
      0
    )
    .toLocaleString()}
</h2>





{showCart && (
  <div className="cart-overlay">

    <div className="cart-drawer">

      <div className="cart-header">

        <h2>Your Cart</h2>

        <span
          className="close-cart"
          onClick={() => setShowCart(false)}
        >
          ×
        </span>

      </div>

      {cart.length === 0 ? (
        <p>No Packages Added</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              className="drawer-item"
              key={index}
            >
              <h4>{item.name}</h4>

              <p>
                ₹{item.price.toLocaleString()}
              </p>
            </div>
          ))}

          <div className="cart-total">

            <h3>
              Total :
              ₹
              {cart
                .reduce(
                  (total, item) =>
                    total + item.price,
                  0
                )
                .toLocaleString()}
            </h3>

<button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Proceed To Checkout
</button>          

          </div>
        </>
      )}

    </div>

  </div>
)}
      {/* FOOTER */}
      <footer className="footer">

  <div className="footer-container">

    <div className="footer-box">
      <h2>Marv Home</h2>

      <p>
        Premium Interior Design Solutions
        For Modern Indian Homes.
      </p>

      <div className="social-icons">

        <a href="#">
          <i className="fab fa-facebook-f"></i>
           <FaFacebookF />
        </a>

        <a href="#">
          <i className="fab fa-instagram"></i>
           <FaInstagram />
        </a>

        <a href="#">
          <i className="fab fa-linkedin-in"></i>
          <FaLinkedinIn />
        </a>

        <a href="#">
          <i className="fab fa-youtube"></i>
          <FaYoutube />
        </a>

      </div>

    </div>

    <div className="footer-box">
      <h3>Quick Links</h3>

      <ul>
        <li>Home</li>
        <li>Designs</li>
        <li>Packages</li>
        <li>Calculator</li>
        <li>Contact</li>
      </ul>
    </div>

    <div className="footer-box">
      <h3>Services</h3>

      <ul>
        <li>Modular Kitchen</li>
        <li>Wardrobe Design</li>
        <li>False Ceiling</li>
        <li>TV Unit</li>
        <li>Home Interior</li>
      </ul>
    </div>

    <div className="footer-box">
      <h3>Contact Us</h3>

      <p>📞 +91 9876543210</p>
      <p>✉ info@marvhome.com</p>
      <p>📍 Noida, Uttar Pradesh</p>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 Marv Home. All Rights Reserved.
  </div>

</footer>
    </>
  );
}

export default Home;