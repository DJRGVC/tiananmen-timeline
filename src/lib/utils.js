export async function getJson(url, fetch = window.fetch) {
    let response = await fetch(url);
    return await response.json();
  }