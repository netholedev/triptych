<script lang="ts">
  import PrivateLayout from '../components/common/PrivateLayout.svelte';
  import { currentUserState } from '../store';
</script>

<PrivateLayout>
  <h1>Selam, {$currentUserState?.first_name} {$currentUserState?.last_name}</h1>
</PrivateLayout>
