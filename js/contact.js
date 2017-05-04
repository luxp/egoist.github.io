;(function () {
  Vue.config.delimiters = ['${', '}']
  new Vue({
    el: '#contact-form',
    data: function () {
      return {
        sending: false,
        message: {
          name: '',
          email: '',
          subject: '',
          text: ''
        },
        error: '',
        success: ''
      }
    },
    methods: {
      submit: function () {
        this.sending = true
        this.error = ''
        this.success = ''
        if (!this.validData()) return
        axios.post('https://mailto.leanapp.cn/api/send', this.message)
          .then(function (response) {
            this.sending = false
            if (response.data.error) {
              this.error = response.data.error
              this.success = ''
            } else {
              this.error = ''
              this.success = response.data.message
            }
          }.bind(this))
          .catch(function (error) {
            this.error = error.message
            this.sending = false
          }.bind(this))
      },
      validData: function () {
        for (var key in this.message) {
          if (!this.message[key]) {
            this.error = 'Form data is not complete!'
            this.success = ''
            this.sending = false
            return false
          }
        }
        return true
      }
    }
  })
}());
