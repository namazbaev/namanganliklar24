var ready = function (cb) {
  // Check if the `document` is loaded completely
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", function (e) {
        cb();
      })
    : cb();
};

// Usage
ready(function() {
    const elSiteNav = document.querySelector('.sitenav');
    const elSiteHeaderToggler = document.querySelector('.site-header__toggler');
    elSiteHeaderToggler.addEventListener('click', function() {
    elSiteNav.classList.toggle('sitenav--open');
    });
});