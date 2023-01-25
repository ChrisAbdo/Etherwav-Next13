import * as React from 'react';
import { Web3Button } from '@thirdweb-dev/react';
import { LENS_CONTRACT_ADDRESS } from '../../../const/blockchain';
import { LENS_ABI } from '../../../const/abis';
import { useCreatePost } from '../../lib/lens/createPost';
import Image from 'next/image';

export default function TemporaryDrawer({
  postMetadata,
  setPostMetadata,
  open,
  setOpen,
}) {
  const { mutateAsync: createPost } = useCreatePost();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <div>
      <div>
        <h1 className="text-3xl">Post Preview</h1>
      </div>

      {postMetadata.coverImage ? (
        <>
          <h1>Cover Image</h1>
          <h1>Note: editable in the main post editor.</h1>
          <Image
            src={URL.createObjectURL(postMetadata.coverImage)}
            alt="yo"
            width={400}
            height={400}
          />
        </>
      ) : (
        <h1>No cover image selected.</h1>
      )}

      <div>
        <h1 className="font-bold">Title</h1>
        <input variant="outlined" disabled value={postMetadata.title || ''} />
      </div>

      <Web3Button
        contractAddress={LENS_CONTRACT_ADDRESS}
        contractAbi={LENS_ABI}
        action={async () => await createPost({ ...postMetadata })}
        className="mt-4"
      >
        <h1>Publish Post 🌿</h1>
      </Web3Button>
    </div>
  );

  return <div>{list()}</div>;
}
