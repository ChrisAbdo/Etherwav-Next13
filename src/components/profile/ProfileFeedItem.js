import { MediaRenderer } from '@thirdweb-dev/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PublicationsQuery } from '../../graphql/generated';
import { getFormattedDate } from '../../lib/helper/dates';
import { formatNum, getPreviewText } from '../../lib/helper/format';

export default function ProfileFeedItem({ post }) {
  return (
    // <Link href={`/post/${post.id}`}>
    <div className="card card3 bg-base-100 shadow-xl border border-white cursor-pointer">
      <figure>
        <MediaRenderer
          src={
            post?.metadata?.image ||
            post?.metadata?.media?.[0]?.original?.url ||
            // @ts-ignore: Type does exist.
            post?.profile?.coverPicture?.original?.url ||
            // @ts-ignore: Type does exist.
            post?.profile?.picture?.original?.url ||
            ''
          }
          alt={post?.metadata?.name || 'Loading...'}
        />
      </figure>
      <div className="card-body">
        <h1>{post?.metadata?.name}</h1>
        <h1>{getPreviewText(post?.metadata?.content)}</h1>

        <div className="flex justify-between">
          <span className="badge p-3">
            {formatNum(post?.stats?.totalAmountOfComments)}{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </span>

          <span className="badge p-3">
            {formatNum(post?.stats?.totalAmountOfMirrors)}{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
          </span>
          <span className="badge p-3">
            {formatNum(post?.stats?.totalAmountOfCollects)}{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <h1>{getFormattedDate(post.createdAt) || 'Loading...'}</h1>
      </div>
    </div>
    // </Link>
  );
}
