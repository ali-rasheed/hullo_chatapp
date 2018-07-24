import { InMemConvoRepository } from "../repo/in-mem-convo-repository";

export class AllConversationsIntent {
     get(obj: InMemConvoRepository) {
          obj.convos;
          return obj.convos;  
     }
}