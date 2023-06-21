import { SIGNIN, SIGNUP } from '@constants/index';
import React from 'react';
import { Link } from 'react-router-dom';

interface AuthProps {
	path: string;
	email: string;
	password: string;
	emailError: string;
	passwordError: string;
	onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
}

const Auth: React.FC<AuthProps> = ({
	path,
	email,
	password,
	emailError,
	passwordError,
	onEmailChange,
	onPasswordChange,
	onSubmit
}) => {
	return (
		<>
			<div className="flex items-center justify-center h-screen">
				<h1 className="absolute text-4xl font-bol top-96">
					{path === '/signup' ? '회원가입' : '로그인'}
				</h1>
				<form className="w-full max-w-xs" onSubmit={onSubmit}>
					<div className="mb-4">
						<label
							className="block mb-2 text-sm font-bold text-gray-700"
							htmlFor="email"
						>
							이메일
						</label>
						<input
							data-testid="email-input"
							className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							name="email"
							placeholder="Email"
							value={email}
							onChange={onEmailChange}
							required
						/>
						{emailError && (
							<p className="mt-1 text-xs text-red-500 min-h-[1rem]">
								{emailError}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label
							className="block mb-2 text-sm font-bold text-gray-700"
							htmlFor="password"
						>
							비밀번호
						</label>
						<input
							data-testid="password-input"
							className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							onChange={onPasswordChange}
							required
						/>
						{passwordError && (
							<p className="mt-1 text-xs text-red-500 min-h-[1rem]">
								{passwordError}
							</p>
						)}
					</div>
					<div className="flex items-center justify-between">
						<button
							data-testid={`${
								path === '/signup' ? 'signup-button"' : 'signin-button'
							}`}
							className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
							type="submit"
							disabled={emailError && passwordError ? true : false}
						>
							{path === '/signup' ? '가입하기' : '로그인'}
						</button>
						{path === '/signup' ? (
							<Link to="/signin">돌아가기</Link>
						) : (
							<Link to="/signup">회원가입</Link>
						)}
					</div>
				</form>
			</div>
		</>
	);
};

export default Auth;
