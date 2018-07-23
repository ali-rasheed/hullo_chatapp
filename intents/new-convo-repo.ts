import { InMemConvRepo } from "../repo/inmem-convo-repo";
export class NewConversationsRepository{
     create() {
          let convoRepo: InMemConvRepo = new InMemConvRepo();
          return convoRepo;
     }
}