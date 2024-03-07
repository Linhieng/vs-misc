import * as vscode from 'vscode'
import { miscPastelink } from './command'

export function activate(context: vscode.ExtensionContext) {

    const disposable = vscode.commands.registerCommand(
        'misc.pasteLink',
        async () => {
            await miscPastelink()
        },
    )

    context.subscriptions.push(disposable)
}

export function deactivate() { }
