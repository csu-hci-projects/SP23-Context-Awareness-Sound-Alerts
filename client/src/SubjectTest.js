import { subject } from './Subject.js';

export function subjectTest() {
    try {
        var test_ID;
        const test_subject = new subject();
        test_subject.firstName = "Zack";
        test_subject.lastName = "Lamb";
        test_ID = test_subject.groupID;

        console.log("TESTING: " + test_subject + "ID: " + test_ID);
    }
    catch(err) {
        console.log("Subject.js creation error");
    }
}