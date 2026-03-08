import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();
site.use(postcss());
site.add("style.css");  // copy static files as-is
site.copy("CNAME");

export default site;