'use babel';

import { CompositeDisposable } from 'atom';
const { shell } = require('electron');

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'doc-search:php': () => this.search('php'),
      'doc-search:python': () => this.search('python')
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  search(lang) {
    editor = atom.workspace.getActiveTextEditor();
    selectedText = editor.getSelectedText();
    if (selectedText.length == 0) {
        return;
    }

    if (lang == 'php') {
        shell.openExternal('http://jp2.php.net/search.php?lang=ja&show=quickref&pattern=' + selectedText);
    } else if (lang == 'python') {
        shell.openExternal('http://docs.python.jp/3/search.html?check_keywords=yes&area=default&q=' + selectedText);
    }
  }

};
