import AssignmentItem from "./AssignmentItem.js";
import Tag from "../Tag.js";

export default {
    template: `
      <div v-show="assignments.length" class="m-4">
      <h2 class="font-bold mb-2 flex justify-between">
        {{ title }}
        <span>
          {{ assignments.length }}
        </span>
      </h2>
      <div>
        <tag v-for="tag in tags" :tag="tag"/>
      </div>
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
    computed: {
        tags() {
            let tags = [];

            for (let key in this.assignments)
                for (let tag of this.assignments[key].tags)
                    tags.push(tag);

            return new Set(tags);
        }
    },
    components: {
        'assignment-item': AssignmentItem,
        'tag': Tag
    }
}