import AlertButton from "./AlertButton.js";
import LoadingButton from "./LoadingButton.js";
import AssignmentSection from "./assignment/AssignmentSection.js";

export default {
    template: `
    <assignemt-section></assignemt-section>
    `,
    components: {
        'alert-button': AlertButton,
        'load-button': LoadingButton,
        'assignemt-section' : AssignmentSection
    }
}