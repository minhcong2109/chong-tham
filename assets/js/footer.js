// footer.js
const footerHTML = `
<div class='container-fluid' id='footerSona'>
    <div class='footerLine4Col'>
        <div class='bgCoverOver'></div>
        <div class='container'>
            <div class='logoBlock'>
                <img alt='logo' src='assets/image/logo-1024x421-1.png'>
            </div>
            <div class='mainBlock row'>
                <div class='col-lg-3 col-md-6 col-12 colFix'>
                    <p class='titleText'>THÔNG TIN LIÊN HỆ</p>
                    <p class='text1'>Công ty TNHH Thương Mại Colorado</p>
                    <p class='text2'>
                        <i class='iTag'>Địa chỉ:</i>
                        Cụm 3, xã Hiệp Thuận, huyện Phúc Thọ, TP. Hà Nội, Việt Nam
                    </p>
                    <p class='text2'>
                        <i class='iTag'>Kho:</i>
                        CCN thị trấn Phùng, Huyện Đan Phượng, TP. Hà Nội, Việt Nam.
                    </p>
                    <p class='text2'>
                        <i class='iTag'>Hotline:</i>
                        <a class='contactCallPopUp' contactText='Gọi điện' data-target='#popup_registration_1'
                            data-toggle='modal' data='phone' dataHref='tel:0355520138' idGoogleGet='btn_phone_id'
                            title='Liên hệ'>0355520138</a>
                    </p>
                    <p class='text2'>
                        <i class='iTag'>Email:</i>
                        <a href='mailto:coloradochemical2019@gmail.com'>coloradochemical2019@gmail.com</a>
                    </p>
                    <div class='shareSocialPart'>
                        <div class='shareSocial1'>
                            <ul>
                                <li>
                                    <a href='https://www.facebook.com/phanphoisonchongthamvitec/' rel='nofollow'
                                        target='_blank' title='page'>
                                        <img alt='itemFacebook' src='assets/image/itemFacebook2.svg'>
                                    </a>
                                </li>
                                <li>
                                    <a href='' rel='nofollow' target='_blank' title='tiktok'>
                                        <img alt='tiktok' src='assets/image/tiktok_2.png'>
                                    </a>
                                </li>
                                <li>
                                    <a href='' rel='nofollow' target='_blank' title='instagram'>
                                        <img alt='instagram' src='assets/image/instagramItem2.svg'>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.youtube.com/channel/UC3yf78cxy0CvOi7--MiHTwA'
                                        rel='nofollow' target='_blank' title='youtube'>
                                        <img alt='youtube' src='assets/image/youtube_2.svg'>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class='col-lg-3 col-md-6 col-12 colFix'>
                    <p class='titleText'>DANH MỤC SẢN PHẨM</p>
                    <ul class='ulTag1'>
                        <li>
                            <a href='/san-pham-keo-dan-gach/'>Sản phẩm keo dán gạch</a>
                        </li>
                        <li>
                            <a href='/phu-gia-be-tong-va-vua/'>Phụ gia bê tông và vữa</a>
                        </li>
                        <li>
                            <a href='/san-pham-sua-chua-va-vet-nut-be-tong/'>Sản phẩm sửa chữa, vá vết nứt bê
                                tông</a>
                        </li>
                        <li>
                            <a href='/chong-tham-tang-ham-va-ho-thang-may/'>Chống thấm tầng hầm và hố thang máy</a>
                        </li>
                        <li>
                            <a href='/chong-tham-san-mai-wc-ban-cong-bon-hoa-be-nuoc-ho-boi/'>Sơn chống thấm </a>
                        </li>
                    </ul>
                </div>
                <div class='col-lg-3 col-md-6 col-12 colFix'>
                    <p class='titleText'>CHÍNH SÁCH</p>
                    <ul class='ulTag1'>
                        <li>
                            <a href='/chinh-sach-bao-mat/' title='Chính sách bảo mật'>Chính sách bảo mật</a>
                        </li>
                        <li>
                            <a href='/van-chuyen-giao-nhan/' title='Vận chuyển, giao nhận'>Vận chuyển, giao nhận</a>
                        </li>
                        <li>
                            <a href='/thoi-gian-dat-hang/' title='Thời gian đặt hàng'>Thời gian đặt hàng</a>
                        </li>
                        <li>
                            <a href='/chinh-sach-thanh-toan/' title='Chính sách thanh toán'>Chính sách thanh
                                toán</a>
                        </li>
                        <li>
                            <a href='/lien-he/'>Liên hệ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class='footerLineEnd'>
        <div class='container'>
            <div class='pTagEnd'>
                © 2024 chongthamvitec.vn. All Rights Reserved. Design Web and Seo by
                <a class='aTagLink' href='https://fagoagency.vn/' rel='nofollow' target='_blank'>FAGO AGENCY</a>
            </div>
        </div>
    </div>
</div>
`;

// Function để inject footer vào trang
function injectFooter() {
    const footerContainer = document.getElementById('footer-placeholder');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        // Khởi tạo events sau khi inject (nếu cần)
        initFooterEvents();
    } else {
        console.warn('Không tìm thấy placeholder #footer-placeholder!');
    }
}

// Function khởi tạo events bằng vanilla JS (footer chủ yếu static, nhưng thêm cho contact nếu cần)
function initFooterEvents() {
    // Tái sử dụng modal logic từ header nếu có (contactCallPopUp)
    // Nếu header.js đã init global, thì không cần lặp lại; nếu không, copy event listener từ header
    // Ví dụ: Event cho hotline contact (nếu chưa có từ header)
    const contactButtons = document.querySelectorAll('.contactCallPopUp');
    contactButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const href = button.getAttribute('dataHref');
            const contactText = button.getAttribute('contactText');
            if (href) {
                document.getElementById('modalLink').href = href;
                document.getElementById('modalLink').textContent = contactText;
                showModal(); // Function từ header.js, giả sử global hoặc import
            }
        });
    });

    console.log('Footer events initialized by vanilla JS!');
}

// Gọi khi DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
} else {
    injectFooter();
}