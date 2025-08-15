import React, {useState} from 'react';
import {Box, Text} from 'ink';
import TextInput from 'ink-text-input';

interface ApiKeyInputProps {
	onSubmit: (apiKey: string) => void;
}

export default function ApiKeyInput({onSubmit}: ApiKeyInputProps) {
	const [apiKey, setApiKey] = useState('');

	const handleSubmit = () => {
		if (apiKey.trim()) {
			onSubmit(apiKey.trim());
		}
	};

	return (
		<Box flexDirection="column" gap={1}>
			<Text color="yellow">⚠️ OpenAI API key not found in environment variables</Text>
			<Text>Please enter your OpenAI API key (it will be masked):</Text>
			<Box>
				<Text>API Key: </Text>
				<TextInput
					value={apiKey}
					onChange={setApiKey}
					onSubmit={handleSubmit}
					mask="*"
				/>
			</Box>
			<Box flexDirection="column" marginTop={1}>
				<Text dimColor>
					💡 Tip: Add the key to your environment variables for future sessions:
				</Text>
				<Text dimColor>   export OPENAI_API_KEY="your-api-key"</Text>
				<Text dimColor>
					📚 Documentation: https://platform.openai.com/docs/libraries#create-and-export-an-api-key
				</Text>
			</Box>
		</Box>
	);
}