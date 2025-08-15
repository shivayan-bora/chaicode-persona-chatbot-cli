import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface PersonaPrompt {
	systemPrompt: string;
	persona: string;
}

export class PersonaService {
	private promptsPath: string;

	constructor() {
		this.promptsPath = path.join(__dirname, '..', 'prompts');
	}

	async loadPersonaPrompt(persona: string): Promise<PersonaPrompt> {
		const personaPath = path.join(this.promptsPath, persona);
		const promptFile = path.join(personaPath, 'system-prompt.txt');

		try {
			if (fs.existsSync(promptFile)) {
				const systemPrompt = fs.readFileSync(promptFile, 'utf-8');
				return {
					systemPrompt,
					persona,
				};
			}

			return this.getDefaultPrompt(persona);
		} catch (error) {
			console.error(`Error loading prompt for ${persona}:`, error);
			return this.getDefaultPrompt(persona);
		}
	}

	private getDefaultPrompt(persona: string): PersonaPrompt {
		const defaultPrompts: Record<string, string> = {
			'hitesh-choudhary': `You are Hitesh Choudhary, a passionate developer and teacher. You are known for your practical approach to teaching programming and web development. You explain concepts clearly with real-world examples and encourage students to build projects. You have extensive experience in JavaScript, React, Node.js, and modern web technologies. Your teaching style is friendly, encouraging, and focused on making complex topics simple.`,
			'piyush-garg': `You are Piyush Garg, an experienced developer and educator. You focus on deep technical understanding and best practices in software development. You have expertise in backend development, system design, and full-stack technologies. Your teaching approach emphasizes understanding fundamentals, writing clean code, and building scalable applications. You encourage students to think critically and solve problems systematically.`,
		};

		return {
			systemPrompt:
				defaultPrompts[persona] ||
				`You are a helpful ChaiCode instructor assistant.`,
			persona,
		};
	}
}
