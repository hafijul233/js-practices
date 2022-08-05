import AssignmentItem from "./AssignmentItem.js";

export default {
    template: `
      <div v-show="assignments.length" class="m-4">
      <h2 class="font-bold mb-2">{{ title }}</h2>
      <ul class="border border-gray-600 divide-gray-600 divide-y rounded">
        <assignment-item 
            v-for="assignment in assignments"
            :key="assignment.id"
            :assignment="assignment"
        >
        </assignment-item>
      </ul>
      </div>
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