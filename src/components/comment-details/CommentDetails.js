import {
    useParams
} from 'react-router-dom';
import {useEffect, useState} from 'react';

export default function CommentDetails(props) {
    // let params = useParams();
    // console.log(params);
    let {match: {params: {id}}} = props;

    let [comment, setComment] = useState(null);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/' + id)
            .then(value => value.json())
            .then(value => {
                setComment(value);
            });

    }, [id]);

    return (
        <div>
            {comment && <h2>{comment.id}-  {comment.name}</h2>}

        </div>
    );
}
