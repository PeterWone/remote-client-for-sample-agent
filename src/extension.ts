import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand("test-client.showInvokerHost", test));
	vscode.window.showInformationMessage("test client has activated");
}

async function test() {
	const host = vscode.env.remoteName;
	vscode.window.showInformationMessage(`The test client ${host ? "is" : "IS NOT"} invoking "sample-agent.showInvokerHost" from a remote extension host`);
	try {
		const cmdResult = await vscode.commands.executeCommand("sample-agent.showInvokerHost", host ?? "local");
		vscode.window.showInformationMessage("sample-agent.showInvokerHost command completed");
	} catch (e: any) {
		vscode.window.showErrorMessage(e.message);
	}
}