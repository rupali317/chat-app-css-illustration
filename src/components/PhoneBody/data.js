import * as ChatType from "../../constants/ChatType";

export const chats = [
  {
    id: 1,
    type: ChatType.TEXT,
    source: ChatType.RECEIVER,
    content: {
      message: "That sounds great. I’d be happy with that.",
    },
  },
  {
    id: 2,
    type: ChatType.TEXT,
    source: ChatType.RECEIVER,
    content: {
      message: "Could you send over some pictures of your dog, please?",
    },
  },
  {
    id: 3,
    type: ChatType.IMAGE,
    source: ChatType.SENDER,
    content: {
      message: [
        {
          id: 1,
          src: "/images/dog-image-1.jpg",
          name: "Dog 1",
        },
        {
          id: 2,
          src: "/images/dog-image-2.jpg",
          name: "Dog 2",
        },
        {
          id: 3,
          src: "/images/dog-image-3.jpg",
          name: "Dog 3",
        },
      ],
    },
  },
  {
    id: 4,
    type: ChatType.TEXT,
    source: ChatType.SENDER,
    content: {
      message: "Here are a few pictures. She’s a happy girl!",
    },
  },
  {
    id: 5,
    type: ChatType.TEXT,
    source: ChatType.SENDER,
    content: {
      message: "Can you make it?",
    },
  },
  {
    id: 6,
    type: ChatType.TEXT,
    source: ChatType.RECEIVER,
    content: {
      message:
        "She looks so happy! The time we discussed works. How long shall I take her out for?",
    },
  },
  {
    id: 7,
    type: ChatType.COST,
    source: ChatType.SENDER,
    content: {
      message: "30 minute walk",
      price: 29,
      currency: "$",
    },
  },
  {
    id: 8,
    type: ChatType.COST,
    source: ChatType.SENDER,
    content: {
      message: "1 hour walk",
      price: 49,
      currency: "$",
    },
  },
];
