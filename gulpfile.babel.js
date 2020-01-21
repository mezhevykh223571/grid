'use strict';

import styles from './config/tasks/styles';
import clean from './config/tasks/clean';
import watch from './config/tasks/watch';
import build from './config/tasks/build';

exports.styles = styles();
exports.clean = clean();
exports.watch = watch();
exports.default = build();
