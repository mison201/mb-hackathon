<template>
  <BaseBlock class="flex flex-col space-y-5 items-center justify-center h-[260px] w-[205px]">
    <div class="flex flex-col space-y-2 items-center">
      <div class="w-20 h-20 rounded-full relative overflow-hidden">
        <img class="h-full object-cover" :src="template.avatar" alt="" srcset="" />
      </div>

      <div class="text-body-1 font-medium text-gray-700">
        {{ template.name }}
      </div>
    </div>

    <BaseButton class="text-body-2 font-medium" @click="viewDetail">View detail</BaseButton>
  </BaseBlock>
</template>

<script>
import _ from 'lodash';

export default {
  props: {
    template: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    viewDetail() {
      const _template = _.cloneDeep(this.template);
      this.$store.commit('template/setCurrentTemplate', _template);
      this.$router.push({ name: 'templates-id', params: { id: 'test' } });
    },
  },
};
</script>
