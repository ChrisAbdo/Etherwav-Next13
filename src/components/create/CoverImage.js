import React, { useEffect, useState, useRef } from 'react';
import styles from './create.module.css';
export default function CoverImage({ coverImage, setCoverImage }) {
  const [coverImageUrl, setCoverImageUrl] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (coverImage) {
      setCoverImageUrl(URL.createObjectURL(coverImage));
    } else {
      setCoverImageUrl(null);
    }
  }, [coverImage]);

  if (!coverImage) {
    return (
      <>
        <div
          className={styles.dragAndDropZone}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file) {
              setCoverImage(file);
            }
          }}
          onClick={() => {
            if (fileInputRef.current) {
              fileInputRef.current.click();
            }
          }}
        >
          <h1>Drag and drop your cover image here</h1>
        </div>

        {/* Hidden input field */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setCoverImage(file);
            }
          }}
          style={{ display: 'none' }}
        />
      </>
    );
  }

  // Show the image with a remove button
  return (
    <div className={styles.coverImagePreviewContainer}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={coverImageUrl || ''}
        alt="Cover image"
        className={styles.coverImagePreview}
      />
      <button onClick={() => setCoverImage(null)} className="btn">
        close
      </button>
    </div>
  );
}
