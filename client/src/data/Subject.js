import getExperimentCount from "../api/getExperimentCount"
import { experimentConfigA, experimentConfigB, experimentConfigC } from "../components/ExperimentDesign";
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
    wpm = [];
    phaseData = [];

    #NUMBER_OF_PHASES = 3;

    constructor(knownGroupID, knownAssignedExperiment) {
        for (let i = 0; i < this.#NUMBER_OF_PHASES; i++){
            this.phaseData.push(new UserActionData())
        }

        // If GroupID of AssignedExperiment is already known, don't
        //   use an API call to generate new data
        this.groupID = knownGroupID ? knownGroupID : generate_groupID();
        this.assignedExperiment = knownAssignedExperiment ? knownAssignedExperiment : AssignExp(this.groupID);
    }


    getCopy(){
        let copy = new subject(this.groupID, this.assignedExperiment);
        copy.gender = this.gender;
        copy.age = this.age;
        copy.computerUse = this.computerUse;
        copy.wpm = this.wpm;
        copy.phaseData = this.phaseData;
        copy.brand = this.brand;
        copy.silent = this.silent;
        copy.defaultNotification = this.defaultNotification;


        return copy;
    }

    toString(){
        return JSON.stringify(this);
        }

    set gender(genderInput) {
        this.gender = genderInput;
    }

    set age(ageInput) {
        this.age = ageInput;
    }

    set computerUse(computerUseInput) {
        this.computerUse = computerUseInput;
    }

    set groupID(groupIDInput){
        this.groupID = groupIDInput;
    }

    set wpm(wpmInput){
        this.wpm.push(wpmInput);
    }

    set actions(actionsInput){
        this.phaseData.push(actionsInput);
    }

    get groupID() {
        return this.groupID;
    }

    get computerUse() {
        return this.computerUse;
    }

    get age() {
        return this.age;
    }

    get gender() {
        return this.gender;
    }

    get wpm(){
        return this.wpm;
    }

    get actions(){
        return this.phaseData;
    }
}

function generate_groupID() {
    let unique_id_num; //store unique id number
    let group_char;
    let final_id;
    let entries;
    getExperimentCount().then((count)=> {entries = count});
    console.log("getExperimentCount from Subject constructor")


    switch (entries) {
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
            group_char = 'A';
            break;
        case 4:
            group_char = 'B'
            break;
        case 5:
            group_char = 'C'
            break;
        case 6:
            group_char = 'A'
            break;
        case 7:
            group_char = 'B';
            break;
        case 8:
            group_char = 'C';
            break;
        case 9: 
            group_char = 'A';
            break;
        case 10: 
            group_char = 'B';
            break;
        case 11:
            group_char = 'C';
            break;
        case 12:
            group_char = 'A';
            break;
        case 13:
            group_char = 'B';
            break;
        default:
            group_char = 'C'
    }

    //randomly generate id for subject, can change to something with a standard distribution

    unique_id_num = Math.floor(Math.random() * (10000))
    unique_id_num = unique_id_num.toString();
    final_id = group_char.concat("-", unique_id_num);
    return final_id;
}

function AssignExp(groupID) {

    let group_char = groupID.charAt(0)
    let experiment_group;

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