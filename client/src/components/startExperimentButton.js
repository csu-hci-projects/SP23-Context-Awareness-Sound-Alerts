import { useNavigate } from 'react-router-dom';
//import { subjectTest } from 'src/SubjectTest.js';


export default function StartExpButton(){
    const navigate = useNavigate();

    //subjectTest();

    return (
        <button onClick={()=> navigate('/experiment')}>Click to start experiment</button>
    )
}