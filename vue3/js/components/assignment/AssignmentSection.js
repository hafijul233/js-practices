import AssignmentList from "./AssignmentList.js";
import AssignmentForm from "./AssignmentForm.js";

export default {
    template: `
      <section class="flex">

      <assignment-list
          title="In Progress"
          :assignments="filters.inProgress">
        <assignment-form
            @addAssignment="addAssignmentMethod"/>
      </assignment-list>

      <assignment-list
          title="Completed"
          :assignments="filters.completed"/>

      </section>
    `,
    components: {
        'assignment-list': AssignmentList,
        'assignment-form' : AssignmentForm
    },
    data() {
        return {
            assignments: [
                /* {id: 1, name: "Finish Project", complete: false, tag: 'math'},
                 {id: 2, name: "Add Login Added", complete: false, tag: 'science'},
                 {id: 3, name: "Read Documentations", complete: true, tag: 'travel'},
                 {id: 4, name: "Research & Development", complete: false, tag: 'math'},*/
            ]
        }
    },
    methods: {
        addAssignmentMethod(title) {

            this.assignments.push({
                name: title,
                complete: false,
                id: (this.assignments.length + 1),
                tag: 'default'
            })
        }
    },
    computed: {
        filters() {
            return {
                completed: this.assignments.filter((assignment) => assignment.complete),
                inProgress: this.assignments.filter((assignment) => !assignment.complete),
            }
        }
    },
    async created() {
        await fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments
            });
    }
}