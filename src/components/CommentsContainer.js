import React from 'react'

const commentsData = [
  {
    name: "John Doe",
    text: "Great video, really informative!",
    replies: [
      {
        name: "Alice Smith",
        text: "Thanks! Glad you liked it.",
        replies: [
          {
            name: "John Doe",
            text: "Yes, it was very helpful.",
            replies: [
              {
                name: "Alice Smith",
                text: "I'm happy to help!",
                replies: [],
              },
            ],
          },
          {
            name: "Bob Johnson",
            text: "I agree, learned a lot.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Emily Brown",
    text: "I have a question about this topic.",
    replies: [
      {
        name: "John Doe",
        text: "Sure, what's your question?",
        replies: [],
      },
      {
        name: "Alice Smith",
        text: "Ask away!",
        replies: [],
      },
    ],
  },
  {
    name: "Michael Clark",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        name: "Jane Anderson",
        text: "Vivamus tempor nisi id nibh laoreet, vitae sagittis purus consequat.",
        replies: [
          {
            name: "Michael Clark",
            text: "Interesting point!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Sophia Rodriguez",
    text: "This is amazing! I'm sharing it with my friends.",
    replies: [
      {
        name: "David Wilson",
        text: "Glad you liked it!",
        replies: [],
      },
      {
        name: "Olivia Lee",
        text: "Yes, it's really helpful.",
        replies: [],
      },
    ],
  },
  {
    name: "David Wilson",
    text: "Sed aliquam purus eget ultricies lacinia.",
    replies: [
      {
        name: "Sophia Rodriguez",
        text: "Donec tincidunt arcu sit amet eros vehicula, nec consequat nulla vehicula.",
        replies: [
          {
            name: "David Wilson",
            text: "That's correct!",
            replies: [],
          },
        ],
      },
      {
        name: "Michael Clark",
        text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        replies: [],
      },
    ],
  },
  {
    name: "Olivia Lee",
    text: "Nullam dictum velit eu neque consequat feugiat.",
    replies: [
      {
        name: "William White",
        text: "Fusce hendrerit orci at ligula ultricies efficitur.",
        replies: [],
      },
    ],
  },
  {
    name: "William White",
    text: "Etiam quis nulla condimentum, bibendum ex at, pellentesque ligula.",
    replies: [
      {
        name: "Olivia Lee",
        text: "Vivamus auctor magna id orci molestie dictum.",
        replies: [],
      },
    ],
  },
];

  const Comment = ({data}) => {
    const {name, text} = data;
    return(
      <div className='flex items-center mb-3 border-2 px-4 py-2'>
        <div>
            <img alt='user-icon' 
                 src='https://cdn-icons-png.flaticon.com/128/149/149071.png'
                 className='w-12 mr-2'/>
        </div>
        
        <div>
            <p className='text-sm font-semibold'>{name}</p>
            <p className='text-base'>{text}</p>
        </div>
      </div>
    )
  }

  function CommentsList({comments}){
    return(
      comments.map( (comment, index) => (
        <div>
          <Comment data={comment} key={index}/>
           <div className='ml-5 border border-l-black pl-5'>
            {comment.replies.length > 0 && <CommentsList comments={comment.replies} /> }
           </div>
        </div>
      ))
    )
  }

const CommentsContainer = () => {
  return (
    <div className='ml-20 font-semibold text-xl'>
    <h1 className='mb-1'>Comments: </h1>
    <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer