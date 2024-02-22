import { builder } from './builder';
import './models/Product';
import './models/Image';
import './models/Category';
import './models/Collection';
import './models/Review';

export const schema = builder.toSchema();
