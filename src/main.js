import Vue from "vue";
import App from "./App.vue";
import VueFullPage from "vue-fullpage.js";

Vue.config.productionTip = false;

const store = {
  qualifications: [
    {
      code: "E.12",
      name: "Assembly and operation of personal computers and external devices"
    },
    {
      code: "E.13",
      name: "Designing of local computer networks and network administration"
    },
    {
      code: "E.14",
      name:
        "Creation of web applications and databases and database administration"
    }
  ],
  technologies: [
    {
      column: [
        { name: "HTML", description: "" },
        { name: "CSS", description: "" },
        { name: "JavaScript/ES6+", description: "" },
        { name: "MySQL", description: "" },
        { name: "PHP", description: "" },
        { name: "SCSS", description: "" },
        { name: "NodeJS", description: "" }
      ]
    },
    {
      column: [
        { name: "VueJS", description: "" },
        { name: "Vuex", description: "" },
        { name: "JQuery", description: "" },
        { name: "ExpressJS", description: "" },
        { name: "Docker", description: "" },
        { name: "Git", description: "" },
        { name: "DevTools", description: "" },
        { name: "Photoshop", description: "" }
      ]
    }
  ],
  projects: [
    {
      title: "",
      links: {
        live: "",
        code: ""
      },
      description: "",
      images: {
        desktop: "",
        mobile: ""
      }
    },
    {
      title: "Editor",
      links: {
        live: "https://editor.eswomp.it/",
        code: "https://github.com/maeek/editor"
      },
      description: "Gist editor created with Vue.js",
      images: {
        desktop: "",
        mobile: ""
      }
    }
  ]
};

Vue.use(VueFullPage);

new Vue({
  data: store,
  render: h => h(App)
}).$mount("#app");
