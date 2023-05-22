import { PUBLIC_GHOST_CONTENT_API_KEY } from "$env/static/public";

export const load = async ({ fetch, params }) => {
  let data = await (
    await fetch(
      `http://127.0.0.1:2368/ghost/api/content/pages/slug/${params.slug}/?key=${PUBLIC_GHOST_CONTENT_API_KEY}`
    )
  ).json();
  return {
    pages: data.pages,
  };
};
