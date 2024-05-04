import { create } from 'zustand';

type FormField = {
	type: 'text' | 'color' | 'select' | 'textarea' | 'file' | 'checkbox' | 'password';
	label: string;
	required: boolean;
	placeholder?: string;
	maxlength?: number;
	minlength?: number;
	multiple?: boolean;
	options?: string[];
	pattern?: string;
	mask?: string;
	formats?: string;
	max_size?: number;
	max_count?: number;
};

type FormButton = {
	type: 'submit' | 'button';
	name: string;
};

export interface State {
	modal_opened: boolean;
	file_uploaded: boolean;
	form_name: string;
	form_description?: string;
	form_fields: FormField[];
	form_buttons: FormButton[];
}

type Actions = {
	setFormData: (formData: Partial<State>) => void;
	resetData: () => void;
	isLoading: (arg0: boolean) => void;
	openModal: (arg0: boolean) => void;
};

export const useFileStore = create<State & Actions>((set) => ({
	modal_opened: false,
	file_uploaded: false,
	form_name: '',
	form_description: undefined,
	form_fields: [],
	form_buttons: [],
	setFormData: (formData) => set(formData),
	resetData: () =>
		set({
			form_name: '',
			form_description: undefined,
			form_fields: [],
			form_buttons: [],
		}),
	isLoading: (value) => set({ file_uploaded: value }),
	openModal: (value) => set({ modal_opened: value }),
}));
