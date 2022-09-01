import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comments } from '../../types/Comments';

type Props = {
  comments: Comments[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment) => (
      <CommentInfo comments={comment} key={comment.id} />
    ))}
  </div>
);
