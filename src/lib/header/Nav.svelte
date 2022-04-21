<script lang="ts">
  import Search from "$lib/header/components/search.svelte";
</script>

<nav class="navbar shadow-md">
  <div class="flex-1">
    <a href="/new-note" class="btn btn-ghost space-x-3">
      <span>Add note</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </a>
  </div>
  <div class="flex-none">
    <Search />
  </div>
</nav>
