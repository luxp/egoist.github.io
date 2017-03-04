;(function () {
  var reposTemplate = "\n  <div id=\"repos\">\n    <span v-if=\"repos.length === 0\">\n    loading...\n    </span>\n    <div class=\"repo\" v-for=\"repo in repos\">\n      <h2><span>{{repo.owner === 'egoist' ? '' : (repo.owner + ' / ')}}{{ repo.repo }}</span></h2>\n      <p class=\"description\" v-html=\"repo.description\"></p>\n      <div class=\"repo-meta\">\n        <span class=\"repo-meta-item\">\n          <svg id=\"i-code\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.25%\">\n            <path d=\"M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27\" />\n          </svg>\n          {{ repo.language }}\n        </span>\n        <span class=\"repo-meta-item\">\n          <svg id=\"i-star\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.25%\">\n            <path d=\"M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z\" />\n          </svg>\n          {{ repo.stars }}\n        </span>\n        <a class=\"repo-meta-item\" :href=\"'https://github.com/' + repo.owner + '/' + repo.repo\" target=\"_blank\">\n          <svg id=\"i-external\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.25%\">\n            <path d=\"M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18\" />\n          </svg>\n          GitHub\n        </a>\n      </div>\n    </div>\n  </div>\n  "
  new Vue({
    el: '#repos',
    template: reposTemplate,
    data: {
      repos: []
    },
    created: function created() {
      this.fetchRepos()
    },
    methods: {
      fetchRepos: function fetchRepos() {
        var this$1 = this;

        axios.get('https://gh-pinned-repos-vssdymveuj.now.sh/?username=egoist')
          .then(function (res) { return res.data; })
          .then(function (data) {
            this$1.repos = data
          })
      }
    }
  })
})();
