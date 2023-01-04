import {UserModel} from "../User/user.model";
import {PostModel} from "../Post/post.model";

export interface PostLikeModel {
    id: number;
    userId: number;
    postId: number;
    user: UserModel;
    post: PostModel;
}
