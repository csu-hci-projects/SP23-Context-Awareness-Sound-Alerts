export class subject {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.groupID = generate_groupID();
    }


}

function generate_groupID() {
    var participant_num; //store number of particpants
    var unique_id_num; //store unique id number
    
    //Set number of participants to generate the random id value
    participant_num = 30;

    //randomly generate id for subject, can change to something with a standard distribution
    unique_id_num = Math.floor(Math.random() * (participant_num + 10))
    return toString(unique_id_num);
}

