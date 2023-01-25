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
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
          accept="image/*"
          ref={fileInputRef}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setCoverImage(file);
            }
          }}
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
        remove
      </button>
    </div>
  );
}
