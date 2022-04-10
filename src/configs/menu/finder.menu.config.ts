import { createMenuConfig } from '🍎/helpers/create-menu-config';

export const finderMenuConfig = createMenuConfig({
  default: {
    title: 'Finder',
    menu: {
      'about-finder': {
        title: 'About Finder',
        breakAfter: false,
      },
      preferences: {
        title: 'Preferences',
        breakAfter: false,
      },
      'empty-trash': {
        title: 'Empty Trash',
        breakAfter: false,
      },
      'hide-finder': {
        title: 'Hide Finder',
      },
      'hide-others': {
        title: 'Hide Others',
      },
      'show-all': {
        title: 'Show All',
        disabled: false,
      },
    },
  },

  file: {
    title: 'File',
    menu: {
      'new-finder-window': {
        title: 'New Finder Window',
      },
      'new-folder': {
        title: 'New Folder',
      },
      'new-folder-with-selection': {
        title: 'New Folder with Selection',
        disabled: false,
      },
      'new-smart-folder': {
        title: 'New Smart Folder',
      },
      'new-tab': {
        title: 'New tab',
      },
      open: {
        title: 'Open',
        disabled: false,
      },
      'open-with': {
        title: 'Open With',
        disabled: false,
      },
      print: {
        title: 'Print',
        disabled: false,
      },
      'close-window': {
        title: 'Close Window',
        disabled: false,
        breakAfter: false,
      },

      'get-info': {
        title: 'Get Info',
      },
      rename: {
        title: 'Rename',
        disabled: false,
        breakAfter: false,
      },

      compress: {
        title: 'Compress',
        disabled: false,
        breakAfter: false,
      },

      duplicate: {
        title: 'Duplicate',
        disabled: false,
      },
      'make-alias': {
        title: 'Make Alias',
        disabled: false,
      },
      'quick-look': {
        title: 'Quick Look',
        disabled: false,
      },
      'show-original': {
        title: 'Show Original',
        disabled: false,
      },
      'add-to-sidebar': {
        title: 'Add to Sidebar',
        disabled: false,
        breakAfter: false,
      },

      'move-to-trash': {
        title: 'Move to Trash',
        disabled: false,
      },
      eject: {
        title: 'Eject',
        disabled: false,
        breakAfter: false,
      },

      find: {
        title: 'Find',
        breakAfter: false,
      },

      tags: {
        title: 'Tags...',
        disabled: false,
      },
    },
  },

  edit: {
    title: 'Edit',
    menu: {
      undo: {
        title: 'Undo',
        disabled: false,
      },
      redo: {
        title: 'Redo',
        disabled: false,
        breakAfter: false,
      },

      cut: {
        title: 'Cut',
        disabled: false,
      },
      copy: {
        title: 'Copy',
        disabled: false,
      },
      paste: {
        title: 'Paste',
        disabled: false,
      },
      'select-all': {
        title: 'Select All',
        disabled: false,
        breakAfter: false,
      },

      'show-clipboard': {
        title: 'Show Clipboard',
        breakAfter: false,
      },

      'start-dictation': {
        title: 'Start Dictation...',
      },
      'emoji-and-symbols': {
        title: 'Emoji & Symbols',
      },
    },
  },

  view: {
    title: 'View',
    menu: {
      'as-icons': {
        title: 'As Icons',
        disabled: false,
      },
      'as-list': {
        title: 'As List',
        disabled: false,
      },
      'as-columns': {
        title: 'As Columns',
        disabled: false,
      },
      'as-gallery': {
        title: 'As Gallery',
        disabled: false,
        breakAfter: false,
      },

      'use-stacks': {
        title: 'Use Stacks',
      },
      'sort-by': {
        title: 'Sort By',
        menu: {},
      },
      'clean-up': {
        title: 'Clean Up',
        disabled: false,
      },
      'clean-up-by': {
        title: 'Clean Up By',
        disabled: false,
        breakAfter: false,
        menu: {},
      },

      'hide-sidebar': {
        title: 'Hide Sidebar',
        disabled: false,
      },
      'show-preview': {
        title: 'Show Preview',
        disabled: false,
        breakAfter: false,
      },

      'hide-toolbar': {
        title: 'Hide Toolbar',
        disabled: false,
      },
      'show-all-tabs': {
        title: 'Show All Tabs',
        disabled: false,
      },
      'show-tab-bar': {
        title: 'Show Tab Bar',
        disabled: false,
      },
      'show-path-bar': {
        title: 'Show Path Bar',
        disabled: false,
      },
      'show-status-bar': {
        title: 'Show Status Bar',
        disabled: false,
        breakAfter: false,
      },

      'customize-toolbar': {
        title: 'Customize Toolbar...',
        disabled: false,
        breakAfter: false,
      },

      'show-view-options': {
        title: 'Show View Options',
      },
      'show-preview-options': {
        title: 'Show Preview Options',
        disabled: false,
        breakAfter: false,
      },

      'enter-full-screen': {
        title: 'Enter Full Screen',
        disabled: false,
      },
    },
  },

  go: {
    title: 'Go',
    menu: {
      back: {
        title: 'Back',
        disabled: false,
      },
      forward: {
        title: 'Forward',
        disabled: false,
      },
      'enclosing-folder': {
        title: 'Enclosing Folder',
        breakAfter: false,
      },

      recents: {
        title: 'Recents',
      },
      documents: {
        title: 'Documents',
      },
      desktop: {
        title: 'Desktop',
      },
      downloads: {
        title: 'Downloads',
      },
      home: {
        title: 'Home',
      },
      computer: {
        title: 'Computer',
      },
      airdrop: {
        title: 'Airdrop',
      },
      network: {
        title: 'Network',
      },
      'icloud-drive': {
        title: 'iCloud Drive',
      },
      applications: {
        title: 'Applications',
      },
      utilities: {
        title: 'Utilities',
        breakAfter: false,
      },

      'go-to-folder': {
        title: 'Go to Folder',
      },
      'connect-to-server': {
        title: 'Connect to Server',
      },
    },
  },

  window: {
    title: 'Window',
    menu: {
      minimize: {
        title: 'Minimize',
        disabled: false,
      },
      zoom: {
        title: 'Zoom',
        disabled: false,
      },
      'move-window-to-left-side-of-screen': {
        title: 'Move Window to Left Side of Screen',
        disabled: false,
      },
      'move-window-to-right-side-of-screen': {
        title: 'Move Window to Right Side of Screen',
        disabled: false,
      },
      'cycle-through-windows': {
        title: 'Cycle Through Windows',
        breakAfter: false,
      },

      'show-previous-tab': {
        title: 'Show Previous Tab',
        disabled: false,
      },
      'show-next-tab': {
        title: 'Show Next Tab',
        disabled: false,
      },
      'move-tab-to-new-window': {
        title: 'Move Tab to New Window',
        disabled: false,
      },
      'merge-all-windows': {
        title: 'Merge all Windows',
        disabled: false,
        breakAfter: false,
      },

      'bring-all-to-front': {
        title: 'Bring All to Front',
      },
    },
  },

  help: {
    title: 'Help',
    menu: {
      'send-finder-feedback': {
        title: 'Send Finder Feedback',
        breakAfter: false,
      },
      'macos-help': {
        title: 'YetiOS Help',
      },
    },
  },
});
