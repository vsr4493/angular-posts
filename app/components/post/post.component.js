let post = {
  bindings: {
  	postData : "<"
  },
  templateUrl: require('./post.html'),
  controllerAs: "vm",
  controller: class appCtrl {
    constructor($scope, $state, appService, getPosts) {
      this.$scope = $scope;
      this.commentUpdates = new Object();
    }
    $onInit(){
    	//Do Init actions here
      this.post = this.postData;
    }
    $onChanges(){
      //Handle changes to one way bindings
    }
    addCommentMode(state){
      this.addingNewComment = !!state;
    }
    commentBeingEdited(commentId,state,commentData){
      this.commentUpdates[commentId] = this.commentUpdates[commentId] || {};
      this.commentUpdates[commentId]["data"] = null;
      if(!!state == true){
        this.commentUpdates[commentId]["data"] = commentData;
      }
      this.commentUpdates[commentId]["isBeingEdited"] = !!state;
    }
    addNewComment(){
      //Emit event to add new comment to this post
      this.$scope.$emit("ADD_COMMENT",this.post.id, this.newComment);
      this.newComment = "";
      this.addingNewComment = false;
    }
    deleteComment(commentId){
      //Emit event to submit delete event to Post
      this.$scope.$emit('DELETE_COMMENT', this.post.id, commentId);
    }
    updateComment(commentId){
      //Emit event to submit changes to Post
      this.$scope.$emit('EDIT_COMMENT', this.post.id, commentId, this.commentUpdates[commentId]["data"]);
      this.commentBeingEdited(commentId,false);
    }
  }
}

post.$inject = ['$scope', '$state', 'appService']; // Injecting services/state/scope
export default post;