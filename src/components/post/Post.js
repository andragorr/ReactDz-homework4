import {Link} from "react-router-dom";

export default function Post(props) {
    let {item, url}= props;
    return (
    <div>
        {item.id}
        <Link to={url + '/' + item.id}>post details</Link>
    </div>
    );
}