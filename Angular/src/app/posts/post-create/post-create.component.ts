import {Component} from '@angular/core';
@Component ({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html' 
})
export class PostCreateComponent{
  enteredValue = '';
  newpost = 'No content';
  onAddPost(postInput: HTMLTextAreaElement){
    this.newpost =  postInput.value;
  }
}