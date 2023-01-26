import {UserModel} from "../User/user.model";
import {PostCommentModel} from "../PostComment/postComment.model";
import {PostLikeModel} from "../PostLikes/postLikes.model";

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
