import * as vscode from 'vscode'
import { miscPastelink, miscInsertNum, miscNextLinewithSemicolon } from './command'

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
        vscode.commands.registerCommand(
            'misc.nextLinewithSemicolon',
            async () => {
                await miscNextLinewithSemicolon()
            },
        ),
    ]

    context.subscriptions.push(...disposables)
}

export function deactivate() { }
