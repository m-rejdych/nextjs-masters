import { builder } from './builder';
import './models/Product';
import './models/Image';
import './models/Category';
import './models/Collection';
import './models/Review';
import './models/Color';
import './models/Size';
import './models/Detail';

export const schema = builder.toSchema();
