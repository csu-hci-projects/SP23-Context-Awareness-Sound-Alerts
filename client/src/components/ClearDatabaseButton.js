import {Button} from "reactstrap";
import databaseConfig from "../../../config/databaseConfig.js"
import clearDatabase from "../api/clearDatabase";

export default function ClearDatabaseButton(props){
    const handleClick = async () => {
        const confirmResult = confirm(`Are you sure you want to delete everything in the collection ${databaseConfig.collection} in the database ${databaseConfig.database}?`)

        if (confirmResult) {
            const result = await clearDatabase()
            const successText = "Database cleared."
            const failedText = "Failed to delete database, maybe it didn't exist in the first place?"
            const alertText = result.success ? successText : failedText
            alert(alertText)
        }
    }

    return(
        <Button className={"Button danger-button"} onClick={handleClick}>CLEAR DATABASE</Button>
    )
}