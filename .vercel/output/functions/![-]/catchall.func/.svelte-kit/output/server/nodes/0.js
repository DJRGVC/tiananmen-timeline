import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.TTKSgFw9.js","_app/immutable/chunks/scheduler.zEsWufrc.js","_app/immutable/chunks/index.IZZh_heo.js"];
export const stylesheets = ["_app/immutable/assets/0.cPQ-RpjB.css","_app/immutable/assets/main.HmAnEmgj.css"];
export const fonts = [];
