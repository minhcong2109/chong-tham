// header.js
const headerHTML = `
<div class='Desktop_3 wrapGeneralBig' id='menuKOMO_DESKTOP'>
    <div class='menuLine_1'>
        <div class='container'>
            <div class='row rowFix'>
                <a class='logoPart figure2' href='/'>
                    <img alt='logo' src='assets/image/logo-1024x421-1.png'>
                </a>
                <div class='areaSearch'>
                    <form action='/search' class='searchBlock search' method='GET'>
                        <div class='form-group'>
                            <input class='form-control' name='key' placeholder='Bạn cần tìm gì' type='text'>
                        </div>
                        <button style='padding: 0;border: none;'>
                            <i aria-hidden='true' class='iTagSearch fa fa-search button_search'></i>
                        </button>
                    </form>
                </div>
                <div class='areaPhone'>
                    <a class='contactCallPopUp' contactText='Gọi điện' data-target='#popup_registration_1'
                        data-toggle='modal' data='phone' dataHref='tel:0355520138' idGoogleGet='btn_phone_id'
                        title='Liên hệ'>
                        <div class="areaPhone-item">
                            <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        <div class="areaPhone-item">
                            <p class='text text1'>0355520138</p>
                            <p class='text text2'>Mon - Fri: 8:00 - 17:00</p>
                        </div>
                    </a>
                </div>
                <div class='areaCart'>
                    <a class='cartBlock_1' href='/cart/' title='giỏ hàng'>
                        <div class='cartItem'>
                            <i aria-hidden='true' class='fa fa-cart-plus'></i>
                            <i class='amountProduct cart-count cart-amount d-none' data-count='0'>0</i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class='menuLine_2'>
        <div class='container'>
            <div class='row'>
                <div class='categoryPart'>
                    <a class='linkAllPr' href='./cua-hang.html'>
                        <i class="fa-solid fa-bars-staggered"></i>
                        Sản phẩm</a>
                    <div class='subCatePart1'>
                        <ul>
                            <li>
                                <a class='liLevel1' href='./san-pham-keo-dan-gach.html'>Sản phẩm keo dán gạch</a>
                            </li>
                            <li>
                                <a class='liLevel1' href='./phu-gia-be-tong-va-vua.html'>Phụ gia bê tông và vữa</a>
                            </li>
                            <li>
                                <a class='liLevel1' href='./san-pham-sua-chua-va-vet-nut-be-tong.html'>Sản phẩm sửa chữa,
                                    vá vết nứt bê tông</a>
                            </li>
                            <li>
                                <a class='liLevel1' href='./chong-tham-tang-ham-va-ho-thang-may.html'>Chống thấm tầng hầm
                                    và hố thang máy</a>
                            </li>
                            <li>
                                <a class='liLevel1'
                                    href='./chong-tham-san-mai-wc-ban-cong-bon-hoa-be-nuoc-ho-boi.html'>Sơn Chống Thấm
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class='menuPart'>
                    <div class='menuItem'>
                        <a class='link1' href='/'>Trang chủ</a>
                    </div>
                    <div class='menuItem'>
                        <a class='link1' href='./gioi-thieu.html'>Giới thiệu</a>
                    </div>
                    <div class='menuItem'>
                        <a class='link1' href='./du-an-tieu-bieu.html'>Dự án tiêu biểu</a>
                    </div>
                    <div class='menuItem'>
                        <a class='link1' href='./tin-tuc.html'>Truyền Thông</a>
                    </div>
                    <div class='menuItem dropDown'>
                        <a class='link1' href='#'>
                            Chính sách
                            <i class="fa-solid fa-caret-down"></i></a>
                        <ul class='blockLevel2'>
                            <li>
                                <a class='link2' href='./chinh-sach-bao-mat.html' title='Chính sách bảo mật'>Chính sách
                                    bảo mật</a>
                            </li>
                            <li>
                                <a class='link2' href='./van-chuyen-giao-nhan.html' title='Vận chuyển, giao nhận'>Vận
                                    chuyển, giao nhận</a>
                            </li>
                            <li>
                                <a class='link2' href='./thoi-gian-dat-hang.html' title='Thời gian đặt hàng'>Thời gian
                                    đặt hàng</a>
                            </li>
                            <li>
                                <a class='link2' href='./chinh-sach-thanh-toan.html' title='Chính sách thanh toán'>Chính
                                    sách thanh toán</a>
                            </li>
                        </ul>
                    </div>
                    <div class='menuItem'>
                        <a class='link1' href='./lien-he.html'>Liên hệ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- <div class='Desktop_3' id='contactBtnBlock'>
    <div class='smallBlock messengerBlock'>
        <a class='imgPart contactCallPopUp' contactText='Chat Facebook' data-target='#popup_registration_1'
            data-toggle='modal' dataHref='https://m.me/102696995895839' idGoogleGet='btn_messenger_id'
            rel='nofollow' title='Liên hệ'>
            <img alt='messenger' class='messFacePartImg' src='../assets/image/messenger_item_2.png'>
        </a>
        <p class='textPart'>Chat Face</p>
    </div>
    <div class='smallBlock zaloBlock'>
        <a class='imgPart contactCallPopUp' contactText='Chat Zalo' data-target='#popup_registration_1'
            data-toggle='modal' dataHref='https://zalo.me/0355520138' idGoogleGet='btn_zalo_id' rel='nofollow'
            title='Liên hệ'>
            <img alt='zalo' class='zaloPartImg' src='../assets/image/zalo_item_2.png'>
        </a>
        <p class='textPart'>Chat Zalo</p>
    </div>
    <div class='smallBlock phoneBlock'>
        <a class='imgPart'>
            <img alt='phone' class='phonePartImg' src='../assets/image/phone_item_2.svg'>
        </a>
        <p class='textPart'>Phone</p>
        <div class='textPart_2'>
            Gọi ngay:
            <b>0355520138</b>
        </div>
    </div>
    <div class='smallBlock pageUp hidePageUp'>
        <i aria-hidden='true' class='pageUpImg fa fa-angle-double-up hidePageUp' title='Về đầu trang'></i>
    </div>
</div> -->
<div class='Mobile_3' id='menuKOMO_MOBILE'>
    <div class='container containerFix'>
        <div class='row wrapFlex'>
            <a class='logoPart' href='/'>
                <img alt='logo' src='assets/image/logo-1024x421-1.png'>
            </a>
            <div class='searchArea'>
                <div class='searchItem'>
                    <i aria-hidden='true' class='item item_1 fa fa-search'></i>
                    <i aria-hidden='true' class='item item_2 fa fa-times' style='display: none;'></i>
                </div>
                <form action='/search' class='searchBlock search' method='GET'>
                    <div class='form-group'>
                        <input class='form-control' name='key' placeholder='Search' type='text'>
                    </div>
                    <button style='padding: 0;border: none;'>
                        <i aria-hidden='true' class='iTagSearch fa fa-search'></i>
                    </button>
                </form>
            </div>
            <div class='barsPart'>
                <div class='wrapIconBars'>
                    <div class='line line_1'></div>
                    <div class='line line_2'></div>
                    <div class='line line_3'></div>
                </div>
            </div>
        </div>
    </div>
    <div class='blockCateMobile'>
        <div class='container'>
            <div class='wrapCateParts'>
                <div class='catePart'>
                    <a class='link1' href='/'>Trang chủ</a>
                </div>
                <div class='catePart'>
                    <a class='link1' href='./gioi-thieu.html'>Giới thiệu</a>
                </div>
                <div class='catePart dropMore active'>
                    <a class='link1' href='./cua-hang.html'>Sản phẩm</a>
                    <div class='wrapITag'>
                        <i aria-hidden='true' class='fa fa-angle-right faFix'></i>
                        <i aria-hidden='true' class='fa fa-angle-down faFix'></i>
                    </div>
                    <ul class='blockLevel2'>
                        <li>
                            <a class='link2' href='./san-pham-keo-dan-gach.html'>Sản phẩm keo dán gạch</a>
                        </li>
                        <li>
                            <a class='link2' href='./phu-gia-be-tong-va-vua.html'>Phụ gia bê tông và vữa</a>
                        </li>
                        <li>
                            <a class='link2' href='./san-pham-sua-chua-va-vet-nut-be-tong.html'>Sản phẩm sửa chữa, vá vết
                                nứt bê tông</a>
                        </li>
                        <li>
                            <a class='link2' href='./chong-tham-tang-ham-va-ho-thang-may.html'>Chống thấm tầng hầm và hố
                                thang máy</a>
                        </li>
                        <li>
                            <a class='link2' href='./chong-tham-san-mai-wc-ban-cong-bon-hoa-be-nuoc-ho-boi.html'>Sơn
                                Chống Thấm </a>
                        </li>
                    </ul>
                </div>
                <div class='catePart'>
                    <a class='link1' href='./du-an-tieu-bieu.html'>Dự án tiêu biểu</a>
                </div>
                <div class='catePart dropMore'>
                    <a class='link1' href='./tin-tuc.html'>Truyền Thông</a>
                </div>
                <div class='catePart dropMore'>
                    <a class='link1' href='#'>Chính sách</a>
                    <div class='wrapITag'>
                        <i aria-hidden='true' class='fa fa-angle-right faFix'></i>
                        <i aria-hidden='true' class='fa fa-angle-down faFix'></i>
                    </div>
                    <ul class='blockLevel2'>
                        <li>
                            <a class='link2' href='./chinh-sach-bao-mat.html' title='Chính sách bảo mật'>Chính sách bảo
                                mật</a>
                        </li>
                        <li>
                            <a class='link2' href='./van-chuyen-giao-nhan.html' title='Vận chuyển, giao nhận'>Vận chuyển,
                                giao nhận</a>
                        </li>
                        <li>
                            <a class='link2' href='./thoi-gian-dat-hang.html' title='Thời gian đặt hàng'>Thời gian đặt
                                hàng</a>
                        </li>
                        <li>
                            <a class='link2' href='./chinh-sach-thanh-toan.html' title='Chính sách thanh toán'>Chính sách
                                thanh toán</a>
                        </li>
                    </ul>
                </div>
                <div class='catePart'>
                    <a class='link1' href='./lien-he.html'>Liên hệ</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class='Mobile_3' id='menuEndPage'>
    <div class='wrapWidth'>
        <div class='row'>
            <div class='cartPart smallPart'>
                <a class='cartBlock_2 aTag' href='/cart/' title='giỏ hàng'>
                    <div class='cartItem'>
                        <img alt='cart' class='cartPartImg' src='assets/image/cartItem.svg'>
                        <i class='amountProduct cart-count cart-amount d-none' data-count='0'>0</i>
                    </div>
                </a>
                <p class='textUnderItem'>Giỏ hàng</p>
            </div>
            <div class='messFacePart smallPart'>
                <a class='contactCallPopUp aTag' contactText='Chat Facebook' data-target='#popup_registration_1'
                    data-toggle='modal' dataHref='https://m.me/102696995895839' idGoogleGet='btn_messenger_id'
                    rel='nofollow' title='Liên hệ'>
                    <img alt='messengerItem' class='messFacePartImg' src='../assets/image/messenger_item.svg'>
                </a>
                <p class='textUnderItem'>Chat Face</p>
            </div>
            <div class='phonePart centerPart'>
                <a class='contactCallPopUp' contactText='Gọi điện' data-target='#popup_registration_1'
                    data-toggle='modal' data='phone' dataHref='tel:0355520138' idGoogleGet='btn_phone_id'
                    title='Liên hệ'>
                    <img alt='phoneItem' class='phonePartImg' src='../assets/image/phone_item.svg'>
                </a>
            </div>
            <div class='zaloPart smallPart'>
                <a class='contactCallPopUp aTag' contactText='Chat Zalo' data-target='#popup_registration_1'
                    data-toggle='modal' dataHref='https://zalo.me/0355520138' idGoogleGet='btn_zalo_id'
                    rel='nofollow' title='Liên hệ'>
                    <img alt='Zalo' class='zaloPartImg' src='../assets/image/zalo_item.png'>
                </a>
                <p class='textUnderItem'>Zalo</p>
            </div>
            <div class='youtubePart smallPart'>
                <a class='contactCallPopUp aTag' contactText='Tới Youtube' data-target='#popup_registration_1'
                    data-toggle='modal' dataHref='https://www.youtube.com/channel/UC3yf78cxy0CvOi7--MiHTwA'
                    idGoogleGet='btn_youtube_id' rel='nofollow' title='Liên hệ'>
                    <img alt='youtube' class='youtubePartImg' src='../assets/image/youtubeItem.png'>
                </a>
                <p class='textUnderItem'>Youtube</p>
            </div>
        </div>
    </div>
</div>
<div aria-hidden='true' class='modal fade popupAskContact' id='popup_registration_1' role='dialog' tabindex='-1' style='display: none;'>
    <div class='modal-dialog modal-dialog-centered' role='document'>
        <div class='modal-content'>
            <div class='modal-header'>
                <p class='modal-title'>KẾT NỐI</p>
                <button class='close' type='button' onclick='closeModal()'>
                    <span aria-hidden='true'>×</span>
                </button>
            </div>
            <div class='modal-body'>
                Bạn có muốn kết nối với tư vấn viên KOMO?
            </div>
            <div class='modal-footer'>
                <a class='btnType_2' onclick='closeModal()'>Hủy</a>
                <a class='btnType_2 btnContact' href='' rel='nofollow' target='_blank' id='modalLink'></a>
            </div>
        </div>
    </div>
</div>
`;

