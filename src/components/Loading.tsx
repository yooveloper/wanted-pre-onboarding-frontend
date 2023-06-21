import React from 'react';

const Loading: React.FC = () => {
	return (
		<div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-40">
			<div className="flex items-center space-x-2 animate-bounce">
				<div className="w-4 h-4 bg-blue-500 rounded-full"></div>
				<div className="w-4 h-4 bg-blue-500 rounded-full"></div>
				<div className="w-4 h-4 bg-blue-500 rounded-full"></div>
			</div>
		</div>
	);
};

export default Loading;
