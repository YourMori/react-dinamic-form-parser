import './dynamicParser.scss';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { useFileStore } from '@/entites/FileLoader';
import { FileForm } from '@/shared/ui/fileForm';
import { Textarea } from '@/shared/ui/textarea';
import { Checkbox } from '@/shared/ui/checkbox';
import { FormEvent } from 'react';

export const DynamicParser = () => {
	const { form_name, form_description, form_fields, form_buttons } = useFileStore();
	const { resetData, isLoading } = useFileStore();

	console.log(form_name, form_description, form_fields, form_buttons);

	const closeForm = () => {
		resetData();
		isLoading(false);
	};

	// const handleSubmit = (event: FormEvent) => {
	// 	event.preventDefault();

	// 	const formData = new FormData(event.target as HTMLFormElement);
	// 	const formDataObject: { [key: string]: string | Blob } = {};
	// 	formData.forEach((value, key) => {
	// 		formDataObject[key] = value;
	// 		console.log(key, value);
	// 	});
	// };

	if (!form_name) {
		return <></>;
	}

	return (
		<form action='/#' method='post'>
			<div className='main__container'>
				<h2 className='main__container-contact'>{form_name}</h2>
				{form_description && <p className='main__container-info'>{form_description}</p>}
				{form_fields.map((item, index) => {
					switch (item.type) {
						case 'text':
							return <Input key={index} {...item} />;
						case 'color':
							return <>color</>;
						case 'select':
							return <>select</>;
						case 'textarea':
							return <Textarea key={index} {...item} />;
						case 'file':
							return <FileForm key={index} />;
						case 'checkbox':
							return <Checkbox key={index} {...item} />;
						case 'password':
							return <Input key={index} {...item} />;
						default:
							return null;
					}
				})}
				{form_buttons.map((item, index) => (
					<Button key={index} type={item.type} name={item.name} />
				))}

				<button className='main__container__btn' onClick={closeForm}>
					<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M6.33496 16.0462C5.88802 16.4931 5.88802 17.2177 6.33496 17.6647C6.78189 18.1116 7.50652 18.1116 7.95346 17.6647L11.9998 13.6183L16.0463 17.6648C16.4932 18.1118 17.2179 18.1118 17.6648 17.6648C18.1117 17.2179 18.1117 16.4933 17.6648 16.0463L13.6183 11.9998L17.6645 7.95367C18.1114 7.50673 18.1114 6.78211 17.6645 6.33517C17.2175 5.88824 16.4929 5.88824 16.046 6.33517L11.9998 10.3813L7.95379 6.33533C7.50685 5.88839 6.78223 5.88839 6.33529 6.33533C5.88835 6.78226 5.88835 7.50689 6.33529 7.95382L10.3813 11.9998L6.33496 16.0462Z'
							fill='white'
						/>
					</svg>
				</button>
			</div>
		</form>
	);
};
