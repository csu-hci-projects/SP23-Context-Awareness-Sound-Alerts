import {Button} from "reactstrap";

export default function NextPageButton(props){

    const nextPage = () =>{
        const numPages = props.context.numPages;
        console.log((props.context.pageIndex - 1) % numPages);
        // javascript modulo is dumb https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
        props.context.setPageIndex((((props.context.pageIndex - 1) % numPages) + numPages) % numPages);
    }
    return(
        <Button className={"Button"} onClick={nextPage}>{"< Previous Page"}</Button>
    )
}