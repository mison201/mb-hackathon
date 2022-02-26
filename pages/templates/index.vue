<template>
  <div class="py-10 h-full">
    <TemplateList v-if="templates.length" @addNewTemplate="addNewTemplate" />
    <TemplateEmpty v-else @addNewTemplate="addNewTemplate" />

    <TemplateModalAddNew :visible.sync="showModalAddnewTemplate" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Templates',

  data() {
    return {
      showModalAddnewTemplate: false,
    };
  },

  computed: {
    ...mapGetters({
      templates: 'template/list',
    }),
  },

  methods: {
    addNewTemplate() {
      this.showModalAddnewTemplate = true;
    },
  },
};
</script>
