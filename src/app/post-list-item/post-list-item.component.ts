import { Component, OnInit, Input } from '@angular/core';

import { PostService } from '../services/post.service';

import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post : Post;
  @Input() id : number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postService.updatePostLoveIts(+this.id, +1)
  }

  onDontloveIt() {
    this.postService.updatePostLoveIts(+this.id, -1)
  }

  onSuppressPost() {
    this.postService.removePost(this.post);
  }
}
