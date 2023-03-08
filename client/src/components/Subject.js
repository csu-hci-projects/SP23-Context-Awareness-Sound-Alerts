export default class subject {
    #gender;
    #age;
    #computerUse;
    #groupID = generate_groupID();
    #wpm = [];

    getCopy(){
        let copy = new subject();
        copy.gender = this.#gender;
        copy.age = this.#age;
        copy.computerUse = this.#computerUse;
        copy.groupID = this.#groupID;
        copy.wpm = this.#wpm

        return copy;
    }

    toString(){
        return JSON.stringify(this);
    }

    set gender(genderInput) {
        this.#gender = genderInput;
    }

    set age(ageInput) {
        this.#age = ageInput;
    }

    set computerUse(computerUseInput) {
        this.#computerUse = computerUseInput;
    }

    set groupID(groupIDInput){
        this.#groupID = groupIDInput;
    }

    set wpm(wpmInput){
        this.#wpm.push(wpmInput);
    }

    get groupID() {
        return this.#groupID;
    }

    get computerUse() {
        return this.#computerUse;
    }

    get age() {
        return this.#age;
    }

    get gender() {
        return this.#gender;
    }

    get wpm(){
        return this.#wpm;
    }
}

function generate_groupID() {
    var participant_num; //store number of particpants
    var unique_id_num; //store unique id number

    //Set number of participants to generate the random id value
    participant_num = 30;

    //randomly generate id for subject, can change to something with a standard distribution
    unique_id_num = Math.floor(Math.random() * (participant_num + 10))
    return unique_id_num;
}