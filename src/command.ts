import * as vscode from 'vscode'

/**
 * 根据 action，在 selection 处插入/替换文本内容
 * @param editBuilder
 * @param selection
 * @param txtContent
 * @param action
 */
function changeCursorText(editBuilder: vscode.TextEditorEdit, selection: vscode.Selection, txtContent: string, action: 'insert' | 'replace') {
    if (action === 'insert') {
        editBuilder.insert(selection.active, txtContent)
    } else {
        editBuilder.replace(selection, txtContent)
    }
}

/**
 * TODO: 考虑方向, 支持配置 2n+1 等内容
 * 对当前的多行光标，插入/替换连续的数字
 * @param editor
 * @param action
 */
function insertNum(editor: vscode.TextEditor, action: 'insert' | 'replace') {
    // 注意多行编辑时，也需要在 editor.edit 中一次性处理完！
    void editor.edit(editBuilder => {
        // 获取当前编辑器中的多个光标位置
        const selections = editor.selections
        let count = 1
        selections.forEach(selection => {
            // 在光标位置插入/替换连续数字
            changeCursorText(editBuilder, selection, count.toString(), action)
            count++
        })
    })
}

/**
 * 多光标时，插入连续的数字
 */
export function miscInsertNum() {
    // 获取当前活动的编辑器
    const editor = vscode.window.activeTextEditor
    if (editor) {
        if (editor.selection.isEmpty) {
            insertNum(editor, 'insert')
        } else {
            insertNum(editor, 'replace')
        }
    }
}

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
