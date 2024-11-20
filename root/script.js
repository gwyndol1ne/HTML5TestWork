const app = Vue.createApp({
    data() {
      return {
        popupVisible: false,
        loading: true,
        contact: {
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        },
        registerData: {
          firstname: "",
          lastname: "",
          email: "",
          privacy: false,
        },
      };
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    methods: {
      sendMessage() {
        alert("Message sent!");
      },
      register() {
        if (!this.registerData.privacy) {
          alert("Please accept the privacy policy.");
          return;
        }
        alert(`Welcome, ${this.registerData.firstname}!`);
        this.registerData = { firstname: "", lastname: "", email: "", privacy: false };
      },
    },
  });
  
  app.mount("#app");
  