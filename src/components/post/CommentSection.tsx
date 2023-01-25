import React from 'react';
import { usePublicationsQuery } from '../../graphql/generated';

type Props = {
  publicationId: string;
};

export default function CommentSection({ publicationId }: Props) {
  const { data: comments, isLoading: loadingComments } = usePublicationsQuery({
    request: {
      // Load all comments for this publication
      commentsOf: publicationId,
      limit: 50,
    },
  });

  console.log('comments:', comments);

  return (
    <div>
      <h1>Comments</h1>

      <div>
        {loadingComments ? (
          <h1>Loading comments...</h1>
        ) : (
          comments?.publications.items.map((comment) => (
            <div key={comment.id}>
              {/* @ts-ignore TODO: Type is wrong here. */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
