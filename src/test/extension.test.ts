import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('should copy file path and line number to clipboard', async () => {
		const document = await vscode.workspace.openTextDocument({
			content: 'line 1\nline 2\nline 3',
			language: 'plaintext'
		});
		const editor = await vscode.window.showTextDocument(document);

		const position = new vscode.Position(1, 0);
		editor.selection = new vscode.Selection(position, position);

		await vscode.commands.executeCommand('line.copyFilePathWithLineNumber');

		const clipboardContent = await vscode.env.clipboard.readText();

		const expectedContent = `${document.fileName}:2`;

		assert.strictEqual(clipboardContent, expectedContent);
	});
});