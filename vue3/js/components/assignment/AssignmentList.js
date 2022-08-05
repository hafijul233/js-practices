import AssignmentItem from "./AssignmentItem.js";
import Tag from "../Tag.js";

export default {
    template: `
      <div v-show="filteredAssignment.length" class="m-4">
      <h2 class="font-bold mb-2 flex justify-between">
        {{ title }}
        <span>
          {{ filteredAssignment.length }}
        </span>
      </h2>
      <div>
        <!--        <tag
                    v-for="tag in tags"
                    :tag="tag"
                    @click="currentActiveTag(tag)"
                />-->
        <button
            v-for="tag in tags"
            @click="activeTag = tag"
            class="mx-1 my-3 border border-white hover:border-gray-600 hover:bg-white hover:text-gray-900 rounded px-2 py-1"
        >
          {{ tag }}
        </button>
      </div>
      <ul class="border border-gray-600 divide-gray-600 divide-y rounded">
        <assignment-item
            v-for="assignment in filteredAssignment"
            :key="assignment.id"
            :assignment="assignment"
        >
        </assignment-item>
      </ul>
      </div>
    `,
    data() {
        return {
            activeTag: ''
        };
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
    methods: {
        currentActiveTag(tag) {
            this.activeTag = tag;
        }
    },
    computed: {
        tags() {
            let tags = ["all"];

            for (let key in this.assignments)
                for (let tag of this.assignments[key].tags)
                    tags.push(tag);

            return new Set(tags);
        },
        filteredAssignment() {
            if (this.activeTag.length > 0 && this.activeTag !== 'all') {
                return this.assignments.filter(a => a.tags.includes(this.activeTag));
            } else {
                return this.assignments;
            }
        }
    },
    components: {
        'assignment-item': AssignmentItem,
        'tag': Tag
    }
}