import { File } from '@/shared/ui/file';
import React, { useState } from 'react';
import { useFileStore } from '../model/FileSlice';
import './FileLoader.scss';

export const FileLoader = () => {
	const [dragActive, setDragActive] = useState(false);

	const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setDragActive(true);
	};

	const handleLeave = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setDragActive(false);
	};

	const { setFormData, resetData, isLoading } = useFileStore();

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const uploadedFile = event.target.files?.[0];
		if (uploadedFile) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const fileContent = e.target?.result;
				if (typeof fileContent === 'string') {
					const formData = JSON.parse(fileContent as string);
					const { form_name, form_description, form_fields, form_buttons } = formData;
					setFormData({ form_name: form_name, form_description: form_description, form_fields: form_fields, form_buttons: form_buttons });
					isLoading(true);
				}
			};
			reader.readAsText(uploadedFile);
		}
	};

	const fileReset = () => {
		isLoading(false);
		resetData();
	};

	return (
		<div className='file__loader'>
			<div
				className={`file__loader__wrapper ${dragActive ? 'drag' : ''}`}
				onDragEnter={handleDrag}
				onDragOver={handleDrag}
				onDragLeave={handleLeave}
			>
				<File onChange={handleOnChange} />
			</div>
			<div className='file__loader__button'>
				<button className='button__reset' onClick={fileReset}>
					Reset
				</button>
			</div>
		</div>
	);
};
