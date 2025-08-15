import React from 'react';
import {Box, Text} from 'ink';

interface StatusBarProps {
	model?: string;
	persona?: string;
	messageCount?: number;
}

export default function StatusBar({model, persona, messageCount = 0}: StatusBarProps) {
	const getPersonaDisplay = (p: string | undefined) => {
		if (!p) return 'Not selected';
		const names: Record<string, string> = {
			'hitesh-choudhary': 'Hitesh Choudhary',
			'piyush-garg': 'Piyush Garg',
		};
		return names[p] || p;
	};

	const getModelDisplay = (m: string | undefined) => {
		if (!m) return 'Not selected';
		return m.toUpperCase();
	};

	return (
		<Box
			borderStyle="single"
			borderColor="dimWhite"
			paddingX={1}
			justifyContent="space-between"
		>
			<Box gap={2}>
				<Text>
					<Text dimColor>Model: </Text>
					<Text color="green">{getModelDisplay(model)}</Text>
				</Text>
				<Text>
					<Text dimColor>Persona: </Text>
					<Text color="cyan">{getPersonaDisplay(persona)}</Text>
				</Text>
				<Text>
					<Text dimColor>Messages: </Text>
					<Text>{messageCount}</Text>
				</Text>
			</Box>
			<Text dimColor>Type /help for commands</Text>
		</Box>
	);
}