import React from 'react';
import styles from './create.module.css';

import { EditorTab } from './CreateContainer';
import decorateMarkdown from '../../lib/markdown/decorateMarkdown';
import { capitalize } from '../../lib/helper/format';

const tabs = [
  {
    name: 'write',
  },
  {
    name: 'preview',
  },
  {
    name: 'guide',
  },
];

const editorOptions = [
  {
    name: 'heading',
    // Take the editor and the setContent and call the decorateMarkdown function
    // with the editor and the setContent function
    onClick: (editor, setContent) => decorateMarkdown(editor, 'h1', setContent),
  },
  {
    name: 'bold',
    onClick: (editor, setContent) =>
      decorateMarkdown(editor, 'bold', setContent),
  },
  {
    name: 'italic',
    onClick: (editor, setContent) =>
      decorateMarkdown(editor, 'italic', setContent),
  },
  {
    name: 'quote',
    onClick: (editor, setContent) =>
      decorateMarkdown(editor, 'quote', setContent),
  },
  {
    name: 'inline code',
    onClick: (editor, setContent) =>
      decorateMarkdown(editor, 'inline code', setContent),
  },
  {
    name: 'code block',
    onClick: (editor, setContent) =>
      decorateMarkdown(editor, 'code block', setContent),
  },
  {
    name: 'unordered list',
    onClick: (editor, setContent) => decorateMarkdown(editor, 'ul', setContent),
  },
  {
    name: 'ordered list',
    onClick: (editor, setContent) => decorateMarkdown(editor, 'ol', setContent),
  },
  {
    name: 'link',
    onClick: (editor, setContent) =>
      decorateMarkdown(editor, 'link', setContent),
  },
  {
    name: 'image',
    onClick: (editor, setContent) =>
      decorateMarkdown(editor, 'image', setContent),
  },
];

export default function EditorToolbar({
  mdInputRef,
  setMdValue,
  activeTab,
  setActiveTab,
}) {
  return (
    <>
      {tabs.map((tab, i) => (
        <div key={i}>
          <button
            onClick={() => setActiveTab(tab.name)}
            className={`${styles.navbarTab} ${
              activeTab === tab.name ? styles.navbarTabActive : ''
            }`}
            startIcon={tab.icon}
          >
            {capitalize(tab.name)}
          </button>
        </div>
      ))}

      {/* Right side of editor (Editor options) */}
      <div>
        {editorOptions.map((option, i) => (
          <div key={i}>
            <button
              onClick={() => {
                if (!mdInputRef?.current) return;
                option.onClick?.(mdInputRef?.current, setMdValue);
              }}
            >
              {option.icon}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.draftWarningContainer}>
        <h1 variant="body2" color="error">
          Currently, there is no draft-saving feature.{' '}
          <b>Your work will be lost if you leave this page</b>.
        </h1>
      </div>
    </>
  );
}
