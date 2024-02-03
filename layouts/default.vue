<template>
  <header>Header</header>
  <main>
    <Grid>
      <Sidebar
        :class="{}"
        class="absolute left-0 top-0 bottom-0 md:static md:col-span-4"
      />
      <slot class="col-span-4 md:col-span-8" />
    </Grid>
  </main>

  <footer>Footer</footer>
</template>
