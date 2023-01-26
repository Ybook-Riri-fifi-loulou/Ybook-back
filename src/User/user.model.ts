import { PostModel} from "../Post/post.model";
import {PostLikeModel} from "../PostLikes/postLikes.model";
import {PostCommentModel} from "../PostComment/postComment.model";

export interface UserModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatarS3Key?: string;
    coverPicS3Key?: string;
    posts: PostModel[];
    postLikes: PostLikeModel[];
    postComments: PostCommentModel[];

}