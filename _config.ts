import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";

const site = lume({ location: new URL("https://ofaydn.dev/") });
site.use(date());
site.copy("CNAME");
site.copy("_assets","assets");
site.add("style.css");


export default site;