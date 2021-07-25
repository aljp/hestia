import { Message, AssociatedToType } from "../models/Message";

const hour = 60 * 60 * 1000
const now = new Date()

const messages: Message[] = [
  {
    authorId: 1,
    content: 'How does monday sound?',
    sentAt: new Date(now.getTime() - hour),
    associatedToId: 1,
    associatedToType: AssociatedToType.Job
  },
  {
    authorId: 2,
    content: "I'm actually busy on Monday, could you do Tuesday instead. Super keen to get this sorted ASAP, it's a real issue",
    sentAt: now,
    associatedToId: 1,
    associatedToType: AssociatedToType.Job
  }
]

export default messages
