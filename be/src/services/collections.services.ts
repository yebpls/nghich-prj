import Collection from "~/models/schemas/Collection.schema";
import databaseService from "./database.services";
import { ObjectId } from "mongodb";
import { CollectionStatus } from "~/constants/enum";
import { UpdateCollectionReqBody } from "~/models/requests/Collections.requests";

class CollectionService {
  async addCollection(name: string) {
    const collection_id = new ObjectId();
    const newCollection = new Collection({
      _id: collection_id,
      name,
      status: CollectionStatus.Active,
    });
    await databaseService.collections.insertOne(newCollection);
    console.log(newCollection);

    return newCollection;
  }

  async checkCollectionExisted(name: string) {
    const collection = await databaseService.collections.findOne({ name });
    return Boolean(collection);
  }

  async getAllCollections() {
    const collections = await databaseService.collections.find().toArray();
    return collections;
  }

  async updateCollection(collection_id: string, body: UpdateCollectionReqBody) {
    const collection = await databaseService.collections.findOneAndUpdate(
      { _id: new ObjectId(collection_id) },
      {
        $set: {
          ...body,
        },
        $currentDate: { updated_at: true },
      },
      {
        returnDocument: "after",
      }
    );
    return collection;
  }
}

const collectionsService = new CollectionService();
export default collectionsService;
