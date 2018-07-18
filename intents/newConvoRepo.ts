import { InMemConvRepo } from "../repo/inmem-convo-repo";
export class NewConversationsRepository{
     main() {
          let convoRepo: InMemConvRepo = new InMemConvRepo();
          return convoRepo;
     }
}