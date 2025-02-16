---
sidebar_position: 7
---

# Versioning and Publishing

An npm-type module project release process consists of two phases.

- The first phase is during development, where the developer needs to provide a change file to record changes that need to be released.
- The second phase is during release, where Module Tools can collect all the change files to update the version, update the release log, and release new packages to the [npm Registry](https://www.npmjs.com/).

## Tracking changes

**Changes need to be logged when they happen to the project**. Changes that occur in a project are typically.

- New features
- Fixes to issues
- Configuration file changes
- ...

Once these changes have been made, the current changes need to be documented with the following command.

- [`modern change`](/zh/guide/command-preview#modern-change)

Executing the `modern change` command asks the developer several questions and generates a change log based on the developer's answers. The changelog file contains the type of change and its description, and is committed to the git repository.

```bash
$ npx modern change
🦋 What kind of change is this for module-example? (current version is 0.1.0) - patch
🦋 Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor
🦋 Summary - publish test
🦋 === Releasing the following packages ===
🦋 [Patch]
🦋 module
🦋 Is this your desired changeset? (Y/n) - true
🦋 Changeset added! - you can now commit it
🦋
🦋 If you want to modify or expand on the changeset summary, you can find it here
🦋 info /xxxxxx/module/.changeset/brave-dryers-agree.md
```

When executed successfully, the resulting Markdown file containing the change log is saved in the project's `.changeset` directory. The contents will look like the following.

```markdown .changeset/brave-dryers-agree.md
---
"``module-example'': patch
---

publish test
```

## Version update

When the project version needs to be updated, execute the following command.

- [`modern bump`](/zh/guide/command-preview#modern-bump)

Executing `modern bump` will modify the version number in `package.json` based on the contents of the Markdown file in the `.changeset/` directory where the changes were recorded, and generate the `CHANGELOG.md` file. **These Markdown files are also deleted when the version update is complete, so they are "consumed "**.

```markdown CHANGELOG.md
# module

## 0.1.1

### Patch Changes

- publish test
```

## Publish

To publish a project, you can execute the following command.

- [`modern publish`](/zh/guide/command-preview#modern-release)

The `modern release` command publishes the project to the npm Registry.

The release is the `latest` version, which is also the official version. If you want to change the `dist-tag`, you can specify it with the `modern release --tag` command. For example.

```bash
modern release --tag beta
```

However, if you want to change the version number of the current project to a pre-release as well, you need to use the `modern pre` command.

> `dist-tag` can be understood as: tagging the current release. Generally speaking, the `dist-tag` for the default release is `latest`, so you can consider `latest` as the `dist-tag` for the official release.

## Pre-releases

When a pre-release is needed before the official release, the following command is executed.

- [`modern pre`](/zh/guide/command-preview#modern-pre)

First `modern pre enter <tag>` to enter pre-release mode, `<tag>` can be the same as the `tag` specified with the `modern release --tag` command when releasing the project.

````bash
$ npx modern pre enter next
🦋 success Entered pre mode with tag next
🦋 info Run `changeset version` to version packages with prerelease versions
✨ Done in 5.30s.
Done in 5.30s. ```

Then you can update the specific version number with the `modern bump` command, **which doesn't actually "consume" the Markdown file that records the changes**: ``` bash

``` bash
$ npx modern bump
🦋 warn ===============================IMPORTANT!===============================
🦋 warn You are in prerelease mode
🦋 warn If you meant to do a normal release you should revert these changes and run `changeset pre exit`
🦋 warn You can then run `changeset version` again to do a normal release
🦋 warn ----------------------------------------------------------------------
🦋 All files have been updated. review them and commit at your leisure
````

Then you can see that the updated version number in `package.json` will look like this: `0.1.2-next.0`.

Finally, **if you don't need to do a pre-release anymore, be sure to run the `modern pre exit` command** to exit the pre-release state and to release the official version when you run the `modern bump` command again.
