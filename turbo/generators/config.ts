import type { PlopTypes } from '@turbo/gen';

import { componentGenerator } from './config/component-generator';
import { appGenerator } from './config/app-generator';
import { packageGenerator } from './config/package-generator';
import { reduxGenerator } from './config/redux-generator';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  componentGenerator(plop);

  appGenerator(plop);

  packageGenerator(plop);

  reduxGenerator(plop);
}
