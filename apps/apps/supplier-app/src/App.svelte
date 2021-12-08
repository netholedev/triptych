<script lang="ts">
  import { register, init, isLoading } from 'svelte-i18n';
  import { Router, Link, Route } from 'svelte-navigator';

  import Header from './components/common/Header.svelte';
  import Footer from './components/common/Footer.svelte';
  import Sidebar from './components/common/Sidebar.svelte';

  import HomePage from './pages/home.svelte';
  import RegisterPage from './pages/register.svelte';
  import LoginPage from './pages/login.svelte';
  import ProfilePage from './pages/profile.svelte';

  import { sidebarState } from './store';

  let showSidebar: boolean = false;

  sidebarState.subscribe((show: boolean) => {
    showSidebar = show;
  });

  // @ts-ignore
  register('tr-TR', () => import('./locales/tr-TR.json'));
  // @ts-ignore
  register('en-GB', () => import('./locales/en-GB.json'));

  init({
    fallbackLocale: 'en-GB',
    initialLocale: 'en-GB',
  });

  const onResize = () => {
    if (window.innerWidth >= 1024) {
      sidebarState.set(false);
    }
  };
</script>

<svelte:window on:resize={onResize} />

{#if $isLoading}
  Please wait...
{:else}
  <Router>
    <Header />
    <Sidebar bind:show={showSidebar} />

    <div class="flex flex-col justify-between items-start min-h-screen">
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/profile" component={ProfilePage} />
      <Footer />
    </div>
  </Router>
{/if}
