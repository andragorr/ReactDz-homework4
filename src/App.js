import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import Home from './components/home/Home';
import User from "./components/user/User";
import Posts from './components/posts/Posts';
import UserDetails from './components/user-details/UserDetails';
import PostDetails from "./components/post-details/PostDetails";
import Comments from "./components/comments/Comments"
import CommentDetails from "./components/comment-details/CommentDetails";

function App() {
	return (
		<Router>
			<div>
				<Link to={'/'}>home page</Link>
				<br/>
				<Link to={'/users'}>users page</Link>
				<br/>
				<Link to={'/posts'}>posts page</Link>
				<br/>
				<Link to={'/comments'}>comments page</Link>
				<br/>

				<hr/>
				<Switch>

					<Route exact path={'/'}>
						<Home/>
					</Route>
					<Route exact path={'/users'} component={User}/>
					<Route path={'/users/:id'} component={UserDetails}/>
					<Route exact path={'/posts'} component={Posts} />
					<Route path={'/posts/:id'} component={PostDetails}/>
					<Route path={'/comments'} component={Comments}/>
					<Route  path={'/comments/:id'} component={CommentDetails}/>

				</Switch>
				<hr/>

			</div>
		</Router>
	);
}

export default App;
