import * as vscode from 'vscode';

export class Output {

    private static _channel: vscode.OutputChannel | undefined;

    private static get channel(): vscode.OutputChannel {
        if (!this._channel) { this._channel = vscode.window.createOutputChannel("Generate"); }
        return this._channel;
    }

    static logInfo(message: string) {
        this.channel.appendLine(message);
    }

    static logError(message: string, error?: Error) {
        this.channel.appendLine('');
        this.channel.appendLine('** Error **');
        this.channel.appendLine(message);
        if (error) { this.channel.appendLine(error.toString()); }
        this.channel.appendLine('');
    }
}