import React from 'react';
// import { ToastContainer, toast } from 'toasts-library-svs';

function App() {
	const handleAddToast = () => {
		// toast.setContainer();
		// toast.generateToast('info', 'medium', 'Info Toast Example');
	};

	return (
		<div>
			<button onClick={handleAddToast}>Add Toast</button>
			{/* <ToastContainer
				toastPosition="top-right"
				toastOffsetX="0"
				toastOffsetY="0"
			/> */}
		</div>
	);
}

export default App;
