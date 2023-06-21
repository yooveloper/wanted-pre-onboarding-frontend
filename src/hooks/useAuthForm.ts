import React, { useState } from 'react';

interface LoginForm {
	type: string;
	email: string;
	password: string;
}

interface LoginFormErrors {
	emailError: string;
	passwordError: string;
}

const useLoginForm = (): [
	LoginForm,
	LoginFormErrors,
	(data: LoginForm) => void
] => {
	const [form, setForm] = useState<LoginForm>({
		type: '',
		email: '',
		password: ''
	});
	const [errors, setErrors] = useState<LoginFormErrors>({
		emailError: '',
		passwordError: ''
	});

	const validateEmail = (email: string): string => {
		if (!email.includes('@')) {
			return '올바른 이메일 형식을 입력해주세요.';
		}
		return '';
	};

	const validatePassword = (password: string): string => {
		if (password.length < 8) {
			return '비밀번호는 8자 이상이어야 합니다.';
		}
		return '';
	};

	const handleFormChange = (data: LoginForm) => {
		const { type, email, password } = data;
		setForm(data);
		if (type === 'email') {
			setErrors({
				...errors,
				emailError: validateEmail(email)
			});
		} else {
			setErrors({
				...errors,
				passwordError: validatePassword(password)
			});
		}
	};

	return [form, errors, handleFormChange];
};

export default useLoginForm;
