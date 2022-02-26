<template>
  <div>
    <div class="w-full flex justify-between">
      <div class="text-xl font-medium mb-5">Templates: {{ templates.length }}</div>

      <BaseButton class="text-body-2 font-medium" @click="$emit('addNewTemplate')">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>

        Add template
      </BaseButton>
    </div>
    <div class="flex flex-wrap gap-5">
      <template v-for="template in templates">
        <TemplateCard :key="template.id" :template="template" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      templates: 'template/list',
    }),
  },
};
</script>
