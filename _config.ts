import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";

const site = lume({ location: new URL("https://ofaydn.dev/") });
site.use(date());
site.copy("_assets","assets");
site.add("style.css");
site.copy("CNAME");

export default site;