export default {
    template: `
      <div class="flex gap-2">
      <button
          v-for="tag in tags"
          @click="$emit('update:activeTag', tag)"
          :class="{
            'border mx-1 my-3 rounded p-1 hover:border-gray-600 hover:bg-white hover:text-gray-900' : true,
             'border-blue-600 text-blue-600': activeTag === tag,
          }"
      >
        {{ tag }}
      </button>
      </div>`,

    props: {
        initialTags: {
            type: Array,
            required: true
        },
        activeTag: {
            type: String,
            default: 'all'
        }
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        },
    }
}