import lume from "https://deno.land/x/lume/cli.ts";
import robots from "lume/plugins/robots.ts";
import postcss from "lume/plugins/postcss.ts";
import seo from "lume/plugins/seo.ts";
import minify_html from "lume/plugins/minify_html.ts";

const site = lume();

site.use(robots());
site.use(postcss());
site.use(seo());
site.use(minify_html());
site.copy("style.css");
site.copy("CNAME");
export default site;
