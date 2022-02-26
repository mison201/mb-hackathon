<template>
  <TheModal :open.sync="_visible" :backdrop="true">
    <div class="max-w-[570px] w-full bg-white p-5 rounded-lg z-10 text-left overflow-hidden">
      <div class="w-full flex flex-col space-y-5 items-center">
        <div class="text-xl font-medium">Add game</div>

        <form class="mx-auto w-full">
          <div>
            <input
              v-model.trim="form.name"
              :class="{
                'appearance-none block w-full text-body-2 text-gray-700 border border-primary-background rounded py-3 px-4 mb-2.5 leading-tight': true,
              }"
              type="text"
              placeholder="Game name"
            />
          </div>

          <div>
            <input
              v-model.trim="form.description"
              :class="{
                'appearance-none block w-full text-body-2 text-gray-700 border border-primary-background rounded py-3 px-4 mb-2.5 leading-tight': true,
              }"
              type="text"
              placeholder="Game description"
            />
          </div>

          <div>
            <BaseUploadFile :preview.sync="form.avatar" @on-read-file="onReadFile" :loading="loadingUploadImage" />
          </div>

          <div>
            <label class="block text-body-1 font-medium tracking-wide mb-2 mt-4" for="grid-blockchain">
              Blockchain
            </label>

            <select
              id="grid-blockchain"
              v-model="form.blockchain"
              class="appearance-none block w-full text-body-2 text-gray-700 border border-primary-background rounded py-3 px-4 mb-2.5 leading-tight border-neutral-mid/20"
            >
              <option v-for="blockchain in blockchains" :value="blockchain.value" :key="blockchain.value">
                {{ blockchain.name }}
              </option>
            </select>
          </div>
        </form>

        <BaseButton @click="addNewGame" :loading="loadingAddNewGame">Confirm</BaseButton>
      </div>
    </div>
  </TheModal>
</template>

<script>
import _ from 'lodash';

const blockchains = [
  {
    value: 'solana',
    name: 'Solana',
  },
  {
    value: 'polygon',
    name: 'Polygon',
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
      blockchains,
      loadingUploadImage: false,
      loadingAddNewGame: false,
      form: {
        name: '',
        description: '',
        blockchain: 'solana',
        avatar: '',
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
    async addNewGame() {
      this.loadingAddNewGame = true;
      this.form.avatar = 'https://www.meme-arsenal.com/memes/1c9bec1c1817f33f756ce195fab4e02f.jpg';
      await this.$store.dispatch('game/addNewGame', this.form);

      this.resetForm();

      await new Promise((r) => setTimeout(r, 700));

      this.loadingAddNewGame = false;
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

    resetForm() {
      this.form = {
        name: '',
        description: '',
        blockchain: 'solana',
        avatar: '',
      };
    },
  },
};
</script>
