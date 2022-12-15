import {PostCommentModel, PostLikeModel, PostModel} from "../Post/post.model";

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