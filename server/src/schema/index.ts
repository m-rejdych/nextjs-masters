import { builder } from './builder';
import './models/Product';
import './models/ProductImage';
import './models/Category';
import './models/CategoryImage';
import './models/Collection';
import './models/CollectionImage';
import './models/Review';
import './models/Color';
import './models/Size';
import './models/Detail';

export const schema = builder.toSchema();
