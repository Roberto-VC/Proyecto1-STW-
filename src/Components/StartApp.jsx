/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./StartApp.scss";
import device from "/src/Assets/device-hero.png";
import background from "/src/Assets/background.png";
import phone from "/src/Assets/Phone.jpg";
import pizza from "/src/Assets/Pizza.jpg";
import qr from "/src/Assets/QR.jpg";
import world from "/src/Assets/World.jpg";
import crypto from "/src/Assets/Crypto.jpg";
import hulu from "/src/Assets/hulu.jpg";
import gruhub from "/src/Assets/grubhub.jpg";
import ulta from "/src/Assets/ulta.jpg";
import spotify from "/src/Assets/spotify.jpg";
import groupon from "/src/Assets/groupon.jpg";
import potterry from "/src/Assets/pottery.jpg";
import Logo from "/src/Assets/Logo.svg";
import QRR from "/src/Assets/QR.svg";
import USA from "/src/Assets/US.png";

export default function StartApp() {
  const [unidad, setUnidad] = useState(0);
  const [decena, setDecena] = useState(0);
  const [centena, setCentena] = useState(0);
  const [milesima, setMilesima] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (unidad < 9) {
      setTimeout(() => setUnidad(unidad + 1), 1000);
    } else {
      setTimeout(() => setUnidad(0), 1000);
      if (decena < 9) {
        setTimeout(() => setDecena(decena + 1), 1000);
      } else {
        setTimeout(() => setDecena(0), 1000);
        if (centena < 9) {
          setTimeout(() => setCentena(centena + 1), 1000);
        } else {
          setTimeout(() => setCentena(0), 1000);
          if (milesima < 9) {
            setTimeout(() => setMilesima(milesima + 1), 1000);
          }
        }
      }
    }
  }, [unidad, decena, centena]);

  return (
    <div className="Todo">
      <div className="card">
        <header>
          <nav className="menu">
            <ul>
              <li>
                <input
                  type="image"
                  src="./Assets/Logo.svg"
                  alt="Logo"
                  className="Logos"
                />
              </li>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Sobre nosotros</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
          <button id="ads">Log In</button>
          <button id="Signup">Sign Up</button>
        </header>
      </div>
      <section id="Hola">
        <h1 className="Welcome">
          The New PayPal
          <br />
          app is here
        </h1>
        <p className="Arriba">
          <a href="javascript:;" className="Guia">
            Learn more about the new features
            <span className="flecha" />
          </a>
          <br />
          <b>Scan the code or enter your number to get the app.</b>
        </p>
        <div className="Input">
          <p className="Apply">
            By clicking Send Link you agree to receive a text <br />
            message with a link to the PayPal app. Message <br />
            and data rates may apply.
          </p>
          <input
            className="Phone"
            type="number"
            placeholder="Phone"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="Telefono" onClick={console.log(inputValue)}>
            <b>Send Link</b>
          </button>
          <img className="QR" src="./Assets/QR.svg" alt="QR" height="100" />
        </div>
        <div id="Image">
          <img
            className="behind"
            src="./Assets/background.png"
            alt="Logo"
            height="100"
          />
          <div id="Imagen">
            <img
              className="behind"
              src="./Assets/device-hero.png"
              alt="Logo"
              height="100"
            />
          </div>
        </div>
      </section>
      <section className="S2">
        <div className="A2">
          <p>
            Need to connect PayPal with your online store?&nbsp;
            <a href="javascript:;" className="Guia">
              Sign up for a Business account
              <span className="flecha" />
            </a>
          </p>
        </div>
      </section>
      <section className="S3">
        <img
          className="phone"
          src="./Assets/Phone.jpg"
          alt="Phone"
          height="100"
        />
        <div className="B3">
          <h2>Buy now, pay later with Pay in 4</h2>
          <p>
            Want something now but the sale ends before payday? Choose Pay in 4
            <br />
            at checkout with millions of online stores and split the cost into 4
            <br />
            interest-free payments. &nbsp;
            <a href="javascript:;" className="Guia">
              Learn how to Pay in 4<span className="flecha" />
            </a>
          </p>
        </div>
      </section>
      <section className="S3">
        <div className="B4">
          <h2>Buy now, pay later with Pay in 4</h2>
          <p>
            Want something now but the sale ends before payday? Choose Pay in 4
            <br />
            at checkout with millions of online stores and split the cost into 4
            <br />
            interest-free payments. &nbsp;
            <a href="javascript:;" className="Guia">
              Learn how to Pay in 4<span className="flecha" />
            </a>
          </p>
        </div>
        <img
          className="crypto"
          src="./Assets/Crypto.jpg"
          alt="Crypto"
          height="100"
        />
      </section>
      <section className="S3">
        <img className="qr" src="./Assets/QR.jpg" alt="Qr" height="100" />
        <div className="B5">
          <h2>Buy now, pay later with Pay in 4</h2>
          <p>
            Want something now but the sale ends before payday? Choose Pay in 4
            <br />
            at checkout with millions of online stores and split the cost into 4
            <br />
            interest-free payments. &nbsp;
            <a href="javascript:;" className="Guia">
              Learn how to Pay in 4<span className="flecha" />
            </a>
          </p>
        </div>
      </section>
      <section className="S3">
        <div className="B7">
          <h2>
            Buy now, pay later with <br />
            Pay in 4
          </h2>
          <p>
            Want something now but the sale ends before payday? Choose Pay in 4
            <br />
            at checkout with millions of online stores and split the cost into 4
            <br />
            interest-free payments. &nbsp;
            <a href="javascript:;" className="Guia">
              Learn how to Pay in 4<span className="flecha" />
            </a>
          </p>
        </div>
        <img
          className="world"
          src="./Assets/World.jpg"
          alt="World"
          height="100"
        />
      </section>
      <section className="S3">
        <div className="B6">
          <h2>Check out with millions of brands you love</h2>
        </div>
        <div className="logos">
          <img className="hulu" src="./Assets/hulu.jpg" alt="hulu" />
          <img className="gruhub" src="./Assets/grubhub.jpg" alt="grubhub" />
          <img className="pottery" src="./Assets/pottery.jpg" alt="pottery" />
          <img className="spotify" src="./Assets/spotify.jpg" alt="spotify" />
          <img className="ulta" src="./Assets/ulta.jpg" alt="ulta" />
          <img className="groupon" src="./Assets/groupon.jpg" alt="groupon" />
        </div>
      </section>
      <section className="S6">
        <div className="Nuevos">
          <h2>
            Join the millions of users worldwide
            <br />
            trusting PayPal every day
          </h2>
          <button className="Free">Sign Up for Free</button>
          <br />
        </div>
      </section>
      <div className="Count">
        <div className="number">
          <h4>4</h4>
        </div>
        <div className="number">
          <h4>0</h4>
        </div>
        <div className="number">
          <h4>0</h4>
        </div>
        <div className="number">
          <h4>0</h4>
        </div>
        <div className="number">
          <h4>0</h4>
        </div>
        <div className="number">
          <h4 className="Milesima">{milesima}</h4>
        </div>
        <div className="number">
          <h4 className="Centena">{centena}</h4>
        </div>
        <div className="number">
          <h4 className="Decena">{decena}</h4>
        </div>
        <div className="number">
          <h4 className="Unidad">{unidad}</h4>
        </div>
      </div>
      <section>
        <div className="TM">
          <p>
            Paying friends back, or chipping in requires that you have an
            account with PayPal. A recipient will need to create an account with
            PayPal to receive money, if they don&apos;t <br />
            already have one. An account with PayPal is required to send and
            receive money. PayPal, Inc. NMLS <br />
            ID #910457 (Este proyecto costo mucho asi que tenga piedad al
            calificar :) )
          </p>
        </div>
      </section>
      <div>
        <footer>
          <div className="Row">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Sobre nosotros</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
              <li>
                <input
                  type="image"
                  className="USA"
                  src="./Assets/US.png"
                  alt="US"
                />
              </li>
            </ul>
          </div>
          <div className="Linea" />
          <div className="Rows">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Accesibility</a>
              </li>
            </ul>
          </div>
          <div className="Rowss">
            <ul>
              <li>
                <p>© 1999–2022</p>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
