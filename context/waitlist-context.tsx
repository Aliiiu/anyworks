import React, { FC, useState } from 'react';

const WaitlistContext = React.createContext({
	enteredEmail: '',
	emailHandler: (enteredInput: string) => {},
});

export const WaitlistContextProvider: FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const [enteredInput, setEnteredInput] = useState('');
	const inputHandler = (enteredInput: string) => {
		console.log(enteredInput);
		setEnteredInput(enteredInput);
	};
	const waitlistValue = {
		enteredEmail: enteredInput,
		emailHandler: inputHandler,
	};
	return (
		<WaitlistContext.Provider value={waitlistValue}>
			{children}
		</WaitlistContext.Provider>
	);
};

export default WaitlistContext;
