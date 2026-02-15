import lume from "https://deno.land/x/lume@v3.2.1/mod.ts";
import robots from "https://deno.land/x/lume@v3.2.1/plugins/robots.ts";
import postcss from "https://deno.land/x/lume@v3.2.1/plugins/postcss.ts";
import seo from "https://deno.land/x/lume@v3.2.1/plugins/seo.ts";
import minify_html from "https://deno.land/x/lume@v3.2.1/plugins/minify_html.ts";

const site = lume();

site.use(robots());
site.use(postcss());
site.use(seo());
site.use(minify_html());

site.copy("style.css");
site.copy("CNAME");

export default site;
