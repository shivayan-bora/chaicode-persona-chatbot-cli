import React from 'react';
import {Box, Text} from 'ink';

export default function HelpArea() {
	return (
		<Box
			flexDirection="column"
			borderStyle="round"
			borderColor="cyan"
			padding={1}
			marginTop={1}
		>
			<Text bold color="cyan">
				Available Commands
			</Text>
			<Box marginTop={1} flexDirection="column">
				<Text>
					<Text color="yellow">/help</Text> - Display this help message
				</Text>
				<Text>
					<Text color="yellow">/model</Text> - Change the OpenAI model
				</Text>
				<Text>
					<Text color="yellow">/persona</Text> - Switch personas (starts new chat)
				</Text>
				<Text>
					<Text color="yellow">/new</Text> - Start a new chat with current persona
				</Text>
				<Text>
					<Text color="yellow">/exit</Text> - Exit the application
				</Text>
			</Box>
			<Box marginTop={1}>
				<Text dimColor italic>
					Type '/help' at any time to see these commands
				</Text>
			</Box>
		</Box>
	);
}