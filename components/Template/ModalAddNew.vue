<template>
  <div>
    <TheModal :open.sync="_visible" :backdrop="true">
      <div class="max-w-[800px] w-full bg-white p-5 rounded-lg z-10 text-left overflow-hidden">
        <div class="w-full flex flex-col space-y-5 items-center">
          <div class="text-xl font-medium">Add Template</div>

          <form class="mx-auto w-full grid grid-cols-2 gap-5 overflow-auto">
            <div>
              <div>
                <label class="block text-body-2 text-gray-700 font-medium tracking-wide mb-2 mt-4" for="grid-name">
                  Name
                </label>

                <input
                  id="grid-name"
                  v-model.trim="form.name"
                  :class="{
                    'appearance-none block w-full text-body-2 text-gray-700 border border-primary-background rounded py-3 px-4 mb-2.5 leading-tight': true,
                  }"
                  type="text"
                  placeholder="Template name"
                />
              </div>

              <div>
                <label
                  class="block text-body-2 text-gray-700 font-medium tracking-wide mb-2 mt-4"
                  for="grid-description"
                >
                  Description
                </label>

                <input
                  id="grid-description"
                  v-model.trim="form.description"
                  :class="{
                    'appearance-none block w-full text-body-2 text-gray-700 border border-primary-background rounded py-3 px-4 mb-2.5 leading-tight': true,
                  }"
                  type="text"
                  placeholder="Template description"
                />
              </div>

              <div>
                <label class="block text-body-2 text-gray-700 font-medium tracking-wide mt-4" for="grid-image">
                  Image
                </label>

                <BaseUploadFile
                  id="grid-image"
                  :preview.sync="form.avatar"
                  @on-read-file="onReadFile"
                  :loading="loadingUploadImage"
                />
              </div>

              <div>
                <div>
                  <label class="block text-body-2 text-gray-700 font-medium tracking-wide mb-2 mt-4"> Cap </label>

                  <div class="w-full h-[42px] grid grid-cols-2 gap-5">
                    <div
                      @click="form.cap = 'limited'"
                      :class="{
                        'flex items-center justify-center text-body-1 text-gray-100 font-medium rounded cursor-pointer py-3 px-4 bg-gray-900/70 hover:bg-primary': true,
                        '!bg-primary': form.cap === 'limited',
                      }"
                    >
                      Limited
                    </div>

                    <div
                      @click="form.cap = 'unlimited'"
                      :class="{
                        'flex items-center justify-center text-body-1 text-gray-100 font-medium rounded cursor-pointer py-3 px-4 bg-gray-900/70 hover:bg-primary': true,
                        '!bg-primary': form.cap === 'unlimited',
                      }"
                    >
                      Unlimited
                    </div>
                  </div>

                  <input
                    v-if="form.cap === 'limited'"
                    v-model.trim="form.capValue"
                    :class="{
                      'appearance-none mt-4 block w-full text-body-2 text-gray-700 border border-primary-background rounded py-3 px-4 mb-2.5 leading-tight': true,
                    }"
                    type="number"
                    placeholder="Cap"
                  />
                </div>
              </div>
            </div>

            <div>
              <div>
                <label class="block text-body-2 text-gray-700 font-medium tracking-wide mb-2 mt-4"> Type </label>

                <div class="w-full h-[42px] grid grid-cols-2 gap-5">
                  <div
                    @click="form.type = 'ft'"
                    :class="{
                      'flex items-center justify-center text-body-1 text-gray-100 font-medium rounded cursor-pointer py-3 px-4 bg-gray-900/70 hover:bg-primary': true,
                      '!bg-primary': form.type === 'ft',
                    }"
                  >
                    FT
                  </div>

                  <div
                    @click="form.type = 'nft'"
                    :class="{
                      'flex items-center justify-center text-body-1 text-gray-100 font-medium rounded cursor-pointer py-3 px-4 bg-gray-900/70 hover:bg-primary': true,
                      '!bg-primary': form.type === 'nft',
                    }"
                  >
                    NFT
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-body-2 text-gray-700 font-medium tracking-wide mb-2 mt-4">
                  <div class="flex justify-between">
                    <span> Custom Properties </span>

                    <div @click="showModalAddPropertie = true" class="cursor-pointer text-gray-700 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </label>

                <BaseBlock class="flex flex-col gap-3 rounded h-[304px] overflow-auto">
                  <div
                    class="grid grid-cols-7 text-body-2 px-2 py-1 gap-3 bg-gray-300/70 rounded"
                    v-for="(property, index) in form.properties"
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
              </div>
            </div>
          </form>

          <BaseButton @click="addNewTemplate" :loading="loadingAddNewTemplate">Confirm</BaseButton>
        </div>
      </div>
    </TheModal>

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
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      types,
      loadingUploadImage: false,
      loadingAddNewTemplate: false,
      showModalAddPropertie: false,
      form: {
        name: '',
        description: '',
        avatar: '',
        type: 'nft',
        cap: 'unlimited',
        capValue: 0,
        properties: [],
      },
      property: {
        name: '',
        type: 'string',
        value: '',
      },
    };
  },

  computed: {
    _visible: {
      get() {
        return this.visible;
      },
      set(value) {
        this.$emit('update:visible', value);
      },
    },
  },

  methods: {
    async addNewTemplate() {
      this.loadingAddNewTemplate = true;
      this.form.avatar = 'https://articulate-heroes.s3.amazonaws.com/uploads/rte/obsyrzev_free-elearning-games.png';

      const _form = _.cloneDeep(this.form);
      await this.$store.dispatch('template/addNewTemplate', _form);

      this.resetForm();
      this.resetProperty();

      await new Promise((r) => setTimeout(r, 700));

      this.loadingAddNewTemplate = false;
      this._visible = false;
    },

    async onReadFile(image) {
      this.loadingUploadImage = true;

      const bodyFormData = new FormData();
      bodyFormData.append('file', image);

      try {
        // const resFile = await this.$store.dispatch('indexers/uploadImage', bodyFormData);
        // if (resFile && resFile.publicUrl) {
        //   this.form.avatar = resFile.publicUrl;
        // }
      } catch (error) {
        console.log('error :>> ', error);
      }

      this.loadingUploadImage = false;
    },

    addProperty() {
      const _property = _.cloneDeep(this.property);
      this.form.properties.push(_property);

      this.resetProperty();

      this.showModalAddPropertie = false;
    },

    resetForm() {
      this.form = {
        name: '',
        description: '',
        avatar: '',
        type: 'nft',
        cap: 'unlimited',
        properties: [],
      };
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
