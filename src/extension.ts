import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('line-getter.copyFilePathWithLineNumber', async () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const position = editor.selection.active;
			const fileName = editor.document.fileName;
			const lineNumber = position.line + 1;

			const textToCopy = `${fileName}:${lineNumber}`;
			await vscode.env.clipboard.writeText(textToCopy);

			vscode.window.showInformationMessage(`Copied: ${textToCopy}`);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
