import { InMemConvRepo } from "../repo/inmem-convo-repo";

export class GetAllConversations{
     main(obj : InMemConvRepo){
          return obj.inMemConvo;
     }

}