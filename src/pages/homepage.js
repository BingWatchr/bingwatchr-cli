import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';

export const HomePage = () => {
	const { user } = useContext(AuthContext);
	console.log({ user });
	return (
		<div>
			<h1>Homepage</h1>
		</div>
	);
};
