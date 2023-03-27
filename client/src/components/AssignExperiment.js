import subject from "../data/Subject";
import { experimentConfigA, experimentConfigB, experimentConfigC } from "./ExperimentDesign.js";



export default function AssignExp(groupID) {

    let group_char = subject.groupID.charAt(0)
    var experiment_group;

    switch (group_char) {
        case 'A':
            experiment_group = experimentConfigA;
            break;
        case 'B':
            experiment_group = experimentConfigB;
            break;
        default:
            experiment_group = experimentConfigC;
    }

    return experiment_group;
}