import AlertButton from "./AlertButton.js";
import LoadingButton from "./LoadingButton.js";

export default {
    template: `
      <section v-show="inProgressAssignments.length">
      <h2 class="font-bold mb-2">In Progress</h2>
      <ul>
        <li v-for="assignment in inProgressAssignments" class="ml-2"
            :key="assignment.id">
          {{ assignment.name }}
          <input v-model="assignment.complete" type="checkbox">
        </li>
      </ul>
      </section>

      <section v-show="completedAssignments.length" class="mt-8">
      <h2 class="font-bold mb-2">Completed</h2>
      <ul>
        <li v-for="assignment in completedAssignments"
            class="ml-2"
            :key="assignment.id">
          {{ assignment.name }}
          <input v-model="assignment.complete" type="checkbox">
        </li>
      </ul>
      </section>
    `,
    components: {
        'alert-button': AlertButton,
        'load-button': LoadingButton
    },
    data() {
        return {
            assignments: [
                {id: 1, name: "Finish Project", complete: false},
                {id: 2, name: "Add Login Added", complete: false},
                {id: 3, name: "Read Documentations", complete: false},
            ]
        }
    },
    computed: {
        completedAssignments() {
            return this.assignments.filter((assignment) => assignment.complete);
        },
        inProgressAssignments() {;
            return this.assignments.filter((assignment) => !assignment.complete);
        }
    }
}