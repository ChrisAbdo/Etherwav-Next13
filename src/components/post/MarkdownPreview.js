import { MediaRenderer } from '@thirdweb-dev/react';
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownPreview({ content }) {
  return (
    <div>
      <ReactMarkdown
        components={{
          h1: (props) => <h1 {...props} className={styles.blogH1} />,
          h2: (props) => <h1 {...props} className={styles.blogH2} />,
          h3: (props) => <h1 {...props} className={styles.blogH3} />,
          h4: (props) => <h1 {...props} className={styles.blogH4} />,
          h5: (props) => <h1 {...props} className={styles.blogH5} />,
          h6: (props) => <h1 {...props} className={styles.blogH6} />,

          p: (props) => {
            const { node } = props;

            if (node.children[0].tagName === 'img') {
              try {
                const image = node.children[0];

                const { alt, src } = image.properties;

                return <MediaRenderer src={src} alt={alt} width="100%" />;
              } catch (error) {
                console.error('Error:', error);
                return <></>;
              }
            }

            return (
              <p
                {...props}
                style={{
                  fontSize: '1.25rem',
                  marginBottom: '1.25em',
                  marginTop: '1.25em',
                }}
              ></p>
            );
          },
          ul: (props) => (
            <ul
              {...props}
              style={{
                marginBottom: '1.25em',
                marginTop: '1.25em',
                fontSize: '1.25rem',
                listStyle: 'disc',
                paddingLeft: '2em',
              }}
            ></ul>
          ),
          ol: (props) => (
            <ol
              {...props}
              style={{
                ...theme.typography.body1,
                marginBottom: '1.25em',
                fontSize: '1.25rem',
                marginTop: '1.25em',
                listStyle: 'decimal',
                paddingLeft: '2em',
              }}
            ></ol>
          ),

          a: (props) => (
            <a
              target="_blank"
              rel="noreferrer"
              {...props}
              style={{
                ...theme.typography.body1,
                color: theme.palette.primary.main,
                textDecoration: 'underline',
                fontSize: '1.25rem',
              }}
            />
          ),

          // Re-style code blocks
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '') ?? 'text';
            return !inline && match ? (
              <div></div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
