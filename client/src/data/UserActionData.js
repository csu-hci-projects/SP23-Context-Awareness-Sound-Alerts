export class UserActionData{
    backgroundSound
    experimentStartTime;
    experimentEndTime;
    alert1Time
    alert2Time
    alert3Time
    userClick = [];

    logAction(){
        this.userClick.push(new Date().getTime());
    }

    // Click data is stored in milliseconds since the UNIX epoch
    // This returns the user click times relative to the experiment phase start
    getClickArrayRelativeTime(){
        let result = [];
        this.userClick.map((i)=>{
            result.push(i - this.experimentStartTime)
        });

        return result;
    }

}