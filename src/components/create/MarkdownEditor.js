import React from 'react';
import decorateMarkdown from '../../lib/markdown/decorateMarkdown';
import {
  insertMediaIntoMarkdown,
  uploadMedia,
} from '../../lib/markdown/uploadMedia';

export default function MarkdownEditor({ mdInputRef, mdValue, setMdValue }) {
  return (
    // <input
    //   inputRef={mdInputRef}
    //   multiline
    //   fullWidth
    //   placeholder="Write your story..."
    //   value={mdValue}
    //   onChange={(e) => setMdValue(e.target.value)}
    //   onKeyDown={(e) => {
    //     // Bold
    //     if (e.key === 'b' && e.ctrlKey) {
    //       if (!mdInputRef.current) return;
    //       e.preventDefault();
    //       e.stopPropagation();
    //       decorateMarkdown(mdInputRef.current, 'bold', setMdValue);
    //     }

    //     // Italic
    //     if (e.key === 'i' && e.ctrlKey) {
    //       if (!mdInputRef.current) return;
    //       e.preventDefault();
    //       e.stopPropagation();
    //       decorateMarkdown(mdInputRef.current, 'italic', setMdValue);
    //     }

    //     // Tab
    //     if (e.key === 'Tab') {
    //       if (!mdInputRef.current) return;
    //       e.preventDefault();
    //       e.stopPropagation();
    //       decorateMarkdown(mdInputRef.current, 'tab', setMdValue);
    //     }
    //   }}
    //   onDrop={async (e) => {
    //     e.preventDefault();

    //     const file = e.dataTransfer.files[0];
    //     if (!file || !mdInputRef.current) return;

    //     // Change the cursor to a loading icon
    //     mdInputRef.current.style.cursor = 'wait';

    //     const { uri, fileName } = await uploadMedia(file);

    //     // Insert the image into the editor
    //     await insertMediaIntoMarkdown(
    //       mdInputRef.current,
    //       uri,
    //       fileName,
    //       setMdValue
    //     );

    //     // Change the cursor back to normal
    //     mdInputRef.current.style.cursor = 'text';
    //   }}
    // />

    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Song Story</span>
      </label>
      <input
        inputRef={mdInputRef}
        multiline
        fullWidth
        placeholder="Write your story..."
        value={mdValue}
        onChange={(e) => setMdValue(e.target.value)}
        onKeyDown={(e) => {
          // Bold
          if (e.key === 'b' && e.ctrlKey) {
            if (!mdInputRef.current) return;
            e.preventDefault();
            e.stopPropagation();
            decorateMarkdown(mdInputRef.current, 'bold', setMdValue);
          }

          // Italic
          if (e.key === 'i' && e.ctrlKey) {
            if (!mdInputRef.current) return;
            e.preventDefault();
            e.stopPropagation();
            decorateMarkdown(mdInputRef.current, 'italic', setMdValue);
          }

          // Tab
          if (e.key === 'Tab') {
            if (!mdInputRef.current) return;
            e.preventDefault();
            e.stopPropagation();
            decorateMarkdown(mdInputRef.current, 'tab', setMdValue);
          }
        }}
        onDrop={async (e) => {
          e.preventDefault();

          const file = e.dataTransfer.files[0];
          if (!file || !mdInputRef.current) return;

          // Change the cursor to a loading icon
          mdInputRef.current.style.cursor = 'wait';

          const { uri, fileName } = await uploadMedia(file);

          // Insert the image into the editor
          await insertMediaIntoMarkdown(
            mdInputRef.current,
            uri,
            fileName,
            setMdValue
          );

          // Change the cursor back to normal
          mdInputRef.current.style.cursor = 'text';
        }}
        type="text"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
}
