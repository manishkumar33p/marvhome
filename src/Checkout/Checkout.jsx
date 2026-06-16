import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout-page">

      <div className="checkout-container">

        <div className="checkout-left">

          <h2>Customer Details</h2>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <textarea
              placeholder="Full Address"
            ></textarea>

            <input
              type="text"
              placeholder="City"
            />

            <button type="submit">
              Place Enquiry
            </button>

          </form>

        </div>

        <div className="checkout-right">

          <h2>Order Summary</h2>

          <div className="summary-item">
            <h4>Selected Packages</h4>
            <p>
              Cart items yahan dikhayenge
            </p>
          </div>

          <div className="summary-total">
            Total: ₹0
          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;