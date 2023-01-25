import React from 'react';
import {
  PublicationQuery,
  ReactionTypes,
  useAddReactionMutation,
} from '../../graphql/generated';

import { useLensUserContext } from '../../context/LensUserContext';
import {
  ConnectWallet,
  useAddress,
  useNetwork,
  useNetworkMismatch,
} from '@thirdweb-dev/react';
import { CHAIN_ID } from '../../../const/blockchain';

import { useQueryClient } from '@tanstack/react-query';
import { useMirrorPost } from '../../lib/lens/mirrorPost';

type Props = {
  publication: PublicationQuery;
};

export default function PostActionsContainer({ publication }: Props) {
  const { data: lensUser } = useLensUserContext();

  // TODO: Invalidate reaction queries upon reaction.
  // Requires to change SSG section to use React query
  const queryClient = useQueryClient();
  const address = useAddress();
  const [, switchNetwork] = useNetwork();
  const networkMismatch = useNetworkMismatch();

  const { mutateAsync: addReaction, isLoading: addingReaction } =
    useAddReactionMutation();

  const { mutateAsync: createMirror, isLoading: creatingMirror } =
    useMirrorPost();

  const actions = [
    {
      label: 'Upvote',
      onClick: async () => {
        return await addReaction(
          {
            request: {
              publicationId: publication.publication?.id,
              reaction: ReactionTypes.Upvote,
              profileId: lensUser?.defaultProfile?.id,
            },
          },
          {
            onError: async (error) => {
              console.log(error);
            },
            onSuccess() {
              console.log('success');
            },
          }
        );
      },
    },
    {
      label: 'Downvote',
      onClick: async () => {
        return await addReaction(
          {
            request: {
              publicationId: publication.publication?.id,
              reaction: ReactionTypes.Downvote,
              profileId: lensUser?.defaultProfile?.id,
            },
          },
          {
            onError: async (error) => {
              console.log(error);
            },
            onSuccess() {
              console.log('success');
            },
          }
        );
      },
    },
    {
      label: 'Collect',
    },
    {
      label: 'Mirror',
      onClick: async () => {
        return await createMirror(
          {
            publicationId: publication.publication?.id,
            userId: lensUser?.defaultProfile?.id,
          },
          {
            onError: async (error) => {
              console.log(error);
            },
            onSuccess() {
              console.log('success');
            },
          }
        );
      },
    },
    {
      label: 'Comment',
    },
    {
      label: 'Share',
      onClick: () => {
        if (navigator.share) {
          navigator
            .share({
              title: publication?.publication?.metadata?.name || '',
              text: publication?.publication?.metadata?.content || '',
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        }
      },
    },
  ];

  if (!address) {
    return <ConnectWallet />;
  }

  if (networkMismatch) {
    return (
      <button onClick={() => switchNetwork?.(CHAIN_ID)}>Switch Network</button>
    );
  }

  return (
    <h1>
      <div>
        {actions.map((action) => (
          <div key={action.label}>
            <button onClick={() => action.onClick?.()}>{action.label}</button>
          </div>
        ))}
      </div>
    </h1>
  );
}
