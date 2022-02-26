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

          <BaseButton
            class="text-body-2 font-medium flex items-center justify-center"
            @click="showModalAddPropertie = true"
          >
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

        <div
          class="mt-5 grid grid-cols-7 text-body-2 px-3 py-2 gap-3 bg-gray-300/70 rounded"
          v-for="(property, index) in template.properties"
          :key="index"
        >
          <div class="col-span-2">
            {{ property.name }}
          </div>

          <div class="col-span-3">
            {{ property.value }}
          </div>

          <div class="text-gray-700 hover:text-primary cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>

          <div class="text-gray-700 hover:text-accent-red cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
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

    <TheModal :open.sync="showModalAddPropertie" :backdrop="true">
      <div class="max-w-[320px] w-full bg-white p-5 rounded-lg z-10 text-left overflow-hidden">
        <div class="w-full flex flex-col space-y-5 items-center">
          <div class="text-lg text-gray-900 font-medium">Property</div>

          <form class="mx-auto w-full">
            <div>
              <input
                v-model.trim="property.name"
                :class="{
                  'appearance-none block w-full text-body-2 text-gray-700 border border-primary-background rounded py-3 px-4 mb-2.5 leading-tight': true,
                }"
                type="text"
                placeholder="Name"
              />
            </div>

            <div>
              <select
                v-model="property.type"
                class="appearance-none block w-full text-body-2 text-gray-700 border border-primary-background rounded py-3 px-4 mb-2.5 leading-tight border-neutral-mid/20"
              >
                <option v-for="type in types" :value="type.value" :key="type.value">
                  {{ type.name }}
                </option>
              </select>
            </div>

            <div>
              <input
                v-model.trim="property.value"
                :class="{
                  'appearance-none block w-full text-body-2 text-gray-700 border border-primary-background rounded py-3 px-4 mb-2.5 leading-tight': true,
                }"
                type="text"
                placeholder="Value"
              />
            </div>
          </form>

          <BaseButton class="text-body-2 font-medium" @click="addProperty">Confirm</BaseButton>
        </div>
      </div>
    </TheModal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import _ from 'lodash';

const types = [
  {
    value: 'string',
    name: 'string',
  },
  {
    value: 'number',
    name: 'number',
  },
  {
    value: 'boolean',
    name: 'boolean',
  },
];
export default {
  name: 'Detail',

  data() {
    return {
      types,
      showModalAddPropertie: false,
      property: {
        name: '',
        type: 'string',
        value: '',
      },
    };
  },

  computed: {
    ...mapGetters({
      template: 'template/currentTemplate',
    }),
  },

  methods: {
    addProperty() {
      const _property = _.cloneDeep(this.property);
      this.form.properties.push(_property);

      this.resetProperty();

      this.showModalAddPropertie = false;
    },

    resetProperty() {
      this.property = {
        name: '',
        type: 'string',
        value: '',
      };
    },
  },
};
</script>
