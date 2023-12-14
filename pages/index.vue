<script setup lang="ts">
import { BaseAlert } from '@point-hub/papp'
useHead({
  title: 'Pointhub',
  meta: [
    {
      name: 'description',
      content:
        'Pointhub stand first to adopt all the latest technologies to provide our clients with some unique, agile, adaptable and highly solutive developments.'
    }
  ]
})
</script>

<template>
  <div class="flex-1 flex flex-col justify-center">
    <component :is="BaseAlert" color="primary" title="Welcome">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti incidunt praesentium quae, quibusdam natus
      dolorem beatae vero quis eius minima ipsum non voluptatem repellendus deserunt architecto laudantium doloremque
      rerum eveniet.
    </component>
  </div>
</template>
