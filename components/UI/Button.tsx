import React, { FC } from 'react';

const Button: FC<{
	content: string | JSX.Element;
	styles: string;
	onClick?: () => void;
}> = ({ content, styles, onClick }) => {
	return (
		<button className={`${styles} btnStyle border-solid border-1  px-[20px] py-[12px] rounded-lg  text-xs  border-primary text-white hover:bg-[white] hover:text-primary`}>
			{content}
		</button>
	);
};

export default Button;
