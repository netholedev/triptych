<script lang="ts">
  import { useNavigate, Link } from 'svelte-navigator';
  import { sidebarState, currentUserState, cleanTokens } from '../../store';

  const navigate = useNavigate();

  export const doLogout = () => {
    cleanTokens();
    navigate('/');
  };

  function toggleSidebar() {
    sidebarState.update((show) => !show);
  }
</script>

<header class="bg-white border-b border-gray-200 fixed h-15 z-30 w-full">
  <nav class="w-full">
    <div class="px-3 py-2 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            on:click={toggleSidebar}
            aria-expanded="true"
            aria-controls="sidebar"
            class="mr-2 lg:hidden text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              /></svg
            >
            <svg
              class="w-6 h-6 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              /></svg
            >
          </button>
          <Link to="/" class="text-xl font-bold flex items-center lg:ml-2.5">
            <span class="text-2xl mr-2">🎒</span>
            <span class="self-center whitespace-nowrap text-black">
              Triptych
              <small class="ml-1 text-sm font-normal text-red-500">Supplier</small>
            </span>
          </Link>
        </div>
        <div class="flex items-center space-x-3">
          {#if $currentUserState}
            <div>
              <Link
                class="py-2 px-3 text-white bg-red-500 border border-red-500 rounded-full text-sm font-semibold"
                to="/profile"
              >
                {$currentUserState.first_name[0]}
              </Link>
            </div>
            <div>
              <a
                class="py-2 px-3 m-0 hover:text-white text-red-500 hover:bg-red-500 border border-red-500 rounded-full text-sm font-semibold"
                href="javascript:void(0)"
                on:click={doLogout}
              >
                Logout
              </a>
            </div>
          {:else}
            <div>
              <Link
                class="py-2 px-3 hover:text-white text-white bg-red-500 border border-red-500 rounded-full text-sm font-semibold"
                to="/login"
              >
                Get Started
              </Link>
            </div>
            <div>
              <Link
                class="py-2 px-3 hover:text-white text-red-500 hover:bg-red-500 border border-red-500 rounded-full text-sm font-semibold"
                to="/login"
              >
                Login
              </Link>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </nav>
</header>
