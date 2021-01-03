# MetaP Configurable Generator

This extension adds a "Generate" item to the context menu of XML files. When this menu item is selected a configured shell command is run. This command can receive the full path specification of the XML file on which the menu is selected, so that it can use the contents of this file as input for a generation process.

## Extension Settings

This extension contributes the following setting:

* `metap.generateCommand`: the shell command that is executed when the "Generate" menu is selected

Any occurrence of the substring '${inputPath}' in the specified string, will be replaced by the full path specification of the file on which the menu is selected.

This setting has the following default:

"%USERPROFILE%\.vscode\extensions\metap.configurable-generator-0.1.0\command\MetaP.SampleCommand.exe\" \"${inputPath}\"

This will trigger the sample generator command that is included with the extension. This command accepts a path specification as input and generates a text file with a single line of text with the same name as the input file except for the extension ".txt" in the same folder as the input file.

You wil probably want to modify (the first part) of the command to execute a generator of your choice.

Settings can be viewed and updated via the settings view [Menu: File |] Preferences | Settings]. The "Generate Command" can be found in the MetaP section under Extensions.

## Release Notes


### 0.1.0

Initial bèta release.
