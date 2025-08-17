import React from 'react';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import {Box, Text} from 'ink';

const Header = () => {
	return (
		<Box
			flexDirection="column"
			marginBottom={1}
			borderStyle={'double'}
			alignItems="center"
		>
			<Gradient name="fruit">
				<BigText text="ChaiCode Persona Bot" />
			</Gradient>
			<Text color="gray" dimColor>
				ChaiCode's AI-powered chat assistant for your terminal where you can
				talk with Hitesh sir or Piyush Sir
			</Text>
			<Text color="gray" dimColor>
				Version 1.0.0 | Press Ctrl+C to exit
			</Text>
		</Box>
	);
};

export default Header;
