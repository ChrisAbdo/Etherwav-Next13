import React from 'react';
import { PublicationQuery } from '../../graphql/generated';
import MarkdownPreview from './MarkdownPreview';
import PostHeader from './PostHeader';
import PostSidebar from './PostSidebar';
import CommentSection from './CommentSection';

type Props = {
  publication: PublicationQuery;
};

export default function PostView({ publication }: Props) {
  return (
    <div>
      <PostHeader publication={publication} />
      <div>
        <MarkdownPreview
          content={publication?.publication?.metadata?.content ?? ''}
        />
      </div>

      <CommentSection publicationId={publication?.publication?.id ?? ''} />
    </div>
  );
}
