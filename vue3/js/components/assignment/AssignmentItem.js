export default {
    template: `
      <li class="p-2 flex justify-between items-center">
        {{ assignment.name }}
         <input v-model="assignment.complete" class="ml-3" type="checkbox">
      </li>`,
    props: {
        assignment: {
            type: Object,
            required: true
        }
    }
}