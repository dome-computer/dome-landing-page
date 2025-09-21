import { MongoClient } from "mongodb";
import { MONGO_FIRESTORE_URL } from '../constants';

export const mfirestore_client = new MongoClient(MONGO_FIRESTORE_URL);
export const mfirestore_db = mfirestore_client.db();

