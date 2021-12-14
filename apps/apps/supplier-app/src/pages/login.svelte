<script lang="ts">
  import { useNavigate } from 'svelte-navigator';
  import type { Writable } from 'svelte/store';
  
  import { setTokens } from '../store';

  import PublicLayout from '../components/common/PublicLayout.svelte';
  import Form from '../components/ui/Form.svelte';
  import LoadingSpinner from '../components/ui/LoadingSpinner.svelte';

  let loading: Writable<boolean>;

  const navigate = useNavigate();

  const onResult = ({ result, isLoading }) => {
    loading = isLoading;

    if (result?.error) {
      console.error(result?.error.code);
    }

    if (result?.data) {
      setTokens(result.data);
      navigate('/');
    }
  };
</script>

<PublicLayout hideFromUser={true}>
  <section class="mx-auto container px-4 lg:px-0">
    <div class="mt-4">
      <div class="flex flex-1 items-center justify-center">
        <div class="px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">Sign in</h1>

          <Form method="POST" action="/auth/login" {onResult}>
            <fieldset class="text-center">
              <div class="py-2 text-left">
                <input
                  type="email"
                  name="email"
                  class="bg-white border-2 border-gray-300 focus:outline-none focus:border-gray-500 transition ease-in-out delay-50 block w-full py-2 px-4 rounded-full"
                  placeholder="user@email.net"
                />
              </div>

              <div class="py-2 text-left">
                <input
                  type="password"
                  name="password"
                  class="bg-white border-2 border-gray-300 focus:outline-none focus:border-gray-500 transition ease-in-out delay-50 block w-full py-2 px-4 rounded-full"
                  placeholder="Password"
                />
              </div>

              <div class="py-2">
                <button
                  disabled={$loading}
                  type="submit"
                  class="flex justify-center items-center focus:outline-none bg-red-500 text-white font-bold tracking-wider block w-full p-2 rounded-full hover:bg-red-700"
                >
                  {#if $loading}
                    <LoadingSpinner size={8} />
                  {:else}
                    Sign In
                  {/if}
                </button>
              </div>

              <div class="text-center">
                <a href="#" class="hover:underline">Forgot password?</a>
              </div>
              <div class="text-center mt-12">
                <span> Don't have an account? </span>
                <a
                  href="#"
                  class="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"
                  >Create One</a
                >
              </div>
            </fieldset>
          </Form>
        </div>
      </div>
    </div>
  </section>
</PublicLayout>
