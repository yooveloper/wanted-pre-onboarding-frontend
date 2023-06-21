import React, { useState } from 'react';
import Auth from '@components/Auth';
import useAuthForm from '@hooks/useAuthForm';
import Loading from '@components/Loading';
import apiClient from '@api/axios';
import { SIGNIN, TODOS } from '@constants/index';
import { useLocation, useNavigate } from 'react-router-dom';

interface LoginResponse {
	access_token: string;
}

export default function SignIn() {
	const [isLoading, setIsLoading] = useState(false);
	const [form, errors, handleFormChange] = useAuthForm();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (errors.emailError) {
			return;
		}

		setIsLoading(true);

		try {
			const { email, password } = form;
			const response = await apiClient.post<LoginResponse>(SIGNIN, {
				email,
				password
			});

			// 성공시 액세스토큰 저장
			const { access_token } = response.data;
			localStorage.setItem('access_token', access_token);

			// TODO로 페이지 이동
			navigate(TODOS, { replace: true });
		} catch (error) {
			console.log(`error : ${error}`);
			alert('로그인 실패');
			setIsLoading(false);
		}
	};

	return (
		<>
			{isLoading && <Loading />}
			<Auth
				path={pathname}
				email={form.email}
				password={form.password}
				emailError={errors.emailError}
				passwordError={errors.passwordError}
				onEmailChange={(e) =>
					handleFormChange({ ...form, type: 'email', email: e.target.value })
				}
				onPasswordChange={(e) =>
					handleFormChange({
						...form,
						type: 'password',
						password: e.target.value
					})
				}
				onSubmit={handleFormSubmit}
			/>
		</>
	);
}
