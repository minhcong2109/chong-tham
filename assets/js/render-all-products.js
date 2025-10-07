function getAllProducts() {
    // Gộp tất cả các mảng sản phẩm lại thành một mảng duy nhất
    const allArrays = [
        typeof productsKeoDanGach !== "undefined" ? productsKeoDanGach : [],
        typeof productsPhuGiaBeTongVaVua !== "undefined" ? productsPhuGiaBeTongVaVua : [],
        typeof productsSuaChuaVaVaVetNutBeTong !== "undefined" ? productsSuaChuaVaVaVetNutBeTong : [],
        typeof productsChongThamTangHamVaHoThangMay !== "undefined" ? productsChongThamTangHamVaHoThangMay : [],
        typeof productsChongThamSanMaiWcBanCongBonHoaBeNuocHoBoi !== "undefined" ? productsChongThamSanMaiWcBanCongBonHoaBeNuocHoBoi : []
    ];
    // Gộp và loại bỏ sản phẩm trùng id (nếu muốn)
    const map = {};
    allArrays.flat().forEach(p => { map[p.id] = p; });
    return Object.values(map);
}

function renderAllProducts(containerSelector) {
    const products = getAllProducts();
    const container = document.querySelector(containerSelector);
    if (!container) return;
    container.innerHTML = products.map(product => `
        <div class='col-lg-3 col-6'>
            <div class='detailProductBlock1'>
                <a href='/san-pham/${product.id}/' title='${product.name}'>
                    <div class='imgProduct figure2'>
                        <img alt='${product.name}' loading='lazy' src='${product.image}'>
                    </div>
                </a>
                <div class='textPart'>
                    <a href='/san-pham/${product.id}/' title='${product.name}'>
                        <h4 class='titleProduct'>${product.name}</h4>
                    </a>
                </div>
                <div class='underline'></div>
                <div class='priceCart'>
                    <div class='pricePart'>
                        <a href='tel:0355520138'>
                            <p class='currentPrice'>${product.price || "Liên hệ"}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Khi DOM ready, render tất cả sản phẩm
document.addEventListener('DOMContentLoaded', function() {
    renderAllProducts('.productBlock1 .row');
});