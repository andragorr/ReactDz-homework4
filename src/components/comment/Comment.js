import {Link} from "react-router-dom";
export default function Comment(props) {

    let {item, url} = props;
    return (
    <div>
        {item.name}
        <Link to={url + '/' + item.id}> ====> comment details</Link>
    </div>
    );
}