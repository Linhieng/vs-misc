# 插件开发 TODO

- [ ] 上下移动光标时，若有
- [ ] 粘贴 url 时，自动识别 url 中的最后一个名称，供用户替换 [${1: xxx}]: url。
- [ ] 粘贴的内容有多行时，多行的内容也自动缩进，而不是只对第一行自动缩进。比如，粘贴时，首行前有多少空格，就给其他行也添加多少空格。
- [ ] 创建文件时自动添加内容，[参考](https://github.com/cweijan/autohotkey-plus)
- [ ] 批量将内联链接转换为末尾链接
- [ ] vscode-markdown-preview-enhanced 插件似乎废了（目前最新版本 0.8.11）。变得特别慢，而且界面复杂了。0.7.10 解析速度慢还报错，切换回 0.7.0 就没问题。所以任务就是研究四个版本的源代码有啥区别。其中 0.6.10 的代码打包的扩展体积特别大！0.6.9 的则没有在 tag 中显示打包的扩展。学习一下是为什么。对了 0.8.11 版本之间解析卡死了。
- [ ] md 粘贴文件时，支持指定工作区中的目录，支持重命名（可以通过先在 editor 中写名称，然后选中粘贴的方式实现。还有提供图片预览功能。
- [ ] 实现 editor.autoSurround 支持像 editor.unicodeHighlight.nonBasicASCII 一样自定义闭合符号。也就是对曾经的第一个插件（auto-mark）补充
- [ ] 根据 sql 脚本自动生成 schema.d.ts 类型声明文件，主要是提供注释，至于类型，可以通过自己定义映射来解决


复刻

- [ ] 复刻 [copy-path-relative-posix]
- [ ] 复刻 [run on save]


格式化

- [ ] 格式化插件，智能对齐 css。当一个 entries 在一行时，智能单行单行的对齐，看起来更漂亮。
- [ ] 格式化：表格对齐格式化时支持中英混杂，原理：借助等宽字体和全角空格
- [ ] 格式化：sql 格式化，，参考 datagrip，但比他好 —— 将所有字段对齐
- [ ] 表格对齐：通过使用全角空格的方式，一劳永逸地解决所有自己对齐问题！


[run on save]: https://github.com/emeraldwalk/vscode-runonsave.git
[copy-path-relative-posix]: https://github.com/bpasero/copy-path-relative-posix
