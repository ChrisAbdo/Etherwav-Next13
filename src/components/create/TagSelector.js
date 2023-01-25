import React, { useState } from 'react';

/**
 * Textfield that listens for "," keypresses and adds the text before the comma
 */
export default function TagSelector({ postMetadata, setPostMetadata }) {
  const [currentTag, setCurrentTag] = useState('');

  return (
    <>
      {(!postMetadata.tags || postMetadata.tags.length < 5) && (
        <>
          <h1>Type a tag and hit Enter to add it.</h1>

          <input
            placeholder="Enter a tag and hit Enter to add it."
            value={currentTag}
            onChange={(e) => setCurrentTag(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === ',' || e.key === 'Enter') {
                // Prevent the comma from being added to the textfield
                e.preventDefault();
                // Add the tag to the metadata
                setPostMetadata({
                  ...postMetadata,
                  // If there are already tags, add the new one to the end
                  tags: postMetadata.tags
                    ? [...postMetadata.tags, currentTag]
                    : [currentTag],
                });
                // Clear the current tag
                setCurrentTag('');
              }
            }}
          />
        </>
      )}

      {postMetadata.tags && (
        <div>
          {postMetadata.tags.map((tag, i) => (
            <div
              key={i}
              onClick={() => {
                // Remove the tag from the metadata
                setPostMetadata({
                  ...postMetadata,
                  tags: postMetadata.tags.filter((t) => t !== tag),
                });
              }}
            ></div>
          ))}
        </div>
      )}
    </>
  );
}
