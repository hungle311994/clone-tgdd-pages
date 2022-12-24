import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-list">
        <ul className="ul-level-1">
          <li className="li-level-1">
            <ul className="ul-level-2">
              <li className="li-level-2">
                <Link>
                  <span>Lịch sử mua hàng</span>
                </Link>
              </li>

              <li className="li-level-2">
                <Link>
                  <span>Tìm hiểu về mua trả góp</span>
                </Link>
              </li>

              <li className="li-level-2">
                <Link>
                  <span>Chính sách bảo hành</span>
                </Link>
              </li>

              <li className="li-level-2">
                <Link>
                  <span>Chính sách bảo hành</span>
                </Link>
              </li>

              <li className="li-level-2">
                <Link>
                  <span>Xem thêm</span>
                  <ion-icon
                    style={{ color: "#333" }}
                    name="caret-down-outline"
                  ></ion-icon>
                </Link>
              </li>
            </ul>
          </li>

          <li className="li-level-1">
            <ul className="ul-level-2">
              <li className="li-level-2">
                <Link>
                  <span>Giới thiệu công ty (MWG.vn)</span>
                </Link>
              </li>

              <li className="li-level-2">
                <Link>
                  <span>Tuyển dụng</span>
                </Link>
              </li>

              <li className="li-level-2">
                <Link>
                  <span>Gửi góp ý, khiếu nại</span>
                </Link>
              </li>

              <li className="li-level-2">
                <Link>
                  <span>Tìm siêu thị (3.359 shop)</span>
                </Link>
              </li>

              <li className="li-level-2">
                <Link>
                  <span>Xem bản mobile</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="li-level-1">
            <ul className="ul-level-2">
              <li className="li-level-2">
                <span>
                  <b>Tổng đài hỗ trợ </b>(Miễn phí gọi)
                </span>
              </li>

              <li className="li-level-2">
                <span>
                  Gọi mua:
                  <Link> 1800.1060 </Link>
                  (7:30 - 22:00)
                </span>
              </li>

              <li className="li-level-2">
                <span>
                  Kỹ thuật:
                  <Link> 1800.1763 </Link>
                  (7:30 - 22:00)
                </span>
              </li>

              <li className="li-level-2">
                <span>
                  Khiếu nại:
                  <Link> 1800.1062 </Link>
                  (8:00 - 21:30)
                </span>
              </li>

              <li className="li-level-2">
                <span>
                  Bảo hành:
                  <Link> 1800.1064 </Link>
                  (8:00 - 21:00)
                </span>
              </li>
            </ul>
          </li>

          <li className="li-level-1">
            <ul className="ul-level-2">
              <li style={{ marginBottom: "10px" }}>
                <Link className="link">
                  <ion-icon name="logo-facebook"></ion-icon>
                  <span>3777.9k Fan</span>
                </Link>
                <Link className="link">
                  <ion-icon
                    style={{ color: "red" }}
                    name="logo-youtube"
                  ></ion-icon>
                  <span>852k Đăng ký</span>
                </Link>
                <Link className="link">
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png"
                    alt=""
                    style={{ width: "14px", display: "inline-block" }}
                  />
                  <span>Zalo TGDĐ</span>
                </Link>
              </li>

              <li style={{ marginBottom: "10px" }}>
                <img
                  src={require("../../assets/footer/FooterLogoList.png")}
                  alt=""
                />
              </li>

              <li style={{ marginBottom: "10px" }}>
                <span>Website cùng tập đoàn</span>
              </li>

              <li>
                <img
                  src={require("../../assets/footer/Footer Logo List2.png")}
                  alt=""
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="footer-copyright-wrapper">
        <div className="footer-copyright">
          <p>
            © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở
            KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông
            Tin và Truyền Thông cấp ngày 04/06/2020. <br />
            Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Điện
            thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm
            nội dung: Huỳnh Văn Tốt.
            <Link> Xem chính sách sử dụng</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
