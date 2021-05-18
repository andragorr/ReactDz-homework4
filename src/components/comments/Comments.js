import {useEffect, useState} from "react";
import Comment from '../comment/Comment'
import {Route, Switch} from "react-router-dom";
import CommentDetails from "../comment-details/CommentDetails";

export default function Comments(props) {
    let {match: {url}} = props;
    let [comments, setComments]=useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments([...value]);
            });
    }, []);

    return (
    <div>
        {
            comments.map(value => <Comment key={value.id} item={value} url={url}/>)
        }
        <Switch>
            <Route path={'/comments/:id'} component={CommentDetails}/>
        </Switch>
    </div>
    );
}