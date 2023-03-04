export default class subject {
    #gender;
    #age;
    #computerUse;
    #groupID = generate_groupID();

    set gender(genderInput) {
        this.gender = genderInput;
    }

    set age(ageInput) {
        this.age = ageInput;
    }

    set computerUse(computerUseInput) {
        this.computerUse = computerUseInput;
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