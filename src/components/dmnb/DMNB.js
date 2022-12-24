import "./DMNB.css";
import React from "react";
import { Link } from "react-router-dom";

const DMNB = () => {
  return (
    <div className="DMNB-wrapper">
      <div className="DMNB">
        <h3>DANH MỤC NỔI BẬT</h3>

        <div className="DMNB-content">
          <ul>
            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Laptop-129x129.png"
                  alt=""
                />
                <span>Laptop</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Tablet-128x129.png"
                  alt=""
                />
                <span>Tablet</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Donghothongminh-128x129.png"
                  alt=""
                />
                <span>Đồng hồ thông minh</span>
              </Link>
            </li>

            <li>
              <Link>
                <img src="https://cdn.tgdd.vn//content/DT-128x129.png" alt="" />
                <span>Đồng hồ giá rẻ</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Donghothoitrang-128x129.png"
                  alt=""
                />
                <span>Đồng hồ thời trang</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Thietbimang-128x129.png"
                  alt=""
                />
                <span>Thiết bị mạng</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Oplung-128x128.png"
                  alt=""
                />
                <span>Điện thoại</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/chuot-128x129.png"
                  alt=""
                />
                <span>Chuột máy tính</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/ban-phim-128x129.png"
                  alt=""
                />
                <span>Bàn phím</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Simthecao-129x129.png"
                  alt=""
                />
                <span>Thẻ cào</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Loa-128x128.png"
                  alt=""
                />
                <span>Loa</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Tainghe-128x129.png"
                  alt=""
                />
                <span>Tai nghe</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Sacduphong-128x129.png"
                  alt=""
                />
                <span>Sạc dự phòng</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Capsac-129x129.png"
                  alt=""
                />
                <span>Cáp sạc</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Maytinhbo-128x129.png"
                  alt=""
                />
                <span>Máy tính bộ</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Mayin-128x129.png"
                  alt=""
                />
                <span>Máy in</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Manhinhmaytinh-128x129.png"
                  alt=""
                />
                <span>Màn hình máy tính</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/Phukiengaming-128x129.png"
                  alt=""
                />
                <span>Phụ kiện gaming</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/icon-camera-128x129.png"
                  alt=""
                />
                <span>Camera, webcam</span>
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src="https://cdn.tgdd.vn//content/may-chieu-icon-128x129.png"
                  alt=""
                />
                <span>Thiết bị nhà thông minh</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DMNB;
