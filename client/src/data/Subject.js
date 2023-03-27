import getExperimentCount from "../api/getExperimentCount"
import { experimentConfigA, experimentConfigB, experimentConfigC } from "../components/ExperimentDesign";
import {UserActionData} from "./UserActionData";

export default class subject {
    gender;
    age;
    computerUse;
    groupID = generate_groupID();
    assignedExperiment = AssignExp(this.groupID);
    wpm = [];
    actions = [];

    #NUMBER_OF_PHASES = 3;

    constructor() {
        for (let i = 0; i > this.#NUMBER_OF_PHASES; i++){
            this.actions.push(new UserActionData())
        }
    }

    getCopy(){
        let copy = new subject();
        copy.gender = this.gender;
        copy.age = this.age;
        copy.computerUse = this.computerUse;
        copy.groupID = this.groupID;
        copy.wpm = this.wpm;
        copy.actions = this.actions;
        copy.assignedExperiment = this.assignedExperiment;

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
        this.actions.push(actionsInput);
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
        return this.actions;
    }
}

function generate_groupID() {
    let unique_id_num; //store unique id number
    let group_char;
    let final_id;
    let entries;
    getExperimentCount().then((count)=> {entries = count});


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