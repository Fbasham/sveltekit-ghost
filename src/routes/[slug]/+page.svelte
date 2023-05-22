<script>
  export let data;
  let page = data.pages[0];
</script>

<h1>{page.title}</h1>
{@html page.html}
