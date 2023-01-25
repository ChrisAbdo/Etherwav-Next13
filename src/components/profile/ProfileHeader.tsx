import { MediaRenderer } from '@thirdweb-dev/react';
import Image from 'next/image';
import React from 'react';
import { ProfileQuery } from '../../graphql/generated';

export default function ProfileHeader({ profile }) {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden bg-cover bg-top undefined">
      <div className="card w-96 bg-black border border-[#2a2a2a] rounded mt-6">
        <figure>
          <MediaRenderer // @ts-ignore: Type does exist.
            src={
              // @ts-ignore: Type does exist.
              profile.profile?.coverPicture?.original?.url || defaultCoverPhoto
            }
            alt="Profile cover picture"
            className="float-top w-full h-full object-cover"
          />{' '}
        </figure>
        <div className="card-body">
          <figure className="absolute object-cover top-0">
            <div className="avatar ">
              <div className="w-24 mask mask-hexagon-2">
                <MediaRenderer
                  src={
                    // @ts-ignore: Type does exist.
                    profile.profile?.picture?.original?.url
                  }
                  alt="Profile picture"
                  className="w-32 h-32 "
                />{' '}
              </div>
            </div>
          </figure>{' '}
          <div className="flex justify-between">
            <h1 className="text-xl">{profile.profile?.name}</h1>{' '}
            <h1 className="text-xl">@{profile.profile?.handle}</h1>
          </div>
          <h1>{profile.profile?.bio}</h1>
          <div className="flex justify-between mt-2">
            <span className="badge">
              <b>{profile.profile?.stats.totalFollowers}&nbsp;</b> Followers
            </span>
            <span className="badge">
              <b>{profile.profile?.stats.totalFollowing}&nbsp;</b> Following
            </span>
            <span className="badge">
              <b>{profile.profile?.stats.totalPosts}&nbsp;</b> Posts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
