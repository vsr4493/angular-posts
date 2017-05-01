let posts = {
  bindings: {},
  templateUrl: require('./posts.html'),
  controllerAs: "vm",
  controller: class appCtrl {
    constructor($scope, $state, appService, getPosts) {
    	this.posts = getPosts.all();
    	//Binding event listeners for comment operations
    	$scope.$on("EDIT_COMMENT",(event,postId,commentId,commentContent) => {
    		//TODO: API CALL
            var postIndex = getIndexByProperty(this.posts,"id",postId);
            if(postIndex!=-1){
                var post = this.posts[postIndex];
                var updatedPosts = this.posts.slice(0);
                updatedPosts[postIndex] = this.getPostWithUpdatedComment(post,commentId,commentContent); 
                this.posts = updatedPosts;
            }
    	});
    	$scope.$on("DELETE_COMMENT",(event, postId, commentId) =>{
            //TODO: API CALL : getPosts.deleteComment(postId,commentId); //DOES NOTHING SINCE NO API IS THERE
            var postIndex = getIndexByProperty(this.posts,"id",postId);
            if(postIndex!=-1){
    		  var post = this.posts[postIndex];
              var updatedPosts = this.posts.slice(0);
              updatedPosts[postIndex] = this.getPostWithRemovedComment(post,commentId);
              this.posts = updatedPosts;
            }
    	});
    	$scope.$on("ADD_COMMENT",(event,postId,commentContent) => {
            //TODO: Api Call
            var postIndex = getIndexByProperty(this.posts,"id",postId);
            if(postIndex!=-1){
                var post = this.posts[postIndex];
                var updatedPosts = this.posts.slice(0);
                updatedPosts[postIndex] = this.getPostWithNewComment(post,commentContent);
                this.posts = updatedPosts; 
            }
    	});
    }
    // (Object,String):Object
    getPostWithNewComment(post,commentContent){
        var newPost = Object.assign({},post);
        newPost.comments.push(getNewComment(post,commentContent));
        return newPost;

        /*Generate new comment*/
        function getNewComment(post, commentContent){
            var nextId = post.comments.length; 
            return new MockComment(nextId,"LoggedInUser",commentContent);
        }
        function MockComment(id, author, content){
            this.id  = id;
            this.author = author;
            this.content = content;
        }
    }
    //(Object,Int):Object
    getPostWithRemovedComment(post,commentId){
        var newPost = Object.assign({},post);
        var commentIndex = getIndexByProperty(post.comments,"id",commentId);
        safeRemove(commentIndex,newPost.comments);
        return newPost;
    }
    // (Object,Int,String):Object
    getPostWithUpdatedComment(post,commentId,commentContent){
        var newPost = Object.assign({},post);
        var commentIndex = getIndexByProperty(post.comments,"id",commentId);
        if(commentIndex!=-1){
            newPost.comments[commentIndex] = Object.assign(newPost.comments[commentIndex],{content:commentContent,isBeingEdited:false})
        }
        return newPost;   
    }
  }
}


//Remove from array if index is valid
function safeRemove(index,arr){
    index>=0 && arr.splice(index,1);
}
/*Comment Generator -- Only for demo -- Ideally, the api will be used to add the comment, and a similar format will be maintained*/
function getIndexByProperty(arr,propertyName, propertyValue){
    if(angular.isDefined(arr) && arr.length>0){
        for(let i = 0; i<arr.length;i++){
            if(arr[i][propertyName] === propertyValue){
                return i;
            }
        }
    }
    return -1;
}

posts.$inject = ['$scope', '$state', 'appService','getPosts']; // Injecting services/state/scope
export default posts;