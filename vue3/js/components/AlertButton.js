export default {
    data() {
        return {
            process: false
        }
    },
    template: `
      <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded m-2 disabled:cursor-not-allowed"
          :disabled="process" v-on:click="toggleButton">
      <slot/>
      </button>
    `,

    props: {
        type: {
            type: String,
            default: 'blue'
        }
    },
    methods: {
        toggleButton() {
            this.process = !this.process;
        }
    }
}