// Function để inject header vào trang
function injectHeader() {
    const headerContainer = document.getElementById('header-placeholder');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
        // Khởi tạo events sau khi inject
        initHeaderEvents();
    } else {
        console.warn('Không tìm thấy placeholder #header-placeholder!');
    }
}

// Function khởi tạo events bằng vanilla JS
function initHeaderEvents() {
    // 1. Toggle dropdown cho menu desktop (class dropDown)
    const dropdowns = document.querySelectorAll('.menuItem.dropDown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.link1');
        const subMenu = dropdown.querySelector('.blockLevel2');
        if (link && subMenu) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                subMenu.classList.toggle('show'); // Giả sử CSS có .blockLevel2.show { display: block; }
            });
        }
    });

    // 2. Hamburger menu cho mobile (toggle blockCateMobile)
    const barsPart = document.querySelector('.barsPart');
    const blockCateMobile = document.querySelector('.blockCateMobile');
    if (barsPart && blockCateMobile) {
        barsPart.addEventListener('click', () => {
            blockCateMobile.classList.toggle('show'); // CSS: .blockCateMobile.show { display: block; }
            // Toggle animation cho bars (nếu cần)
            const lines = barsPart.querySelectorAll('.line');
            lines.forEach((line, index) => {
                line.classList.toggle('active'); // CSS animation cho line_1, line_2, line_3
            });
        });
    }

    // 3. Toggle dropdown cho mobile (class dropMore)
    const dropMores = document.querySelectorAll('.catePart.dropMore');
    dropMores.forEach(dropMore => {
        const link = dropMore.querySelector('.link1');
        const subMenu = dropMore.querySelector('.blockLevel2');
        const wrapITag = dropMore.querySelector('.wrapITag');
        if (link && subMenu && wrapITag) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                subMenu.classList.toggle('show');
                wrapITag.classList.toggle('active'); // Toggle icon right/down
            });
        }
    });

    // 4. Xử lý popup modal bằng vanilla JS (thay vì Bootstrap)
    const contactButtons = document.querySelectorAll('.contactCallPopUp');
    contactButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const href = button.getAttribute('dataHref');
            const contactText = button.getAttribute('contactText');
            if (href) {
                document.getElementById('modalLink').href = href;
                document.getElementById('modalLink').textContent = contactText;
                showModal();
            }
        });
    });

    console.log('Header events initialized by vanilla JS!');
}

// Vanilla JS cho modal (show/hide)
function showModal() {
    const modal = document.getElementById('popup_registration_1');
    modal.style.display = 'block';
    modal.classList.add('show'); // Nếu có CSS animation
}

function closeModal() {
    const modal = document.getElementById('popup_registration_1');
    modal.style.display = 'none';
    modal.classList.remove('show');
}

// Đóng modal khi click outside (tùy chọn)
document.addEventListener('click', (e) => {
    const modal = document.getElementById('popup_registration_1');
    if (e.target === modal) {
        closeModal();
    }
});

// Gọi khi DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectHeader);
} else {
    injectHeader();
}