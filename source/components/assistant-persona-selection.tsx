import React from 'react';
import {Box, Text} from 'ink';
import SelectInput from 'ink-select-input';

interface PersonaSelectionProps {
	onSelect: (persona: string) => void;
}

const personas = [
	{
		label: 'Hitesh Choudhary',
		value: 'hitesh-choudhary',
	},
	{
		label: 'Piyush Garg',
		value: 'piyush-garg',
	},
];

export default function AssistantPersonaSelection({onSelect}: PersonaSelectionProps) {
	const handleSelect = (item: {label: string; value: string}) => {
		onSelect(item.value);
	};

	return (
		<Box flexDirection="column" gap={1}>
			<Text bold color="cyan">
				Select a Persona
			</Text>
			<Text dimColor>
				Choose your ChaiCode instructor to chat with:
			</Text>
			<Box marginTop={1}>
				<SelectInput items={personas} onSelect={handleSelect} />
			</Box>
		</Box>
	);
}