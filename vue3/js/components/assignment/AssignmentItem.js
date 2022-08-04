export default {
    template: `
      <li>
        {{ assignment.name }}
         <input v-model="assignment.complete" type="checkbox">
      </li>`,
    props: {
        assignment: {
            type: Object,
            required: true
        }
    }
}