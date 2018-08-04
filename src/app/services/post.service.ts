import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

import * as firebase from 'firebase';
import { DataSnapshot } from 'firebase/database';

@Injectable()

export class PostService {
  posts : Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on(
      'value',
      (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
  }

  updatePostLoveIts(id: number, increment: number) {
    this.posts[id].loveIts += increment;
    this.savePosts();
    this.emitPosts();
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndex = this.posts.findIndex(
      (postSearch) => { if (postSearch === post) {return true;}}
    );
    this.posts.splice(postIndex,1);
    this.savePosts();
    this.emitPosts();
  }

  constructor() {
    this.getPosts();
  }
}
