import AlertButton from "./AlertButton.js";
import LoadingButton from "./LoadingButton.js";
import AssignmentSection from "./assignment/AssignmentSection.js";

export default {
    template: `
    <assignment-section></assignment-section>
    `,
    components: {
        'alert-button': AlertButton,
        'load-button': LoadingButton,
        'assignment-section' : AssignmentSection
    }
}