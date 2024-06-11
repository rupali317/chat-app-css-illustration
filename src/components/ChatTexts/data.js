import * as ChatType from "../../constants/ChatType";

[
  {
    id: 1,
    type: ChatType.RECEIVER,
    content: {
      message: "That sounds great. I’d be happy with that.",
    },
  },
  {
    id: 2,
    type: ChatType.RECEIVER,
    content: {
      message: "Could you send over some pictures of your dog, please?",
    },
  },
  {
    id: 3,
    type: ChatType.SENDER,
    content: {
      message: "Here are a few pictures. She’s a happy girl!",
    },
  },
  {
    id: 4,
    type: ChatType.SENDER,
    content: {
      message: "Can you make it?",
    },
  },
  {
    id: 5,
    type: ChatType.RECEIVER,
    content: {
      message:
        "She looks so happy! The time we discussed works. How long shall I take her out for?",
    },
  },
  {
    id: 6,
    type: ChatType.COST,
    content: {
      message: "30 minute walk",
      price: 29,
    },
  },
  {
    id: 7,
    type: ChatType.COST,
    content: {
      message: "1 hour walk",
      price: 49,
    },
  },
];
