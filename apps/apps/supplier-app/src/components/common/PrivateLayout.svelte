<script lang="ts">
  import { useNavigate } from 'svelte-navigator';
  import { currentUserState } from '../../store';

  const nagivate = useNavigate();

  if (!$currentUserState) {
    nagivate('/');
  }
</script>

<main class="pt-12 bg-gray-50 transition ease-in-out duration-700 w-full">
  <slot />
</main>
