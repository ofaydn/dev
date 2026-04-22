import lume from "lume/mod.ts";

const site = lume({ location: new URL("https://ofaydn.dev/") });
site.add("style.css");
site.copy("CNAME");

export default site;