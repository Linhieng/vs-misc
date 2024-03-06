import * as vscode from 'vscode'

/**
 * 粘贴为链接，格式为末尾链接格式： [$0]: clipboard text
 * @returns
 */
export async function miscPastelink() {
    // 获取当前编辑器
    const editor = vscode.window.activeTextEditor
    if (!editor || editor.document.languageId !== 'markdown') {
        await vscode.window.showInformationMessage('This command only works in Markdown files.')
        return
    }

    // 获取剪切板内容
    const clipboardText = await vscode.env.clipboard.readText()
    if (!clipboardText) {
        await vscode.window.showInformationMessage('Clipboard is empty.')
        return
    }

    // 获取当前光标位置
    const position = editor.selection.active
    const insertContent = `[]: ${clipboardText}`

    // 插入内容
    await editor.edit(editBuilder => {
        editBuilder.insert(position, insertContent)
    })
    // 设置新的光标位置 —— 相对于 position 向右偏移 1 字符
    const newPosition = position.translate(0, 1)
    editor.selection = new vscode.Selection(newPosition, newPosition)
}
