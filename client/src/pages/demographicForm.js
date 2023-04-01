import React from "react";
import {Button, Form, FormGroup, Label, Input, FormText, Table, Col, Row} from 'reactstrap';
import NavBar from "../components/NavBar";
import subject from "../data/Subject"
import Data from "../components/Data";

export default function DemographicForm(props){

    const handleAge = (e) =>{
        let updateObject = props.context.experimentState.getCopy();
        updateObject.age = e.target.value;
        props.context.setExperimentState(updateObject)
    }

    const handleGender = (e) =>{
        let updateObject = props.context.experimentState.getCopy();
        updateObject.gender = e.target.attributes.id.nodeValue;
        props.context.setExperimentState(updateObject);
    }

    const handleCompUse = (e) =>{
        let updateObject = props.context.experimentState.getCopy();
        updateObject.computerUse = e.target.attributes.id.nodeValue;
        props.context.setExperimentState(updateObject);
    }

    const handleBrand = (e) =>{
        let updateObject = props.context.experimentState.getCopy();
        updateObject.brand = e.target.attributes.id.nodeValue;
        props.context.setExperimentState(updateObject);
    }

    const handleSilent = (e) =>{
        let updateObject = props.context.experimentState.getCopy();
        updateObject.silent = e.target.attributes.id.nodeValue;
        props.context.setExperimentState(updateObject);
    }

    const handleDefaultNotification = (e) =>{
        let updateObject = props.context.experimentState.getCopy();
        updateObject.defaultNotification = e.target.attributes.id.nodeValue;
        props.context.setExperimentState(updateObject);
    }

    return(
        <div className={"content"}>
            <div className={"form-container"}>
                <Table className={"form"}>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Response</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Label for="gender" sm={2}>Gender</Label></td>
                            <td>
                                <FormGroup className={"formGroup"} row
                                           onChange={handleGender}>
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
                                </FormGroup>
                            </td>
                        </tr>

                        <tr>
                            <td><Label for="age">Age</Label></td>
                            <td>
                                <FormGroup className={"formGroup"} row>
                                    <Input type="text" name="text1" id="Age"
                                           onChange={handleAge}/>{' '}
                                </FormGroup>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <Label for="Hours"  sm={3}>Hours of computer use per day</Label>
                            </td>
                            <td>
                                <FormGroup className={"formGroup"} onChange={handleCompUse} row>
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
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="10+"/>{' '}
                                        10+
                                    </Label>
                                </FormGroup>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <Label for="Brand"  sm={3}>Phone Brand</Label>
                            </td>
                            <td>
                                <FormGroup className={"formGroup"} onChange={handleBrand} row>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="Apple"/>{' '}
                                        Apple
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="Samsung"/>{' '}
                                        Samsung
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="Pixel"/>{' '}
                                        Pixel
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="LG"/>{' '}
                                        LG
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="Nokia"/>{' '}
                                        Nokia
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="Other"/>{' '}
                                        Other
                                    </Label><br/>
                                </FormGroup>
                            </td>
                        </tr>

                        <tr>
                            <td><Label for="silent" sm={2}>Percent of time phone is on silent during the day</Label></td>
                            <td>
                                <FormGroup className={"formGroup"} row
                                           onChange={handleSilent}>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="0" />{' '}
                                        0% - My phone is never on silent
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="25" />{' '}
                                        25% - My phone is on silent a small part of the day
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="50"/>{' '}
                                        50% - My phone is on silent half of the day
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="75"/>{' '}
                                        75% - My phone is on silent most of the day
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="100"/>{' '}
                                        100% - My phone is on silent always
                                    </Label>
                                </FormGroup>
                            </td>
                        </tr>

                        <tr>
                            <td><Label for="defaultNotification" sm={2}>Do you use the default notification sound on your phone?</Label></td>
                            <td>
                                <FormGroup className={"formGroup"} row
                                           onChange={handleDefaultNotification}>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="True" />{' '}
                                        Yes
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="False" />{' '}
                                        No
                                    </Label>
                                </FormGroup>
                            </td>
                        </tr>

                    </tbody>
                </Table>

            </div>
        </div>
    )
}