export default {
    data() {
        return {
            process: false
        }
    },
    template: `
      <button
          :class=" {
        'text-white font-bold p-4 rounded m-2 disabled:cursor-not-allowed' : true,
        'bg-blue-500 hover:bg-blue-700' : (type === 'blue'),
        'bg-green-500 hover:bg-green-700' : (type === 'green'),
        'bg-yellow-500 hover:bg-yellow-700' : (type === 'yellow'),
      }">
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