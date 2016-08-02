'use babel';

import { CompositeDisposable } from 'atom';
const { shell } = require('electron');

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'doc-search:php': () => this.search()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  search() {
    editor = atom.workspace.getActiveTextEditor();
    selectedText = editor.getSelectedText();
    if (selectedText.length == 0) {
        return;
    }
    shell.openExternal('http://jp2.php.net/search.php?lang=ja&show=quickref&pattern=' + selectedText);
  }

};
