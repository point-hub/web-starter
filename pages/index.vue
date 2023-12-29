<script setup lang="ts">
import { BaseAccordion, BaseAccordionItem } from '@point-hub/papp'

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
  <div>
    <component :is="BaseAccordion">
      <component :is="BaseAccordionItem" :item-id="1" title="Accordion #1" content="Hello World"></component>
      <component :is="BaseAccordionItem" :item-id="2" title="Accordion #2" content="Hello World"></component>
      <component :is="BaseAccordionItem" :item-id="3" title="Accordion #3" content="Hello World"></component>
    </component>
    <BaseIcon icon="" />
  </div>
</template>
