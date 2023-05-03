import getExperimentCount from "../api/getExperimentCount"
import {experimentArray} from "../components/ExperimentDesign";
import {UserActionData} from "./UserActionData";

export default class subject {
    gender = undefined;
    age = undefined;
    computerUse = undefined;
    groupID = undefined;
    assignedExperiment = undefined;
    brand = undefined;
    silent = undefined;
    defaultNotification = undefined;
    phaseData = [];

    #NUMBER_OF_PHASES = 3;

    constructor(knownGroupID, knownAssignedExperiment) {
        for (let i = 0; i < this.#NUMBER_OF_PHASES; i++) {
            this.phaseData.push(new UserActionData())
        }

        // If GroupID of AssignedExperiment is already known, don't
        //   use an API call to generate new data
        if (knownGroupID) {
            this.groupID = knownGroupID;
            if (knownAssignedExperiment) {
                this.assignedExperiment = knownAssignedExperiment;
            } else {
                getExperimentCount()
                    .then((count) => {
                        this.groupID = generate_groupID(count)
                        this.assignedExperiment = AssignExp(id, count)
                    })
                    .catch(() => {
                        console.log("Error getting experiment count.")
                    })
            }
        } else {
            getExperimentCount()
                .then(({count}) => {
                    this.groupID = generate_groupID(count)
                    this.assignedExperiment = AssignExp(this.groupID, count)
                })
                .catch(() => {
                    console.log("Error getting experiment count.")
                })
        }
    }

    getCopy() {
        let copy = new subject(this.groupID, this.assignedExperiment);
        copy.gender = this.gender;
        copy.age = this.age;
        copy.computerUse = this.computerUse;
        copy.phaseData = this.phaseData;
        copy.brand = this.brand;
        copy.silent = this.silent;
        copy.defaultNotification = this.defaultNotification;


        return copy;
    }

    toString() {
        return JSON.stringify(this);
    }

    set actions(actionsInput) {
        this.phaseData.push(actionsInput);
    }

    get actions() {
        return this.phaseData;
    }
}

function generate_groupID(lastExperimentIndex) {
    let unique_id_num; //store unique id number
    let group_char;
    let final_id;

    switch (lastExperimentIndex % 4) {
        case 0:
            group_char = 'A';
            break;
        case 1:
            group_char = 'B';
            break;
        case 2:
            group_char = 'C';
            break;
        case 3:
            group_char = 'D';
            break;
        default:
            group_char = 'Z'
    }

    //randomly generate id for subject, can change to something with a standard distribution

    unique_id_num = Math.floor(Math.random() * (10000))
    unique_id_num = unique_id_num.toString();
    final_id = group_char.concat("-", unique_id_num);

    return final_id;
}

function AssignExp(groupID, lastExperimentIndex) {

    console.log("groupID:", groupID);
    let group_char = groupID.charAt(0)
    let experiment_group;

    console.log("My group char: ", group_char, "my lastExperimentIndex: ", lastExperimentIndex)

    switch (lastExperimentIndex % 12) {
        case 0:
            experiment_group = experimentArray.expArray[0];
            break;
        case 1:
            experiment_group = experimentArray.expArray[1];
            break;
        case 2:
            experiment_group = experimentArray.expArray[2];
            break;
        case 3:
            experiment_group = experimentArray.expArray[3];
            break;
        case 4:
            experiment_group = experimentArray.expArray[4];
            break;
        case 5:
            experiment_group = experimentArray.expArray[5];
            break;
        case 6:
            experiment_group = experimentArray.expArray[6];
            break;
        case 7:
            experiment_group = experimentArray.expArray[7];
            break;
        case 8:
            experiment_group = experimentArray.expArray[8];
            break;
        case 9:
            experiment_group = experimentArray.expArray[9];
            break;
        case 10:
            experiment_group = experimentArray.expArray[10];
            break;
        case 11:
            experiment_group = experimentArray.expArray[11];
            break;
        default:
            experiment_group = null;
    }

    console.log("my experiment group:", experiment_group);
    return experiment_group;
}