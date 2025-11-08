import React from "react";

interface CommentData {
  Id: string;
  PostId?: string;
  ParentId?: string | null;
  AuthorName: string;
  AuthorEmail?: string | null;
  Content: string;
  LikesCount?: number;
  CreatedAt?: string;
  Replies?: CommentData[];
}

interface CommentProps {
  comment: CommentData;
  depth?: number;
  onReply: (parentId: string | null) => void;
  onLike: (commentId: string) => void;
  replyingTo: string | null;
  replyForm?: { content: string };
  onReplyFormChange?: (key: string, value: string) => void;
  onReplySubmit?: (e: React.FormEvent, parentId: string | null) => void;
  submittingReply?: boolean;
  likedComments: Set<string>;
}

const Comment: React.FC<CommentProps> = ({
  comment,
  depth = 0,
  onReply,
  onLike,
  replyingTo,
  replyForm,
  onReplyFormChange,
  onReplySubmit,
  submittingReply,
  likedComments,
}) => {
  const isMaxDepth = depth >= 3;

  const formatDate = (date?: string) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div
      className={`relative ${depth > 0 ? "ml-4 pl-4 border-l border-gray-700" : ""}`}
    >
      {/* Comment */}
      <div className="py-3">
        <div className="flex items-start justify-between">
          <div className="flex gap-2">
            <h5 className="font-medium text-white text-sm">
              {comment.AuthorName}
            </h5>
            <p className="text-xs text-gray-500">{formatDate(comment.CreatedAt)}</p>
          </div>
        </div>

        <p className="text-gray-300 text-sm mt-2 whitespace-pre-wrap">
          {comment.Content}
        </p>

        {/* Actions */}
        <div className="flex items-center mt-2 space-x-3 text-xs text-gray-400">
          <button
            type="button"
            onClick={() => onLike(comment.Id)}
            className={`flex items-center space-x-1 hover:text-red-400 transition ${
              likedComments.has(comment.Id) ? "text-red-500" : ""
            }`}
          >
            <svg
              className="w-4 h-4"
              fill={likedComments.has(comment.Id) ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{comment.LikesCount || 0}</span>
          </button>

          {!isMaxDepth && (
            <button
              type="button"
              onClick={() => onReply(comment.Id)}
              className="hover:text-blue-400"
            >
              Reply
            </button>
          )}
        </div>
      </div>

      {/* Reply form */}
      {replyingTo === comment.Id && !isMaxDepth && (
        <form
          onSubmit={(e) => onReplySubmit?.(e, comment.Id)}
          className="mt-3 ml-6 border-l border-gray-700 pl-4"
        >
          <textarea
            rows={3}
            value={replyForm?.content || ""}
            onChange={(e) => onReplyFormChange?.("content", e.target.value)}
            placeholder="Write your reply..."
            className="w-full px-3 py-2 bg-gray-800/20 border border-gray-600 rounded-md 
                       text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="flex items-center mt-2 space-x-2">
            <button
              type="submit"
              disabled={submittingReply}
              className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-xs hover:bg-blue-700"
            >
              {submittingReply ? "Posting..." : "Reply"}
            </button>
            <button
              type="button"
              onClick={() => onReply(null)}
              className="px-3 py-1.5 bg-gray-700 text-white rounded-md text-xs hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Child replies */}
      {comment.Replies && comment.Replies.length > 0 && (
        <div className="ml-4 border-l border-gray-800 pl-4 space-y-2">
          {comment.Replies.map((reply) => (
            <Comment
              key={reply.Id}
              comment={reply}
              depth={depth + 1}
              onReply={onReply}
              onLike={onLike}
              replyingTo={replyingTo}
              replyForm={replyForm}
              onReplyFormChange={onReplyFormChange}
              onReplySubmit={onReplySubmit}
              submittingReply={submittingReply}
              likedComments={likedComments}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
