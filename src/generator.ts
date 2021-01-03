import * as vscode from 'vscode';
import * as cp from 'child_process';
import { Output } from './output';

export class Generator {

    /**
     * Spawns
     * @param inputPath 
     */
    generate(inputPath: string)
    {
        const cmd = this.getShellCommand(inputPath);
        Output.logInfo(`About to execute the shell command: '${cmd}'`);
        const result = cp.execSync(cmd);
        console.log(`execSync('${cmd}') returned: '${result}'`);
    }
    
    /**
     * Constructs a shell command from the configured shell command and the specified file path.
     * @param inputPath The full path specification of a file.
     */
    private getShellCommand (inputPath: string): string {

        // Read the command template from the setting 'metap.generateCommand'
        const configuration = vscode.workspace.getConfiguration('metap');
        var command = configuration.get<string>('generateCommand') as string;
        
        // Replace all occurrences of '${inputPath}' with the specified inputPath.
        command = command?.replace('${inputPath}', inputPath);

        return command;
    }
}
