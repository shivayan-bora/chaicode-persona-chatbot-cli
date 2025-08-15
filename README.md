# ChaiCode Persona Chatbot CLI

> 🚀 A CLI chatbot application featuring persona-based interactions with ChaiCode instructors Hitesh Choudhary and Piyush Garg

[![npm version](https://img.shields.io/npm/v/chaicode-persona-chatbot-cli.svg)](https://www.npmjs.com/package/chaicode-persona-chatbot-cli)
[![npm downloads](https://img.shields.io/npm/dm/chaicode-persona-chatbot-cli.svg)](https://www.npmjs.com/package/chaicode-persona-chatbot-cli)
[![Node.js](https://img.shields.io/badge/node-%3E%3D16-brightgreen.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎭 **Persona-Based Interactions**: Chat with AI personas of Hitesh Choudhary and Piyush Garg
- 🌐 **Authentic Teaching Styles**: Experience their unique teaching approaches and communication patterns
- 🏗️ **Built with Modern Tech**: React-based terminal UI using [Ink](https://github.com/vadimdemedes/ink)
- 🔗 **OpenAI Integration**: Powered by OpenAI's GPT models
- 📱 **Interactive CLI**: Fullscreen terminal interface with easy navigation
- 🎨 **Multiple Model Support**: Choose from GPT-4.1, GPT-4.1 mini, GPT-4.1 nano, and GPT-5
- 🔄 **Session Management**: Start new conversations, switch personas, and access help commands

## 📦 Package Information

**✅ Available on npm**: [chaicode-persona-chatbot-cli](https://www.npmjs.com/package/chaicode-persona-chatbot-cli)

The package is published and ready to install! Use the installation commands below.

## 🚀 Quick Start

### Option 1: Install from npm (Recommended)

```bash
# Install globally
npm install -g chaicode-persona-chatbot-cli

# Run the application
chaicode-persona-chatbot-cli
```

### Option 2: Local Development

```bash
# Clone the repository
git clone https://github.com/shivayan-bora/chaicode-persona-chatbot-cli.git
cd chaicode-persona-chatbot-cli

# Install dependencies
npm install

# Build the project
npm run build

# Link for global usage
npm link

# Run the application
chaicode-persona-chatbot-cli
```

## 🔑 OpenAI API Key Setup

### Step 1: Create an OpenAI Account

1. Visit [OpenAI's website](https://platform.openai.com/)
2. Click "Sign up" and create an account
3. Verify your email address
4. Complete the phone number verification

### Step 2: Generate API Key

1. Go to [OpenAI API Keys page](https://platform.openai.com/api-keys)
2. Click "Create new secret key"
3. Give your key a name (e.g., "ChaiCode Chatbot")
4. Copy the generated key immediately (you won't be able to see it again)

### Step 3: Set Environment Variable (Optional)

#### On macOS/Linux:
```bash
# Add to your shell profile (~/.bashrc, ~/.zshrc, etc.)
export OPENAI_API_KEY="your-api-key-here"

# Or set for current session only
export OPENAI_API_KEY="your-api-key-here"
```

#### On Windows:
```cmd
# Command Prompt
set OPENAI_API_KEY=your-api-key-here

# PowerShell
$env:OPENAI_API_KEY="your-api-key-here"

# Or set permanently via System Properties > Environment Variables
```

### Step 4: Alternative - Input During Session

If you don't set the environment variable, the application will prompt you to enter your API key when you start it. The key will be used for that session only.

⚠️ **Important Notes:**
- Keep your API key secure and never share it publicly
- The API key is required for each session unless set as an environment variable
- Usage charges apply based on OpenAI's pricing model

## 🎮 Usage

### Starting the Application

```bash
chaicode-persona-chatbot-cli
```

### Application Flow

1. **API Key Validation**: Enter your OpenAI API key (if not set in environment)
2. **Model Selection**: Choose your preferred GPT model:
   - **GPT-5**: Latest and most capable model
   - **GPT-4.1**: Advanced model with high accuracy  
   - **GPT-4.1 mini**: Cost-effective with slightly reduced accuracy
   - **GPT-4.1 nano**: Most economical with basic capabilities

3. **Persona Selection**: Choose between:
   - **Hitesh Choudhary**: Passionate teacher known for practical approach, chai references, and Hinglish communication
   - **Piyush Garg**: Technical expert focusing on system design, best practices, and clean code principles

4. **Chat Interface**: Start conversing with your selected persona!

### Available Commands

| Command | Description |
|---------|-------------|
| `/help` | Display available commands and descriptions |
| `/model` | Switch to a different OpenAI model |
| `/persona` | Change persona and start a new chat |
| `/new` | Start a new conversation with current persona |
| `/exit` | Exit the application |

### Example Interactions

#### With Hitesh Choudhary:
```
You: Hello, how do I learn React?

Hitesh: Hanji! Arey waah, React seekhna chahte ho? Bilkul sahi decision! 
Dekho bhai, React ko main chai ki tarah explain karta hun - ek ek ghoot leke. 
Pehle components samjho, phir hooks ka maza lo. Practice se hi mastery aati hai! 
Chai leke aao, aur code karte jao. You got this! 💪
```

#### With Piyush Garg:
```
You: How should I structure my Node.js project?

Piyush: Oye hoye, bahut vadiya question! Project structure ka matlab hai maintainability. 
Dekho ji, main batata hun industry standard approach. Controllers sirf request handle karenge, 
business logic services mein, database models mein. Clean architecture ka concept apply karo. 
Remember - code aise likho ki team mein koi bhi easily samajh sake!
```

### Screenshots:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ae6287f5-d13f-459a-a1f4-767ea85493bf" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1e160d6c-185e-400f-a4b6-1b549a527255" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5a1a52fb-160e-4e84-b93f-648fad157003" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bcc41f07-4aec-4850-b8de-75c6acc482f2" />


## 🛠️ Development

### Prerequisites

- Node.js 16 or higher
- npm or yarn package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/shivayan-bora/chaicode-persona-chatbot-cli.git
cd chaicode-persona-chatbot-cli

# Install dependencies
npm install

# Start development mode
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Project Structure

```
chaicode-persona-chatbot-cli/
├── source/
│   ├── components/          # React components for terminal UI
│   ├── services/           # OpenAI and persona services
│   ├── prompts/            # Persona-specific system prompts
│   │   ├── hitesh-choudhary/
│   │   └── piyush-garg/
│   ├── cli.tsx             # Entry point
│   └── app.tsx             # Main application component
├── dist/                   # Compiled JavaScript output
├── package.json
└── README.md
```

## 🗑️ Uninstalling

### Remove Global Installation

```bash
# If installed via npm
npm uninstall -g chaicode-persona-chatbot-cli

# If installed via local linking
npm unlink chaicode-persona-chatbot-cli
```

### Remove Local Development Setup

```bash
# Navigate to project directory
cd chaicode-persona-chatbot-cli

# Unlink from global
npm unlink

# Remove node_modules (optional)
rm -rf node_modules
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shivayan Bora**
- Email: bora.shivayan@gmail.com
- GitHub: [@shivayan-bora](https://github.com/shivayan-bora)

## 📚 Libraries used

- [ChaiCode](https://www.chaicode.com/) - Official ChaiCode website
- [Ink](https://github.com/vadimdemedes/ink) - React for interactive command-line apps

## 🤵 Personas Used:
### Hitesh Choudhary:
- Twitter: https://x.com/Hiteshdotcom
- LinkedIn: https://www.linkedin.com/in/hiteshchoudhary/
- ChaiCode: https://www.chaicode.com/
- Personal Website: https://hitesh.ai/
- ChaiCode YouTube Channel: https://www.youtube.com/@chaiaurcode
- Hitesh Choudhary YouTube Channel: https://www.youtube.com/@HiteshCodeLab

### Piyush Garg:
- Twitter: https://x.com/piyushgarg_dev
- LinkedIn: https://www.linkedin.com/in/piyushgarg195/
- ChaiCode: https://www.chaicode.com/
- Teachyst: https://www.teachyst.com/
- YouTube Channel: https://www.youtube.com/@piyushgargdev

## 💡 Support

If you have any questions or run into issues, please:

1. Check the [Issues](https://github.com/shivayan-bora/chaicode-persona-chatbot-cli/issues) page
2. Create a new issue if your problem isn't already listed
3. Provide detailed information about your environment and the issue

---

**Happy Coding! 🚀**
