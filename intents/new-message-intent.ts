import { InMemConvoRepository } from "../repo/in-mem-convo-repository";
import { Message } from "../entities/Message";

export class newMessageIntent{
     add(name: string, msg: Message, obj: InMemConvoRepository):Message{
          return obj.addMessage(name,msg);
     }
}