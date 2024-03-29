import React, { FC } from 'react';
import { ComponentAppearance } from '../../button/Button';
import PostCard from '../../postCard/PostCard';
import { Layout } from './BlogCardWrapper.styles';
import { PrismicBlogPost } from '../../../interfaces/prismic';
import { RichText } from 'prismic-reactjs';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface BlogCardWrapper {
  posts: PrismicBlogPost[];
  appearance: ComponentAppearance;
}

const BlogCardWrapper: FC<BlogCardWrapper> = ({ posts, appearance }) => (
  <Layout>
    {posts.map((post: PrismicBlogPost, key: number) => {
      const creationDate: string = format(
        new Date(post.creation_date),
        'dd LLLL yyyy',
        { locale: fr }
      );

      return (
        <PostCard
          key={key}
          appearance={appearance}
          title={RichText.asText(post.title)}
          image={post.cover_image.url}
          author={post.author.data.name}
          date={`, ${creationDate}`}
          slug={post.slug}
        />
      );
    })}
  </Layout>
);

export default BlogCardWrapper;
