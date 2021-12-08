<script lang="ts">
  import { fly } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';

  import PublicLayout from '../components/common/PublicLayout.svelte';
  import Hero from '../components/home/Hero.svelte';
</script>

<PublicLayout>
  <Hero />

  <section class="mx-auto container px-4 lg:px-0">
    <div class="px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-black tracking-widest font-medium title-font mb-1">
          THIS IS A USEFUL SMALL TEXT
        </h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-black">
          Tell them something about this cards.
        </h1>
      </div>

      <div class="flex flex-wrap -m-4">
        {#each Array(3) as _, i}
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full p-8 flex-col">
              <div class="w-full flex justify-center items-center mb-4">
                <img
                  class="h-24"
                  src="https://cdn-icons-png.flaticon.com/512/1243/1243420.png"
                  alt="annen"
                />
              </div>
              <div class="flex items-center mb-3">
                <h2 class="text-gray-700 text-lg title-font font-bold text-center w-full">TITLE</h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-gray-700 font-medium">
                  House V replaces a property that had been built on the site nearly 80 years ago..
                </p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section>VIATOR'UN AYNISI</section>

  <section>FAQ</section>
</PublicLayout>
