<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { Writable, writable } from 'svelte/store';

  import Alert from './Alert.svelte';

  import { api } from '../../plugins';
  import type { Result } from '../../interfaces';

  export let action = '/';
  export let method = 'POST';

  export let onResult: (state: { result: Result; isLoading: Writable<boolean> }) => void = () => {};
  export const loadingState = writable<boolean>(false);

  let result: Result;

  const onSubmit = async (e: any) => {
    loadingState.set(true);

    const form: HTMLFormElement = e.target;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const uri = new URL(form.action).pathname;

    result = await api(uri, {
      method: form.method as any,
      data,
    })
      .then((r) => {
        return {
          data: r.data,
        };
      })
      .catch((err) => {
        return { error: err.response.data };
      })
      .finally(() => {
        loadingState.set(false);
      });
  };

  $: error = result?.error;

  afterUpdate(() => onResult({ result, isLoading: loadingState }));
</script>

<form {method} {action} on:submit|preventDefault={onSubmit}>
  {#if error}
    <div class="my-2">
      <Alert message={error.code.toString()} />
    </div>
  {/if}

  <slot />
</form>
