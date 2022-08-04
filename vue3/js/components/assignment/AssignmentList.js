import AssignmentItem from "./AssignmentItem.js";

export default {
    template: `
      <section v-show="assignments.length" class="m-4">
      <h2 class="font-bold mb-2">{{ title }}</h2>
      <ul>
        <assignment-item 
            v-for="assignment in assignments" class="ml-2"
            :key="assignment.id"
            :assignment="assignment"
        >
        </assignment-item>
      </ul>
      </section>
    `,
    props: {
        title: {
            type: String,
            default: 'Assignments'
        },
        assignments: {
            type: Array,
            required: true
        }
    },
    components: {
        'assignment-item': AssignmentItem
    }
}