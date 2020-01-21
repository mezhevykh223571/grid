import notifier from 'node-notifier';
import log from 'fancy-log';
import path from 'path';
import * as config from './config';

export const liveEnv = process.argv.indexOf('--live') !== -1;

export const targets = config.targets;
export const project = targets.project;

export function handleError(error) {
  let currentPath = process.cwd();

  notifier.notify({
    icon: path.resolve(currentPath + '/config/assets/error-logo.png'),
    title: 'Gulp error in ' + error.plugin,
    message: error.message,
  });

  log.error(`Error (${error.plugin}: ${error.message}`);

  this.emit('end');
}
