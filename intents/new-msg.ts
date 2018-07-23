import { InMemConvRepo } from "../repo/inmem-convo-repo";
import { Message } from "../entities/Message";

export class newMessage{
     add(name: string, msg: Message, obj: InMemConvRepo):Message{
          return obj.addMessage(name,msg);
          
     }
}