let getPosts = function ($resource) {
  /*Dummy format 2 - Normalized format: */
  /*const posts = {
    1 : {
        id: 1,
        title :"Click me not plants",
        content : "Lorem Ipsum",
        author: "Vorcan",
        comments: {
          1: {
            id: 1,
            author: "Vsr",
            content: "blah blah blah"
          },
          2: {
            id: 2,
            author: "Vsr",
            content: "blah blah blah"
          }
        }
      },
    2 : {
      id: 1,
      title :"Click me not plants",
      content : "Lorem Ipsum",
      author: "Vorcan",
      comments: {
        1: {
          id: 1,
          author: "Vsr",
          content: "blah blah blah"
        },
        2: {
          id: 2,
          author: "Vsr",
          content: "blah blah blah"
        }
      }
    }
  }*/

  /*Array based data*/
  const posts = [
  {
  	id: 1,
  	title :"Sample Post 1",
  	content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Vorcan",
    comments: [
      {
        id: 1,
        author: "Vsr",
        content: "This lorem ipsum seems like a lot of text with no meaning at all!"
      },
      {
        id: 2,
        author: "Vsr",
        content: "Yep, I was right. There's absolutely no meaning here."
      }
    ]
  },
  {
  	id: 2,
  	title :"Sample Post 2",
  	content : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    author: "Vorcan",
    comments: [
      {
        id: 1,
        author: "Vsr",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
      },
      {
        id: 2,
        author: "Vsr",
        content: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
      }
    ]
  }
  ];
  let all = () => {
  	return posts;
  };
  let editComment = (postId, commentId, updatedComment) => {
    console.log("Updated comment ("+commentId+") from post: ("+postId+") to ("+updatedComment+")");
  };
  let deleteComment = (postId, commentId) => {
    console.log("Deleting comment ("+commentId+ ") from post ("+ postId+")");
  };
  return { all , deleteComment, editComment};
};

export default getPosts;
