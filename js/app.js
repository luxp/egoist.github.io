var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

document.addEventListener('DOMContentLoaded', ready)

function ready() {
  dropdown()
  // disqus
  if (window.isPost) {
    disqus()
    makeZoom()
  }
  if (window.hexoLayout === 'page') {
    makeZoom()
  }
  function disqus() {
    var d = document, s = d.createElement('script');
    s.src = "//egoistian.disqus.com/embed.js";
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }
  function makeZoom() {
    Array.prototype.forEach.call($$('.post-content img'), function (el) {
      zoom(el)
    })
  }
  function dropdown() {
    var el = $('.nav-more-trigger')
    var list = $('.dropdown-list')
    var menu = $('.dropdown-menu')
    el.addEventListener('click', function (e) {
      if (list.classList.contains('visible')) {
        list.classList.remove('visible')
      } else {
        list.classList.add('visible')
      }
    })
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target)) {
        list.classList.remove('visible')
      }
    })
  }
}
