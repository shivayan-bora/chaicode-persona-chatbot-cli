import React, {useState, useEffect} from 'react';
import {Box, useApp} from 'ink';
import Header from './components/header.js';
import ApiKeyInput from './components/api-key-input.js';
import ModelSelectionPanel from './components/model-selection-panel.js';
import AssistantPersonaSelection from './components/assistant-persona-selection.js';
import ConversationArea, {Message} from './components/conversation-area.js';
import InputArea from './components/input-area.js';
import StatusBar from './components/status-bar.js';
import HelpArea from './components/help-area.js';
import {OpenAIService} from './services/openai-service.js';
import {PersonaService} from './services/persona-service.js';

type AppState = 'api-key' | 'model-selection' | 'persona-selection' | 'chat' | 'help';

export default function App() {
	const {exit} = useApp();
	
	// State management
	const [appState, setAppState] = useState<AppState>('api-key');
	const [apiKey, setApiKey] = useState<string>('');
	const [selectedModel, setSelectedModel] = useState<string>('');
	const [selectedPersona, setSelectedPersona] = useState<string>('');
	const [messages, setMessages] = useState<Message[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [showHelp, setShowHelp] = useState(false);
	
	// Services
	const [openAIService, setOpenAIService] = useState<OpenAIService | null>(null);
	const [personaService] = useState(new PersonaService());
	const [systemPrompt, setSystemPrompt] = useState<string>('');

	// Check for API key in environment on mount
	useEffect(() => {
		const envApiKey = process.env['OPENAI_API_KEY'];
		if (envApiKey) {
			setApiKey(envApiKey);
			setAppState('model-selection');
		}
	}, []);

	// Initialize OpenAI service when API key and model are set
	useEffect(() => {
		if (apiKey && selectedModel) {
			setOpenAIService(new OpenAIService(apiKey, selectedModel));
		}
	}, [apiKey, selectedModel]);

	// Load persona prompt when persona is selected
	useEffect(() => {
		if (selectedPersona) {
			personaService.loadPersonaPrompt(selectedPersona).then(prompt => {
				console.log('Loaded prompt for', selectedPersona);
				console.log('Prompt length:', prompt.systemPrompt.length);
				console.log('Prompt starts with:', prompt.systemPrompt.substring(0, 100));
				console.log('Contains refined markers?', prompt.systemPrompt.includes('PERSONALITY & SPEAKING STYLE'));
				
				setSystemPrompt(prompt.systemPrompt);
				// Add welcome message
				const welcomeMessage: Message = {
					id: Date.now().toString(),
					role: 'system',
					content: `You are now chatting with ${selectedPersona === 'hitesh-choudhary' ? 'Hitesh Choudhary' : 'Piyush Garg'}. Type /help to see available commands.`,
					timestamp: new Date(),
				};
				setMessages([welcomeMessage]);
				setAppState('chat');
			}).catch(error => {
				// Handle error - could show error message or fallback
				console.error('Failed to load persona prompt:', error);
			});
		}
	}, [selectedPersona, personaService]);

	// Handle API key submission
	const handleApiKeySubmit = (key: string) => {
		setApiKey(key);
		setAppState('model-selection');
	};

	// Handle model selection
	const handleModelSelect = (model: string) => {
		setSelectedModel(model);
		if (openAIService) {
			openAIService.setModel(model);
		}
		setAppState('persona-selection');
	};

	// Handle persona selection
	const handlePersonaSelect = (persona: string) => {
		setSelectedPersona(persona);
		setMessages([]); // Clear messages when switching personas
	};

	// Handle user input
	const handleUserInput = async (input: string) => {
		// Check for commands
		if (input.startsWith('/')) {
			const command = input.toLowerCase();
			
			if (command === '/help') {
				setShowHelp(true);
				setTimeout(() => setShowHelp(false), 5000); // Hide help after 5 seconds
				return;
			}
			
			if (command === '/exit') {
				exit();
				return;
			}
			
			if (command === '/model') {
				setAppState('model-selection');
				return;
			}
			
			if (command === '/persona') {
				setAppState('persona-selection');
				setMessages([]); // Clear chat history
				return;
			}
			
			if (command === '/new') {
				setMessages([]);
				const welcomeMessage: Message = {
					id: Date.now().toString(),
					role: 'system',
					content: `New chat started with ${selectedPersona === 'hitesh-choudhary' ? 'Hitesh Choudhary' : 'Piyush Garg'}.`,
					timestamp: new Date(),
				};
				setMessages([welcomeMessage]);
				return;
			}
			
			// Unknown command
			const errorMessage: Message = {
				id: Date.now().toString(),
				role: 'system',
				content: `Unknown command: ${input}. Type /help for available commands.`,
				timestamp: new Date(),
			};
			setMessages(prev => [...prev, errorMessage]);
			return;
		}

		// Regular message - send to OpenAI
		if (!openAIService) {
			return;
		}

		// Add user message
		const userMessage: Message = {
			id: Date.now().toString(),
			role: 'user',
			content: input,
			timestamp: new Date(),
		};
		setMessages(prev => [...prev, userMessage]);

		// Send to OpenAI
		setIsLoading(true);
		try {
			// Prepare messages for OpenAI
			const openAIMessages = [
				{role: 'system' as const, content: systemPrompt},
				...messages
					.filter(m => m.role !== 'system')
					.map(m => ({
						role: m.role as 'user' | 'assistant',
						content: m.content,
					})),
				{role: 'user' as const, content: input},
			];


			const response = await openAIService.sendMessage(openAIMessages);
			
			// Add assistant response
			const assistantMessage: Message = {
				id: (Date.now() + 1).toString(),
				role: 'assistant',
				content: response,
				timestamp: new Date(),
			};
			setMessages(prev => [...prev, assistantMessage]);
		} catch (error) {
			// Add error message
			const errorMessage: Message = {
				id: (Date.now() + 1).toString(),
				role: 'system',
				content: `Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`,
				timestamp: new Date(),
			};
			setMessages(prev => [...prev, errorMessage]);
		} finally {
			setIsLoading(false);
		}
	};

	// Render based on app state
	return (
		<Box flexDirection="column" height="100%" padding={1}>
			<Header />
			
			{appState === 'api-key' && (
				<Box marginTop={2}>
					<ApiKeyInput onSubmit={handleApiKeySubmit} />
				</Box>
			)}
			
			{appState === 'model-selection' && (
				<Box marginTop={2}>
					<ModelSelectionPanel onSelect={handleModelSelect} />
				</Box>
			)}
			
			{appState === 'persona-selection' && (
				<Box marginTop={2}>
					<AssistantPersonaSelection onSelect={handlePersonaSelect} />
				</Box>
			)}
			
			{appState === 'chat' && (
				<>
					<Box flexDirection="column" flexGrow={1} marginTop={1}>
						<StatusBar
							model={selectedModel}
							persona={selectedPersona}
							messageCount={messages.filter(m => m.role !== 'system').length}
						/>
						{showHelp && <HelpArea />}
						<Box flexGrow={1} marginTop={1}>
							<ConversationArea
								messages={messages}
								isLoading={isLoading}
								persona={selectedPersona}
							/>
						</Box>
						<InputArea onSubmit={handleUserInput} isLoading={isLoading} />
					</Box>
				</>
			)}
		</Box>
	);
}