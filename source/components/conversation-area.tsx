import React from 'react';
import {Box, Text} from 'ink';

export interface Message {
	id: string;
	role: 'user' | 'assistant' | 'system';
	content: string;
	timestamp: Date;
}

interface ConversationAreaProps {
	messages: Message[];
	isLoading?: boolean;
	persona?: string;
}

export default function ConversationArea({
	messages,
	isLoading,
	persona,
}: ConversationAreaProps) {
	const getPersonaName = (persona: string | undefined) => {
		if (!persona) return 'Assistant';
		const names: Record<string, string> = {
			'hitesh-choudhary': 'Hitesh',
			'piyush-garg': 'Piyush',
		};
		return names[persona] || 'Assistant';
	};

	return (
		<Box flexDirection="column" flexGrow={1} overflow="hidden">
			{messages.length === 0 ? (
				<Box padding={1}>
					<Text dimColor>
						Start a conversation by typing your message below...
					</Text>
				</Box>
			) : (
				<Box flexDirection="column" paddingX={1}>
					{messages.map(message => (
						<Box key={message.id} marginBottom={1}>
							{message.role === 'user' ? (
								<Text>
									<Text bold color="green">
										You:{' '}
									</Text>
									{message.content}
								</Text>
							) : message.role === 'assistant' ? (
								<Text>
									<Text bold color="cyan">
										{getPersonaName(persona)}:{' '}
									</Text>
									{message.content}
								</Text>
							) : (
								<Text dimColor italic>
									{message.content}
								</Text>
							)}
						</Box>
					))}
					{isLoading && (
						<Box>
							<Text color="yellow">
								{getPersonaName(persona)} is thinking...
							</Text>
						</Box>
					)}
				</Box>
			)}
		</Box>
	);
}