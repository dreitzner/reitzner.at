<script>
  import Wappen from '$lib/icons/Wappen.svelte';
  export let segment;
</script>

<style>
  nav {
    border-top: 10px solid #0c3d87;
    background: linear-gradient(rgba(255, 62, 0, 0.1), #fff 80%);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    background-color: #0c3d87;
    display: block;
    top: -1px;
    left: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  li a {
    text-decoration: none;
    padding: 0.5em 1em;
    display: block;
  }

  a :global(.wappen) {
    height: calc(40px - 0.2em);
    padding: 0.1em;
    margin-right: .9em;
  }
</style>

<nav class="flex">
  <a href="/">
    <Wappen />
  </a>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        home
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'music' ? 'page' : undefined}
        href="music">
        music
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        blog
      </a>
    </li>
  </ul>
</nav>
