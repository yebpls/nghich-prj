import { MongoClient, ServerApiVersion, Db, Collection } from "mongodb";
import { config } from "dotenv";
import User from "~/models/schemas/User.schema";
import RefreshToken from "~/models/schemas/RefreshToken.schema";
config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@twitter.31fkklt.mongodb.net/?retryWrites=true&w=majority&appName=Twitter`;

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
    this.db = this.client.db(process.env.DB_NAME);
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

  get users(): Collection<User> {
    return this.db.collection("users");
  }

  get refreshTokens(): Collection<RefreshToken> {
    return this.db.collection("refreshTokens");
  }
}

const databaseService = new DatabaseService();
export default databaseService;
