import { Contact } from "../entities/contact";
import { InMemConvRepo } from "../repo/inmem-convo-repo";

export class GetAllNames{
    main(obj :InMemConvRepo): Array<string>{
     return obj.getNames();}
}