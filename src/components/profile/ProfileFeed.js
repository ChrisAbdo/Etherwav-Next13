import React from 'react';
import { PublicationsQuery } from '../../graphql/generated';
import ProfileFeedItem from './ProfileFeedItem';

export default function ProfileFeed({ posts }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
      {' '}
      {posts?.publications?.items?.map((post) => (
        <ProfileFeedItem post={post} key={post.id} />
      ))}
    </div>
  );
}
