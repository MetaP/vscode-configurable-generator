// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Generator } from './generator';
import { Output } from './output';

// This method is called when the extension is activated.
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "configurable-generator" is now active!');

	// Register the 'metap.generator' command.
	let disposable = vscode.commands.registerCommand('metap.generate', (uri: vscode.Uri) => {
		try {
			const path = uri?.fsPath;
			if (path)
			{
				Output.logInfo(`"Generate" started`);
				const generator = new Generator();
				generator.generate(path);
				Output.logInfo(`"Generate" succeeded.`);
			}
		} catch (error) {
			Output.logError(`"Generate" failed: ${error.message}`);
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
