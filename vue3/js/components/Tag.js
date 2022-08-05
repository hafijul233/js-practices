export default {
    template: `
      <button
          v-for="tag in tags"
          :class="{
          'mx-1 my-3 border border-white hover:border-gray-600 hover:bg-white hover:text-gray-900 rounded px-2 py-1':true
          }"
      >
      {{ tag }}
      </button>`,
    data() {
        return {
            currentActiveTag: 'all'
        }
    },
    props: {
        initialTags: {
            type: Set,
            required: true,
            default: ['all']
        },
    },
    computed: {
        tags() {
            return this.initialTags;
        }
    },
    methods: {
        filterTag(tag) {
            this.$emit('filterTagWise', tag);
        }
    }
}