import React from "react";
import { ProjectComment } from "../../types/project.types";
import { Send } from "lucide-react";

interface CommentProps {
    comment: ProjectComment;
    depth?: number;
    onReply: (parentId: string | null) => void;
    replyingTo: string | null;
    replyForm?: { content: string };
    onReplyFormChange?: (key: string, value: string) => void;
    onReplySubmit?: (e: React.FormEvent, parentId: string | null) => void;
    submittingReply?: boolean;
}

const Comment: React.FC<CommentProps> = ({
    comment,
    depth = 0,
    onReply,
    replyingTo,
    replyForm,
    onReplyFormChange,
    onReplySubmit,
    submittingReply,
}) => {
    const isMaxDepth = depth >= 3;

    const formatDate = (date?: string) => {
        if (!date) return "";
        const d = new Date(date);
        return d.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <div className={`relative ${depth > 0 ? "ml-8" : ""}`}>
            <div className="flex gap-4 group">
                {/* Thread Line for replies - visual connector */}
                {depth > 0 && (
                    <div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
                )}

                {/* Avatar */}
                <div className="flex-shrink-0 relative z-10">
                    <div className="w-10 h-10 rounded-full  overflow-hidden border border-gray-100 dark:border-gray-700 flex items-center justify-center text-white font-bold shadow-sm">
                        {comment.Author?.ProfileImage ? (
                            <img src={comment.Author.ProfileImage} alt="" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-sm text-black">
                                {comment.Author?.Name?.charAt(0).toUpperCase() || 'U'}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex-1 pb-4">
                    {/* Header & Content */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-[#1A1A1A] text-sm">
                                {comment.Author?.Name || 'Anonymous'}
                            </span>
                            <span className="text-xs text-gray-400">
                                {formatDate(comment.CreatedAt)}
                            </span>
                        </div>

                        <div className="text-sm text-gray-600  leading-relaxed mb-2">
                            {comment.Comment}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            {!isMaxDepth && (
                                <button
                                    type="button"
                                    onClick={() => onReply(comment.Id)}
                                    className="text-xs font-medium text-gray-400 hover:text-blue-500 transition-colors"
                                >
                                    Reply
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Reply Form */}
                    {replyingTo === comment.Id && !isMaxDepth && (
                        <div className="mt-4">
                            <form onSubmit={(e) => onReplySubmit?.(e, comment.Id)} className="relative flex gap-3 items-start">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0" />
                                <div className="flex-1 relative">
                                    <textarea
                                        rows={2}
                                        value={replyForm?.content || ""}
                                        onChange={(e) => onReplyFormChange?.("content", e.target.value)}
                                        placeholder="Add a reply..."
                                        className="w-full pl-4 pr-12 py-3 bg-white border-2 border-gray-100 dark:border-gray-700 rounded-xl focus:border-blue-100 focus:ring-0 text-sm resize-none transition-all placeholder:text-gray-400"
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        disabled={submittingReply || !replyForm?.content?.trim()}
                                        className="absolute bottom-3 right-3 p-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        <Send size={14} />
                                    </button>
                                </div>
                            </form>
                            <div className="flex justify-end mt-2">
                                <button
                                    onClick={() => onReply(null)}
                                    className="text-xs text-gray-400 hover:text-gray-600"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Child replies */}
            {comment.Replies && comment.Replies.length > 0 && (
                <div className="mt-2 relative">
                    {/* Vertical line connecting children */}
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 -z-10" />
                    {comment.Replies.map((reply) => (
                        <Comment
                            key={reply.Id}
                            comment={reply}
                            depth={depth + 1}
                            onReply={onReply}
                            replyingTo={replyingTo}
                            replyForm={replyForm}
                            onReplyFormChange={onReplyFormChange}
                            onReplySubmit={onReplySubmit}
                            submittingReply={submittingReply}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Comment;
