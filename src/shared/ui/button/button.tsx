import './button.scss';

interface IButton {
	type: 'button' | 'submit';
	name: string;
}

export const Button: React.FC<IButton> = ({ type, name }) => {
	return (
		<button className='button' type={type}>
			{name}
		</button>
	);
};
