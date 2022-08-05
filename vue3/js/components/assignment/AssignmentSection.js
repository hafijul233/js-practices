import AssignmentList from "./AssignmentList.js";
import AssignmentForm from "./AssignmentForm.js";

export default {
    template: `
      <section class="space-y-6">
      <assignment-list
          title="In Progress"
          :assignments="filters.inProgress"/>

      <assignment-list
          title="Completed"
          :assignments="filters.completed"/>

      <assignment-form @addAssignment="addAssignment"/>
      </section>
    `,
    data() {
        return {
            assignments: [
                {id: 1, name: "Finish Project", complete: false, tags : ['math']},
                {id: 2, name: "Add Login Added", complete: false, tags : ['science']},
                {id: 3, name: "Read Documentations", complete: true, tags : ['travel']},
                {id: 4, name: "Research & Development", complete: false, tags : ['math', 'science', 'reading']},
            ]
        }
    },
    methods: {
        addAssignment(title) {

            this.assignments.push({
                name: title,
                complete: false,
                id: (this.assignments.length + 1)
            })
        }
    },
    components: {
        'assignment-list': AssignmentList,
        'assignment-form': AssignmentForm
    },
    computed: {
        filters() {
            return {
                completed: this.assignments.filter((assignment) => assignment.complete),
                inProgress: this.assignments.filter((assignment) => !assignment.complete),
            }
        }
    }
}