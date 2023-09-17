import type { PlopTypes } from '@turbo/gen';

import { componentGenerator } from './config/component-generator';
import { appGenerator } from './config/app-generator';
import { packageGenerator } from './config/package-generator';
import { reduxGenerator } from './config/redux-generator';
import { methodGenerator } from './config/method-generator';
import { interfaceGenerator } from './config/interface-generator';
import { enumGenerator } from './config/enum-generator';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  componentGenerator(plop);

  appGenerator(plop);

  packageGenerator(plop);

  reduxGenerator(plop);

  methodGenerator(plop);

  interfaceGenerator(plop);

  enumGenerator(plop);
}
