<template>
  <div class="py-10 w-full">
    <div class="capitalize text-xl font-medium mb-5">{{ template.name }}</div>

    <div class="grid grid-cols-3 grid-rows-3 gap-5">
      <BaseBlock>
        <div class="flex items-center gap-3">
          <div class="w-20 h-20 rounded-full relative overflow-hidden">
            <img class="h-full object-cover" :src="template.avatar" alt="" srcset="" />
          </div>

          <div class="flex flex-col gap-1 text-body-2 text-gray-700">
            <div>Description: {{ template.description }}</div>

            <div>Template id: 123</div>

            <div>Template Type: {{ template.type }}</div>
          </div>
        </div>
      </BaseBlock>

      <BaseBlock class="col-span-2 row-span-3">
        <div class="flex items-center justify-between gap-2 text-lg text-gray-700 font-medium">
          <span> Custom Properties </span>

          <BaseButton class="text-body-2 font-medium flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add
          </BaseButton>
        </div>
      </BaseBlock>

      <BaseBlock class="flex flex-col justify-between gap-1">
        <div class="flex items-center gap-2 text-lg text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            />
          </svg>

          Total Cap
        </div>

        <div class="w-full text-center capitalize text-lg">
          {{ template.cap === 'limited' ? template.capValue : template.cap }}
        </div>
      </BaseBlock>
      <BaseBlock class="flex flex-col justify-between gap-1">
        <div class="flex items-center gap-2 text-lg text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          Total Supply
        </div>

        <div class="w-full text-center capitalize text-lg">0</div>
      </BaseBlock>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Detail',

  computed: {
    ...mapGetters({
      template: 'template/currentTemplate',
    }),
  },
};
</script>
