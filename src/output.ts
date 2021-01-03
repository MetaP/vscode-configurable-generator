import * as vscode from 'vscode';

export class Output {
    static logInfo(message: string) {
        vscode.window.showInformationMessage(message);
    }

    static logError(message: string, error?: Error) {

        if (error) { 
            message += error.message;
        }
        vscode.window.showErrorMessage(message);
    }
}