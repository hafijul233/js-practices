import AssignmentItem from "./AssignmentItem.js";
import AssignmentTag from "./AssignmentTag.js";

export default {
    template: `
      <section v-show="filteredAssignment.length" class="m-4 w-80 bg-gray-700 p-4 border-gray-600 rounded-lg">
      <div class="flex justify-between items-start">
        <h2 class="font-bold mb-2">
          {{ title }}
          <span>
          ({{ filteredAssignment.length }})
        </span>
        </h2>
        <button v-show="canHide">&times;</button>
      </div>

      <assignment-tag
          v-model:activeTag="activeTag"
          :initial-tags="assignments.map((a) => a.tag)"
      />

      <ul class="border border-gray-600 divide-gray-600 divide-y rounded">
        <assignment-item
            v-for="assignment in filteredAssignment"
            :key="assignment.id"
            :assignment="assignment"
        >
        </assignment-item>
      </ul>
      <slot></slot>
      </section>`,
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
        },
        canHide: {
            type: Boolean,
            default: false
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