import { MongoClient, ServerApiVersion, Db, Collection } from "mongodb";
import User from "~/models/schemas/User.schema";
import RefreshToken from "~/models/schemas/RefreshToken.schema";
import Product from "~/models/schemas/Product.chema";
import Collections from "~/models/schemas/Collection.schema";
import Material from "~/models/schemas/Material.schema";
import { envConfig } from "~/constants/config";
import { Order } from "~/models/schemas/Order.schema";

const uri = `mongodb+srv://${envConfig.dbUsername}:${envConfig.dbPassword}@nghich.wlx2lor.mongodb.net/?retryWrites=true&w=majority&appName=nghich`;
// const uri = `mongodb+srv://sontt:Son123456@nghich.wlx2lor.mongodb.net/?retryWrites=true&w=majority&appName=nghich`;

class DatabaseService {
  private client: MongoClient;
  private db: Db;
  constructor() {
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    this.db = this.client.db(envConfig.dbName);
  }

  async connect() {
    try {
      await this.db.command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } catch (error) {
      // await this.client.close();
      console.log(error);
    }
  }

  async indexProducts() {
    this.products.createIndex({ collection_id: 1 });
  }

  get users(): Collection<User> {
    return this.db.collection("users");
  }

  get refreshTokens(): Collection<RefreshToken> {
    return this.db.collection("refreshTokens");
  }

  get products(): Collection<Product> {
    return this.db.collection("products");
  }

  get collections(): Collection<Collections> {
    return this.db.collection("collections");
  }

  get materials(): Collection<Material> {
    return this.db.collection("materials");
  }

  get orders(): Collection<Order> {
    return this.db.collection("orders");
  }
}

const databaseService = new DatabaseService();
export default databaseService;
