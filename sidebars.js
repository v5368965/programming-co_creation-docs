/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    "intro",
    "announce",
    {
      type: "category",
      label: "0.准备篇",
      items: [
        "p0/p0-1-prep",
        "p0/p0-2-issues",
        "p0/p0-3-markdown",
        "p0/p0-4-cli",
        "p0/p0-5-collaborate",
        "p0/p0-6-python",
      ],
      // collapsible: false,
    },
    {
      type: "category",
      label: "1.最少必要编程知识篇",
      items: [
        "p1/p1-1-repl",
        "p1/p1-2-values-variables",
        "p1/p1-3-ide",
        "p1/p1-4-operators",
        "p1/p1-5-functions",
        "p1/p1-6-mixin-bot",
        "p1/p1-7-if",
        "p1/p1-8-logical",
        "p1/p1-9-loop",
        "p1/p1-10-string",
        "p1/p1-11-how-to-start-programming-self-study",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "2.Mixin机器人篇",
      items: ["p2/example"],
      // collapsible: false,
    },
    {
      type: "category",
      label: "3.作业",
      items: ["homework/1-5", "homework/1-7", "homework/1-8"],
      collapsible: false,
    },
    {
      type: "category",
      label: "4.扩展资料",
      items: [
        "extend/git-basic",
        "extend/vscode-extentions",
        "extend/typora-screenshot",
        "extend/ipynb-to-md",
        "extend/github-edit-name",
        "extend/snipaste",
        "extend/pull-request",
        "extend/set-environment-variable-in-CLI",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "5.周会",
      items: [
        "weekly-meeting/20230316",
        "weekly-meeting/20230309",
        "weekly-meeting/20230223",
        "weekly-meeting/20230209",
      ],
      collapsible: false,
    },
  ],
};

module.exports = sidebars;
