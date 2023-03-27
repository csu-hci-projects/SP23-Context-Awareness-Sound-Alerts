export class UserActionData{
    backgroundSound;
    experimentStartTime;
    experimentEndTime;
    alert1Time = 0;
    alert2Time = 0;
    alert3Time = 0;
    userClick = [];

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