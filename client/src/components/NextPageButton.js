import {Button} from "reactstrap";

export default function NextPageButton(props){

    const nextPage = () =>{
        const numPages = props.context.numPages
        props.context.setPageIndex((props.context.pageIndex + 1) % numPages)
    }
    return(
        <Button className={"ContinueButton"} onClick={nextPage}>Continue</Button>
    )
}