function renderProducts(list, containerId, allLink = "#") {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  const showList = list.slice(0, 4);
  showList.forEach(product => {
    html += `
      <div class="col-lg-3 col-6">
        <div class="detailProductBlock1">
          <a href="products-details.html?id=${product.id}" title="${product.name}">
            <div class="imgProduct figure2">
              <img alt="${product.name}" loading="lazy" src="${product.image}">
            </div>
          </a>
          <div class="textPart">
            <a href="products-details.html?id=${product.id}" title="${product.name}">
              <h4 class="titleProduct">${product.name}</h4>
            </a>
          </div>
          <div class="underline"></div>
          <div class="priceCart">
            <div class="pricePart">
              <a href="tel:0355520138">
                <p class="currentPrice">${product.price}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  // Nếu có nhiều hơn 4 sản phẩm, thêm nút "Tất cả sản phẩm"
  if (list.length > 4) {
    html += `
      <div class="col-12 text-center mt-3">
        <a class="btnType1" href="${allLink}">Tất cả sản phẩm &gt;</a>
      </div>
    `;
  }
  container.innerHTML = html;
}