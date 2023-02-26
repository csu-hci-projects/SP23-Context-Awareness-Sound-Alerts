import { useNavigate } from 'react-router-dom';

export default function StartHearingTest(){
    const navigate = useNavigate();

    return (
        <button onClick={()=> navigate('/hearingTest')}>Click to start</button>
    )
}