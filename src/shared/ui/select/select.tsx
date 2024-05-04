import React from 'react';
import './select.scss';

interface ISelect {
	type: string;
	label?: string;
	required?: boolean;
	multiple?: boolean;
	options?: string[];
}

export const Select: React.FC<ISelect> = ({ type, label, required, multiple, options }) => {
	return (
		<div className='select'>
			<input list='options' required={required} placeholder='' />
			<label>{label}</label>
			{options && (
				<datalist id='options'>
					{options.flatMap((item, key) => item.split(',').map((option, index) => <option key={key * 10 + index} value={option.trim()} />))}
				</datalist>
			)}
		</div>
	);
};
