import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

export const FavMovie = (props) => {
	const user = useContext(AuthContext);
	const likedBy = user.name;
	const getLikes = async () => {
		console.log(props);
	};

	return (
		<>{props.value && <button onClick={() => getLikes()}> Likes</button>}</>
	);
};
