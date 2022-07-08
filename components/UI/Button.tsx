import React, { FC } from 'react';

const Button: FC<{
	content: string | JSX.Element;
	styles: string;
	onClick?: () => void;
}> = ({ content, styles, onClick }) => {
	return (
		<button className={`${styles} btnStyle text-white px-[20px] py-[12px]`}>
			{content}
		</button>
	);
};

export default Button;
