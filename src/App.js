import React from 'react';
import { toast, ToastContainer } from 'toasts-library-svs';

function App() {
	const handleAddToast = () => {
		toast.setContainer();
		/*
		Toast Options:
			toastType,
			size,
			title,
			titleColor,
			backgroundColor,
			toastAnimation,
			toastAutoCloseIsOn,
			toastAutoCloseTime,
		*/
		toast.generateToast(
			'info',
			'small',
			'Test Toast',
			'#ffffff',
			'orangered',
			'from-bottom',
			false,
			1000
		);
	};

	return (
		<React.Fragment>
			<ToastContainer
				toastPosition="top-right"
				toastOffsetX="50"
				toastOffsetY="50"
			/>
			<button onClick={handleAddToast}>Add Toast</button>
		</React.Fragment>
	);
}

export default App;
