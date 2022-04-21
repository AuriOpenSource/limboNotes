<script context="module" lang="ts">
  import type { LoadInput } from "@sveltejs/kit";
  export async function load({ params }: LoadInput) {
    return {
      props: {
        noteId: params.id,
      },
    };
  }
</script>

<script>
  export let noteId;

  console.log(noteId);
</script>
