import {UserModel} from "../User/user.model";
import {PostCommentModel} from "../PostComment/postComment.model";

export interface PostLikeModel {
    id: number;
    userId: number;
    postId: number;
    user: UserModel;
    post: PostModel;
}

export interface PostAttachmentModel {
    id: number;
    postId: number;
    post: PostModel;
    type: DocumentType;
    s3Key: string;
}

export interface PostModel {
    id: number;
    htmlContent: string;
    userId: number;
    postLikes?: PostLikeModel[];
    postComments?: PostCommentModel[];
    user: UserModel[];
    postAttachments?: PostAttachmentModel[]
}