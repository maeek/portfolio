import Vue from "vue";
import App from "./App.vue";
import "fullpage.js/vendors/scrolloverflow.min.js";
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
        { name: "JavaScript", description: "" },
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
    // {
    //   title: "",
    //   links: {
    //     live: "",
    //     code: ""
    //   },
    //   description: "",
    //   images: {
    //     desktop: "",
    //     mobile: ""
    //   }
    // },
    {
      title: "Editor",
      links: {
        live: "https://editor.eswomp.it/",
        code: "https://github.com/maeek/editor"
      },
      description: "Gist editor created with Vue.js, CodeMirror",
      images: {
        desktop: "editor-desktop",
        mobile: "editor-mobile"
      }
    },
    {
      title: "VV-Chat",
      links: {
        live: "https://chat.eswomp.it/",
        code: "https://github.com/maeek/vv-chat"
      },
      description:
        "WebSocket chat that doesn't save messages. Express.js, Socket.io",
      images: {
        desktop: "vv-desktop",
        mobile: "vv-mobile"
      }
    },
    {
      title: "StreamLink",
      links: {
        live: null,
        code: "https://github.com/maeek/streamLink"
      },
      description:
        "Get stream link for videos. Wrapper for: youtube-dl -g. Node.js",
      images: {
        desktop: "streamLink-desktop",
        mobile: "streamLink-mobile"
      }
    },
    {
      title: "Local-library",
      links: {
        live: null,
        code: "https://github.com/maeek/local-library-webapp"
      },
      description: "File browser written in node.js and vue.js",
      images: {
        desktop: "llw-desktop",
        mobile: "llw-mobile"
      }
    },
    {
      title: "PHP-WebShell",
      links: {
        live: null,
        code: null
      },
      description:
        "WebShell created in php, browsing, creating and deleting files. PHP, JQuery",
      images: {
        desktop: "panel-desktop",
        mobile: null
      }
    },
    {
      title: "Eswomp",
      links: {
        live: "https://eswomp.it/",
        code: null
      },
      description: "Webapp written in PHP, JQuery",
      images: {
        desktop: "eswomp-desktop",
        mobile: "eswomp-mobile"
      }
    }
  ]
};

Vue.use(VueFullPage);

new Vue({
  data: store,
  render: h => h(App)
}).$mount("#app");
