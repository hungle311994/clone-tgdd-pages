import React from "react";
import { Link } from "react-router-dom";

const MenuItem = () => {
  return (
    <div className="nav-menu-wrapper">
      <div className="nav-menu">
        <ul className="menu-level-1">
          <li className="item-level-1">
            <Link className="item-level-1-link">
              <img
                src="https://cdn.tgdd.vn//content/icon-phone-96x96-2.png"
                alt=""
              />
              <span> Mobile</span>
            </Link>
          </li>

          <li className="item-level-1">
            <Link className="item-level-1-link">
              <img
                src="https://cdn.tgdd.vn//content/icon-laptop-96x96-1.png"
                alt=""
              />
              <span> Laptop</span>
            </Link>
          </li>

          <li className="item-level-1">
            <Link className="item-level-1-link">
              <img
                src="https://cdn.tgdd.vn//content/icon-tablet-96x96-1.png"
                alt=""
              />
              <span> Tablet</span>
            </Link>
          </li>

          <li className="item-level-1">
            <Link className="item-level-1-link">
              <img
                src="https://cdn.tgdd.vn//content/icon-phu-kien-96x96-1.png"
                alt=""
              />
              <span> Accessory</span>
              <ion-icon name="caret-down-outline"></ion-icon>
            </Link>

            <div className="nav-menu-2-wrapper phukien">
              <div className="nav-menu-2">
                <ul className="menu-level-2">
                  <li className="item-level-2">
                    <strong>Mobile</strong>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Mobile charger</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Charger, cable</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Mobile case</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Tablet case</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Screen protector</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Gimbal</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Mobile holder</Link>
                  </li>
                </ul>

                <ul className="menu-level-2">
                  <li className="item-level-2">
                    <strong>LAPTOP</strong>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Mouse, keyboard</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Network equipment</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Balo</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Laptop holder</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Software</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="item-level-1">
            <Link className="item-level-1-link">
              <img
                src="https://cdn.tgdd.vn//content/icon-smartwatch-96x96-1.png"
                alt=""
              />
              <span> Smartwatch</span>
            </Link>
          </li>

          <li className="item-level-1">
            <Link className="item-level-1-link">
              <img
                src="https://cdn.tgdd.vn//content/watch-icon-96x96.png"
                alt=""
              />
              <span> Watch</span>
            </Link>
          </li>

          <li className="item-level-1">
            <Link className="item-level-1-link">
              <img
                src="https://cdn.tgdd.vn//content/icon-pc-96x96.png"
                alt=""
              />
              <span> PC, Print</span>
              <ion-icon name="caret-down-outline"></ion-icon>
            </Link>

            <div className="nav-menu-2-wrapper">
              <div className="nav-menu-2">
                <ul className="menu-level-2">
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Printer</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Printing ink</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Computer screen</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Computer</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="item-level-1">
            <Link className="item-level-1-link">
              <img
                src="https://cdn.tgdd.vn//content/icon-header-may-cu-30x30.png"
                alt=""
              />
              <span> Used machines</span>
            </Link>
          </li>

          <li className="item-level-1">
            <Link className="item-level-1-link">
              <span> Sim, Card</span>
            </Link>
          </li>

          <li className="item-level-1">
            <Link className="item-level-1-link">
              <span> Convenient service</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItem;
