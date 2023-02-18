import { useNavigate } from 'react-router-dom';

export default function StartExpButton(){
    const navigate = useNavigate();

    return (
        <button onClick={()=> navigate('/experiment')}>Click to start experiment</button>
    )
}