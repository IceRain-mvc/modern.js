---
sidebar_position: 7
---

# 版本管理与发布

一个 npm 类型的模块项目发布流程包含了两个阶段：

- 第一阶段是在开发期间，开发者需要提供一个变更文件来记录需要发布的变动；
- 第二阶段是在发布期间，Module Tools 可以收集所有的变更文件来更新版本、更新发布日志，并发布新的包到 [npm Registry](https://www.npmjs.com/) 上。

## 跟踪变更

**当项目发生变化的时候需要将变化的内容记录下来**。项目发生的变化一般是指：

- 新功能
- 修复问题
- 配置文件修改
- ...

当这些变化一旦完成后，需要通过以下命令来对当前的变化进行记录：

- [`modern change`](/zh/guide/command-preview#modern-change)

执行 `modern change` 命令后会向开发者提出几个问题，并根据开发者的回答生成变更记录。变更记录文件包含了版本变化的类型和其描述，该文件会被提交到 git 仓库中。

```bash
$ npx modern change
🦋  What kind of change is this for module-example? (current version is 0.1.0) · patch
🦋  Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor
🦋  Summary · publish test
🦋  === Releasing the following packages ===
🦋  [Patch]
🦋    module
🦋  Is this your desired changeset? (Y/n) · true
🦋  Changeset added! - you can now commit it
🦋
🦋  If you want to modify or expand on the changeset summary, you can find it here
🦋  info /xxxxxx/module/.changeset/brave-dryers-agree.md
```

当执行成功后，生成的包含变更记录的 Markdown 文件会保存在项目的 `.changeset` 目录下面。其内容类似下面这样：

```markdown .changeset/brave-dryers-agree.md
---
'module-example': patch
---

publish test
```

## 版本更新

当需要更新项目版本的时候，执行以下命令：

- [`modern bump`](/zh/guide/command-preview#modern-bump)

执行 `modern bump` 将会基于 `.changeset/` 目录下记录了变更的 Markdown 文件内容来修改 `package.json` 中的版本号，同时生成 `CHANGELOG.md` 文件。**而当版本更新完成后，这些记录变更的 Markdown 文件也会被删除，也可说这些 Markdown 文件被“消耗”掉了**。

```markdown CHANGELOG.md
# module

## 0.1.1

### Patch Changes

- publish test
```

## 发布

发布项目可以执行以下命令：

- [`modern publish`](/zh/guide/command-preview#modern-release)

`modern release` 命令可以将项目发布到 npm Registry。

此时发布的是 `latest` 版本，也可以说是正式版本。如果想要修改 `dist-tag`，可以通过 `modern release --tag` 命令来指定。例如：

```bash
modern release --tag beta
```

但是如果希望将当前项目的版本号也修改为预发布的版本号，则需要使用 `modern pre` 命令。

> 所谓 `dist-tag`，可以理解：为当前发布的版本打标签。一般来说，默认发布的版本对应的 `dist-tag` 为 `latest`，因此可以把 `latest` 认为是正式版本的 `dist-tag`。

## 预发布

当需要在正式发布之前进行预发布，则需要执行以下命令：

- [`modern pre`](/zh/guide/command-preview#modern-pre)

首先 `modern pre enter <tag>` 进入预发布模式，`<tag>` 可以与发布项目的时候使用 `modern release --tag` 命令指定的 `tag` 一致。

```bash
$ npx modern pre enter next
🦋  success Entered pre mode with tag next
🦋  info Run `changeset version` to version packages with prerelease versions
✨  Done in 5.30s.
```

接着可以使用 `modern bump` 命令更新具体的版本号，**此时不会真正的“消耗”记录变更的 Markdown 文件**：

```bash
$ npx modern bump
🦋  warn ===============================IMPORTANT!===============================
🦋  warn You are in prerelease mode
🦋  warn If you meant to do a normal release you should revert these changes and run `changeset pre exit`
🦋  warn You can then run `changeset version` again to do a normal release
🦋  warn ----------------------------------------------------------------------
🦋  All files have been updated. Review them and commit at your leisure
```

然后可以看到 `package.json` 中更新的版本号会类似这样：`0.1.2-next.0`。

最后，**如果不需要再进行预发布，则一定要执行 `modern pre exit` 命令**，这样可以退出预发布状态，并且当再次执行 `modern bump` 命令的时候，就可以发布正式的版本。
