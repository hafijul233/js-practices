export default {
    template: `
      <div class="flex gap-2">
      <button
          @click="$emit('change', tag)"
          v-for="tag in tags"
          class="border mx-1 my-3 rounded px-2 py-1 hover:border-gray-600 hover:bg-white hover:text-gray-900"
          :class="{
          'border-white text-white': tag !== currentActiveTag,
          'border-blue text-blue': tag === currentActiveTag,
          }"
      >
        {{ tag }}
      </button>
      </div>`,

    props: {
        initialTags: {
            type: Array,
            required: true,
            default: ['all']
        },
        currentActiveTag: {
            type: String,
            default: 'all'
        }
    },

    computed: {
        tags() {
            const tags =  ['all', ...new Set(this.initialTags)];
            console.log(tags);
            return tags;
        },
    }
}