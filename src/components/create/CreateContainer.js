import React, { useRef, useState } from 'react';
import guideText from '../../../const/guideText';
import MarkdownPreview from '../post/MarkdownPreview';
import CoverImage from './CoverImage';
import CreateHeader from './CreateHeader';
import EditorToolbar from './EditorToolbar';
import MarkdownEditor from './MarkdownEditor';
import styles from './create.module.css';

export default function CreateContainer({}) {
  // Reference to the editor input element
  const mdInputRef = useRef(null);

  // Store the contents of the editor as the user types
  const [mdInput, setMdInput] = useState('');

  // State to keep track of the cover image
  const [coverImage, setCoverImage] = useState(null);

  // State to keep track of the title
  const [title, setTitle] = useState('');

  // Configurable metadata state
  const [metadata, setMetadata] = useState({});

  return (
    // <>
    //   <CreateHeader
    //     postMetadata={{
    //       ...metadata,
    //       title,
    //       coverImage,
    //       content: mdInput,
    //     }}
    //     setPostMetadata={setMetadata}
    //   />
    //   <div>
    //     <CoverImage coverImage={coverImage} setCoverImage={setCoverImage} />

    //     <EditorToolbar mdInputRef={mdInputRef} setMdValue={setMdInput} />

    //     <>
    //       <input
    //         label="Title"
    //         fullWidth
    //         placeholder="Enter a title..."
    //         size="medium"
    //         variant="standard"
    //         InputProps={{
    //           className: styles.titleInput,
    //         }}
    //         value={title}
    //         onChange={(e) => setTitle(e.target.value)}
    //         multiline
    //         maxRows={3}
    //         required
    //       />
    //       <MarkdownEditor
    //         mdInputRef={mdInputRef}
    //         mdValue={mdInput}
    //         setMdValue={setMdInput}
    //       />
    //     </>
    //   </div>
    // </>

    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        {/* <!-- Page content here --> */}

        <div className="card w-96 border border-[#2a2a2a] rounded-xl shadow-xl mt-6">
          <h1 className="card-title text-center justify-center mt-4">
            Create a new post
          </h1>
          <figure>
            <CoverImage coverImage={coverImage} setCoverImage={setCoverImage} />{' '}
          </figure>
          <div className="card-body">
            {/* <input
              label="Title"
              placeholder="Enter a title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxRows={3}
              required
            /> */}

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <MarkdownEditor
              mdInputRef={mdInputRef}
              mdValue={mdInput}
              setMdValue={setMdInput}
            />
            <div className="card-actions justify-end">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Publish!
              </label>{' '}
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side border-r border-[#2a2a2a]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <CreateHeader
            postMetadata={{
              ...metadata,
              title,
              coverImage,
              content: mdInput,
            }}
            setPostMetadata={setMetadata}
          />
        </ul>
      </div>
    </div>
  );
}
