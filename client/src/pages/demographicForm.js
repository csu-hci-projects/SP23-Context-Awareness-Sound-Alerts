import {Button, Form, FormGroup, Label, Input, FormText, Table, Col} from 'reactstrap';
import NavBar from "../components/NavBar";

export default function DemographicForm(props){

    return(
        <div className={"App"}>
            <Form className={"form"}>
                <FormGroup className={"formGroup"} row>
                    <Label for="gender" sm={2}>Gender</Label>
                    <Col>

                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            female
                        </Label><br/>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            male
                        </Label><br/>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            prefer not to say
                        </Label>
                    </Col>
                </FormGroup>
                <FormGroup className={"formGroup"} row>
                    <Label for="gender">Age</Label>
                    <Col>
                        <Input type="text" name="text1" />{' '}
                    </Col>
                </FormGroup>
            </Form>
            <NavBar context={props.context}/>
        </div>
    )
}