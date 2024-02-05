export const prerender = true;

import { base } from "$app/paths";
import { getJson } from "$lib/utils";

export async function load({fetch}){
    let text = await getJson(`${base}/data/text.json`, fetch)
    return {text}
}