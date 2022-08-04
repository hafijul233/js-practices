import AssignmentList from "./AssignmentList.js";

export default {
    template: `
      <assignment-list title="In Progress" :assignments="inProgressAssignments"></assignment-list>
      <assignment-list title="Completed" :assignments="completedAssignments"></assignment-list>
    `,
    data() {
        return {
            assignments: [
                {id: 1, name: "Finish Project", complete: false},
                {id: 2, name: "Add Login Added", complete: false},
                {id: 3, name: "Read Documentations", complete: false},
            ]
        }
    },
    components: {
        'assignment-list': AssignmentList
    },
    computed: {
        completedAssignments() {
            return this.assignments.filter((assignment) => assignment.complete);
        },
        inProgressAssignments() {
            return this.assignments.filter((assignment) => !assignment.complete);
        }
    }
}