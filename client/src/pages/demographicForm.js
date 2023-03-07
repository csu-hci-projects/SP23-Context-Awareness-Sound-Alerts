import React from "react";
import {Button, Form, FormGroup, Label, Input, FormText, Table, Col} from 'reactstrap';
import NavBar from "../components/NavBar";
import subject from "../components/Subject"
import Data from "../components/Data";

export default function DemographicForm(props){

    const handleAge = (e) =>{
        let updateObject = JSON.parse(JSON.stringify(props.context.experimentState))
        updateObject.age = e.target.value;
        props.context.setExperimentState(updateObject)
    }

    return(
        <div className={"App"}>
            <Form className={"form"}>
                <FormGroup className={"formGroup"} row
                   onChange={()=> {
                }}>
                    <Label for="gender" sm={2}>Gender</Label>
                    <Col>
                        <Label check>
                            <Input type="radio" name="radio1" id="female" />{' '}
                            female
                        </Label><br/>
                        <Label check>
                            <Input type="radio" name="radio1" id="male" />{' '}
                            male
                        </Label><br/>
                        <Label check>
                            <Input type="radio" name="radio1" id="other"/>{' '}
                            prefer not to say
                        </Label>
                    </Col>
                </FormGroup>

                <FormGroup className={"formGroup"} row>
                    <Label for="gender">Age</Label>
                    <Col>
                        <Input type="text" name="text1" id="Age"
                           onChange={handleAge}/>{' '}
                    </Col>
                </FormGroup>

                <FormGroup className={"formGroup"} row>
                    <Label for="Hours" sm={3}>Hours of computer use per day</Label>
                    <Col>

                        <Label check>
                            <Input type="radio" name="radio1" id="1-3"/>{' '}
                            1-3
                        </Label><br/>
                        <Label check>
                            <Input type="radio" name="radio1" id="4-7"/>{' '}
                            4-7
                        </Label><br/>
                        <Label check>
                            <Input type="radio" name="radio1" id="8-10"/>{' '}
                            8-10
                        </Label>
                        <Label check>
                            <Input type="radio" name="radio1" id="10+"/>{' '}
                            10+
                        </Label>
                    </Col>
                </FormGroup>
            </Form>
            <NavBar context={props.context}/>
            <Data subject={props.context.experimentState}/>
        </div>
    )
}