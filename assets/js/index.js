// Dropdown logic for desktop menu
document.addEventListener('DOMContentLoaded', function () {
    // Desktop: Sản phẩm
    var categoryPart = document.querySelector('.categoryPart');
    if (categoryPart) {
        categoryPart.addEventListener('mouseenter', function () {
            var sub = categoryPart.querySelector('.subCatePart1');
            if (sub) sub.style.display = 'block';
        });
        categoryPart.addEventListener('mouseleave', function () {
            var sub = categoryPart.querySelector('.subCatePart1');
            if (sub) sub.style.display = 'none';
        });
    }

    // Desktop: Chính sách
    var policyDropdown = document.querySelector('.menuItem.dropDown');
    if (policyDropdown) {
        policyDropdown.addEventListener('mouseenter', function () {
            var sub = policyDropdown.querySelector('.blockLevel2');
            if (sub) sub.style.display = 'block';
        });
        policyDropdown.addEventListener('mouseleave', function () {
            var sub = policyDropdown.querySelector('.blockLevel2');
            if (sub) sub.style.display = 'none';
        });
    }

    // Mobile: Sản phẩm & Chính sách
    var mobileDropdowns = document.querySelectorAll('.catePart.dropMore');
    mobileDropdowns.forEach(function (item) {
        var link = item.querySelector('.link1');
        link && link.addEventListener('click', function (e) {
            e.preventDefault();
            var ul = item.querySelector('ul.blockLevel2');
            if (ul) {
                ul.style.display = (ul.style.display === 'block') ? 'none' : 'block';
            }
            var icons = item.querySelectorAll('.wrapITag i');
            icons.forEach(function (icon) {
                icon.classList.toggle('active');
            });
        });
    });
});
