const app = Vue.createApp({
  data() {
      return {
          showPopup: false,
          form: {
              firstname: '',
              lastname: '',
              email: ''
          }
      };
  },
  methods: {
      togglePopup() {
          this.showPopup = !this.showPopup;
      },
      submitForm() {
          console.log(this.form);
          this.showPopup = false;
      }
  }
});

app.mount('#app');