import AssignmentItem from "./AssignmentItem.js";
import AssignmentTag from "./AssignmentTag.js";

export default {
    template: `
      <div v-show="filteredAssignment.length" class="m-4">

      <h2 class="font-bold mb-2 flex justify-between">
        {{ title }}
        <span>
          {{ filteredAssignment.length }}
        </span>
      </h2>

      <assignment-tag
          :initial-tags="assignments.map((a) => a.tag)"
          :current-tag="activeTag"
          @change="activeTag = $event"

      />

      <ul class="border border-gray-600 divide-gray-600 divide-y rounded">
        <assignment-item
            v-for="assignment in filteredAssignment"
            :key="assignment.id"
            :assignment="assignment"
        >
        </assignment-item>
      </ul>
      </div>`,
    data() {
        return {
            activeTag: 'all'
        };
    },
    components: {
        'assignment-item': AssignmentItem,
        'assignment-tag': AssignmentTag
    },
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
    computed: {
        filteredAssignment() {
            return (this.activeTag === 'all')
                ? this.assignments
                : this.assignments.filter(a => a.tag === this.activeTag);
        }
    }
}