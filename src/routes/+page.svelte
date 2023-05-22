<script>
  export let data;
  let pages = data.pages;
</script>

<h1>Sveltekit Ghost CMS</h1>
<ul>
  {#each pages as page}
    <li><a href={`/${page.slug}`}>{page.title}</a></li>
  {/each}
</ul>
