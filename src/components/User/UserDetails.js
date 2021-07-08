import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {getUser} from "../../services/Api";


export default function UserDetails(props) {
    // let {match: {params: {id}}} = props;
    // console.log(id)
    let [user, setUser] = useState([])
    let {id} = useParams();
    useEffect(() => {
        getUser(id).then(value => setUser({...value.data}))
    }, [id])
    return (
        <div>
            {user.id}-{user.username}
        </div>
    );


}