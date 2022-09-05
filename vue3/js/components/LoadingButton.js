export default {
    data() {
        return {
            color : "lime"
        }
    },

    template: `
      <button
          :class="{
        'text-white font-bold p-4 rounded m-2 disabled:cursor-not-allowed' : true,
        'bg-blue-500 hover:bg-blue-700' : (type === 'blue'),
        'bg-green-500 hover:bg-green-700' : (type === 'green'),
        'bg-yellow-500 hover:bg-yellow-700' : (type === 'yellow'),
        'bg-lime-500 hover:bg-lime-700' : (type === 'lime'),
        'is-loading' : (processing == true)
      }"
      :disabled="processing">
      <slot/>
      </button>
    `,

    props: {
        type: {
            type: String,
            default: 'blue'
        },
        processing: {
            type: Boolean,
            default: true
        }
    }


}