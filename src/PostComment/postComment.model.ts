import {UserModel} from "../User/user.model";
import {PostModel} from "../Post/post.model";

export interface PostCommentModel {
    id: number;
    userId: number;
    postId: number;
    htmlContent: string;
    user: UserModel;
    post: PostModel;
}