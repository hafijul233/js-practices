export default {
    template: `
      <li v-for="assignment in inProgressAssignments" class="ml-2"
          :key="assignment.id">
      {{ assignment.name }}
      <input v-model="assignment.complete" type="checkbox">
      </li>`,
    props: {
        assignemt: {
            type: Object,
            required: true
        }
    }
}