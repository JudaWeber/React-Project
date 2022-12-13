import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      {/* <div className="footer-wrapper container-fluid">
        <div className="row row d-flex flex-lg-column flex-sm-row my-row my-row-1">
          <div className="col grid-item footer-header ">OVERVIEW</div>
          <div className="col grid-item footer-text ">About</div>
          <div className="col grid-item footer-text ">Carees</div>
          <div className="col grid-item footer-text ">Contact</div>
          <div className="col grid-item footer-text ">Carees</div>
          <div className="col grid-item footer-text ">Terms of Use</div>
          <div className="col grid-item footer-text ">Privacy Policy</div>
        </div>
        <div className="row d-flex flex-column my-row my-row-2">
          <div className="col grid-item footer-header ">COMMUNITY</div>
          <div className="col grid-item footer-text">Support</div>
          <div className="col grid-item footer-text">Help</div>
          <div className="col grid-item footer-text">Blog</div>
          <div className="col grid-item footer-text">FAQ</div>
        </div>
        <div className="row d-flex flex-column my-row my-row-3">
          <div className="col grid-item footer-header">FOLLOW US</div>
          <div className="col grid-item">
            <i class="bi bi-twitter"></i>
          </div>
          <div className="col grid-item">
            <i class="bi bi-facebook"></i>
          </div>
          <div className="col grid-item">
            <i class="bi bi-youtube"></i>
          </div>
          <div className="col grid-item">
            <i class="bi bi-instagram"></i>
          </div>
          <div className="col grid-item">
            <i class="bi bi-linkedin"></i>
          </div>
        </div>
      </div> */}
      <div className="footer-wrapper container-fluid">
        <div className="row p-2">
          <div className="col-lg-4 col-sm-12">
            <div className="grid-item footer-header mb-2 ">OVERVIEW</div>
            <div className="grid-item footer-text ">About</div>
            <div className="grid-item footer-text ">Carees</div>
            <div className="grid-item footer-text ">Contact</div>
            <div className="grid-item footer-text ">Carees</div>
            <div className="grid-item footer-text ">Terms of Use</div>
            <div className="grid-item footer-text mb-3 ">Privacy Policy</div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="grid-item footer-header mb-2 ">COMMUNITY</div>
            <div className="grid-item footer-text">Support</div>
            <div className="grid-item footer-text">Help</div>
            <div className="grid-item footer-text">Blog</div>
            <div className="grid-item footer-text mb-3">FAQ</div>
          </div>
          <div className="col">
            <div className=" grid-item footer-header mb-2">FOLLOW US</div>
            <div className=" grid-item">
              <i className="bi bi-twitter"></i>
            </div>
            <div className=" grid-item">
              <i className="bi bi-facebook"></i>
            </div>
            <div className=" grid-item">
              <i className="bi bi-youtube"></i>
            </div>
            <div className=" grid-item">
              <i className="bi bi-instagram"></i>
            </div>
            <div className=" grid-item mb-3">
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
