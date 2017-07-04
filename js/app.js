var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

document.addEventListener('DOMContentLoaded', ready)

function ready() {
  if (location.hostname === 'blog.egoist.moe') {
    $('.coding-support').classList.add('visible')
  }
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
}
