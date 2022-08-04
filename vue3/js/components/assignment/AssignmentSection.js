import AssignmentList from "./AssignmentList.js";

export default {
    template: `
      <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
      <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>
    `,
    data() {
        return {
            assignments: [
                {id: 1, name: "Finish Project", complete: false},
                {id: 2, name: "Add Login Added", complete: false},
                {id: 3, name: "Read Documentations", complete: true},
            ]
        }
    },
    components: {
        'assignment-list': AssignmentList
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