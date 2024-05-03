import './textarea.scss';

interface ITextarea {
	type: string;
	label?: string;
	maxlength?: number;
	placeholder?: string;
	required?: boolean;
}

export const Textarea: React.FC<ITextarea> = ({ type, label, maxlength, placeholder, required }) => {
	return (
		<div className='textarea'>
			<textarea typeof={type} maxLength={maxlength} placeholder={placeholder} required={required}></textarea>
			<label>{label}</label>
		</div>
	);
};
