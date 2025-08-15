import React, {useState} from 'react';
import {Box, Text} from 'ink';
import TextInput from 'ink-text-input';

interface InputAreaProps {
	onSubmit: (input: string) => void;
	isLoading?: boolean;
}

export default function InputArea({onSubmit, isLoading}: InputAreaProps) {
	const [input, setInput] = useState('');

	const handleSubmit = () => {
		if (input.trim() && !isLoading) {
			onSubmit(input.trim());
			setInput('');
		}
	};

	return (
		<Box borderStyle="single" paddingX={1}>
			<Text color="green">: </Text>
			<TextInput
				value={input}
				onChange={setInput}
				onSubmit={handleSubmit}
				placeholder={isLoading ? 'Please wait...' : 'Type your message or command...'}
				focus={!isLoading}
			/>
		</Box>
	);
}