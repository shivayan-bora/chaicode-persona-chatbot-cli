import React from 'react';
import {Box, Text} from 'ink';
import SelectInput from 'ink-select-input';

interface ModelSelectionPanelProps {
	onSelect: (model: string) => void;
}

const models = [
	{
		label: 'GPT-5 (Latest and most capable)',
		value: 'gpt-5',
	},
	{
		label: 'GPT-4.1 (Advanced with high accuracy)',
		value: 'gpt-4.1',
	},
	{
		label: 'GPT-4.1 Mini (Cost-effective, slightly reduced accuracy)',
		value: 'gpt-4.1-mini',
	},
	{
		label: 'GPT-4.1 Nano (Most economical, basic capabilities)',
		value: 'gpt-4.1-nano',
	},
];

export default function ModelSelectionPanel({onSelect}: ModelSelectionPanelProps) {
	const handleSelect = (item: {label: string; value: string}) => {
		onSelect(item.value);
	};

	return (
		<Box flexDirection="column" gap={1}>
			<Text bold color="cyan">
				Select an OpenAI Model
			</Text>
			<Text dimColor>
				=¡ Mini and Nano models provide good cost savings but may have slightly lower accuracy
			</Text>
			<Box marginTop={1}>
				<SelectInput items={models} onSelect={handleSelect} />
			</Box>
		</Box>
	);
}