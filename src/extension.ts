import * as vscode from 'vscode'
import { miscPastelink, miscInsertNum } from './command'

export function activate(context: vscode.ExtensionContext) {

    const disposables = [
        vscode.commands.registerCommand(
            'misc.pasteLink',
            async () => {
                await miscPastelink()
            },
        ),
        vscode.commands.registerCommand(
            'misc.insertNumber',
            () => {
                miscInsertNum()
            },
        ),
    ]

    context.subscriptions.push(...disposables)
}

export function deactivate() { }
