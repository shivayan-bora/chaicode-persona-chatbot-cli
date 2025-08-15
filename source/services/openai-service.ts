import OpenAI from 'openai';

export class OpenAIService {
	private client: OpenAI;
	private currentModel: string;

	constructor(apiKey: string, model: string) {
		this.client = new OpenAI({
			apiKey,
		});
		this.currentModel = model;
	}

	setModel(model: string) {
		this.currentModel = model;
	}

	getModel() {
		return this.currentModel;
	}

	// Map our model names to actual OpenAI model names
	private mapModelName(model: string): string {
		const modelMap: Record<string, string> = {
			'gpt-5': 'gpt-4-turbo-preview',
			'gpt-4.1': 'gpt-4-turbo-preview',
			'gpt-4.1-mini': 'gpt-3.5-turbo',
			'gpt-4.1-nano': 'gpt-3.5-turbo',
		};
		return modelMap[model] || 'gpt-3.5-turbo';
	}

	async sendMessage(
		messages: Array<{role: 'system' | 'user' | 'assistant'; content: string}>,
	): Promise<string> {
		try {
			const completion = await this.client.chat.completions.create({
				model: this.mapModelName(this.currentModel),
				messages,
				temperature: 0.7,
				max_tokens: 1000,
			});

			return completion.choices[0]?.message?.content || 'No response received';
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(`OpenAI API error: ${error.message}`);
			}
			throw new Error('Unknown error occurred');
		}
	}
}