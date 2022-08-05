export default {
    template: `
      <button 
          class="mx-1 my-3 border border-white hover:border-gray-600 hover:bg-white hover:text-gray-900 rounded px-2 py-1"
          @click="filterTag(tag)"
      >
      {{ tag }}
      </button>`,
    props: {
        tag: {
            type: String,
            required: true,
            default: ''
        },
    },
    computed: {},
    methods : {
        filterTag(tag) {
            this.$emit('filterTagWise', tag);
        }
    }
}