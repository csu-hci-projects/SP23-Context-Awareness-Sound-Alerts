export class UserActionData{
    backgroundSound;
    experimentStartTime;
    experimentEndTime;
    alertTimes = [undefined, undefined, undefined];
    userClick = [];
    // TODO: data doesn't make it here yet
    wpm;
    // TODO: errors aren't calculated yet
    errors;

    // set experimentStartTime(startTime){
    //     this.experimentStartTime = startTime;
    // }

    logAction(){
        this.userClick.push(new Date().getTime());
    }

    // Click data is stored in milliseconds since the UNIX epoch
    // Returns the user click times relative to the experiment phase start time
    getClickArrayRelativeTime(){
        let result = [];
        this.userClick.map((i)=>{
            result.push(i - this.experimentStartTime)
        });

        return result;
    }
}