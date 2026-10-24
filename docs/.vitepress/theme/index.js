import Layout from "./Layout.vue";
import ThemeBuilder from "./ThemeBuilder.vue";
import Demo from "./Demo.vue";
import "../../../dist/de-gualle.scoped.css";
import "./docs.css";
export default {
  Layout,
  enhanceApp({ app }) {
    app.component("ThemeBuilder", ThemeBuilder);
    app.component("Demo", Demo);
  },
};
