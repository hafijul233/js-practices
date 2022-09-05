export default {
    template: `
      <form class="text-black flex justify-center" @submit.prevent="add">
      <label class="h2 block font-bold text-white hidden">New Assignment</label>
      <input
          class="text-black p-2 rounded-l-lg"
          type="text"
          v-model="name"
          placeholder="New assignment ...">
      <button type="submit" class="bg-white font-bold p-2 rounded-r-lg">Add</button>
      </form>`,
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add() {
            if (this.name.length > 0) {
                this.$emit('addAssignment', this.name);
                this.name = '';
            }
        }
    }
}