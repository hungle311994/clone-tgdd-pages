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
              <span> Điện thoại</span>
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
              <span> Phụ kiện</span>
              <ion-icon name="caret-down-outline"></ion-icon>
            </Link>

            <div className="nav-menu-2-wrapper phukien">
              <span>
                <ion-icon name="caret-up-outline"></ion-icon>
              </span>

              <div className="nav-menu-2">
                <ul className="menu-level-2">
                  <li className="item-level-2">
                    <strong>PHỤ KIỆN DI ĐỘNG</strong>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Sạc dự phòng</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Sạc, cáp</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">
                      Ốp lưng điện thoại
                    </Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">
                      Ốp lưng máy tính bảng
                    </Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">
                      Miếng dán màn hình
                    </Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">
                      Gậy chụp ảnh, Gimbal
                    </Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Giá đỡ điện thoại</Link>
                  </li>
                </ul>

                <ul className="menu-level-2">
                  <li className="item-level-2">
                    <strong>PHỤ KIỆN LAPTOP</strong>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Chuột, bàn phím</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Thiết bị mạng</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">
                      Balo, túi chống sốc
                    </Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Giá đỡ laptop</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Phần mềm</Link>
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
              <span> Đồng hồ</span>
            </Link>
          </li>

          <li className="item-level-1">
            <Link className="item-level-1-link">
              <img
                src="https://cdn.tgdd.vn//content/icon-pc-96x96.png"
                alt=""
              />
              <span> PC, Máy in</span>
              <ion-icon name="caret-down-outline"></ion-icon>
            </Link>

            <div className="nav-menu-2-wrapper">
              <span>
                <ion-icon name="caret-up-outline"></ion-icon>
              </span>
              <div className="nav-menu-2">
                <ul className="menu-level-2">
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Máy in</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Mực in</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Màn hình máy tính</Link>
                  </li>
                  <li className="item-level-2">
                    <Link className="item-level-2-link">Máy tính để bàn</Link>
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
              <span> Máy cũ giá rẻ</span>
            </Link>
          </li>

          <li className="item-level-1">
            <Link className="item-level-1-link">
              <span> Sim, Thẻ cào</span>
            </Link>
          </li>

          <li className="item-level-1">
            <Link className="item-level-1-link">
              <span> Dịch vụ tiện ích</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItem;
