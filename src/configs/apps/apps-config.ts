import { DockerIgnoreStrategy } from 'aws-cdk-lib';
import { createAppConfig } from '🍎/helpers/create-app-config';

const wallpapers = createAppConfig({
  title: 'Wallpapers',
  resizable: true,

  height: 600,
  width: 800,

  dockBreaksBefore: true,
});

const calculator = createAppConfig({
  title: 'Calculator',

  expandable: true,
  resizable: false,

  height: 300 * 1.414,
  width: 300,
});

const calendar = createAppConfig({
  title: 'Calendar',
  resizable: true,
});

const vscode = createAppConfig({
  title: 'VSCode',
  resizable: true,

  height: 600,
  width: 800,
});

const finder = createAppConfig({
  title: 'Finder',
  resizable: true,

  // dockBreaksBefore: true,
  shouldOpenWindow: false,
});

const safari = createAppConfig({
  title: 'Safari',
  resizable: true,
});

const systemPreferences = createAppConfig({
  title: 'System Preferences',
  resizable: true,
});

const launchDapp = createAppConfig({
  title: `Launch dApp`,
  resizable: true,

  dockBreaksBefore: true,

  height: 600,
  width: 800,

});

const viewSource = createAppConfig({
  title: `View Source`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://github.com/yeti-ink', '_blank'),
});
/** 
const docs = createAppConfig({
  title: `Docs`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://docs.yeti.ink', '_blank'),
});
*/
const liquidity = createAppConfig({
  title: `Liquidity`,
  resizable: true,

  //shouldOpenWindow: false,
  //externalAction: () => window.open('https://liquidity.yeti.ink', '_blank'),

  dockBreaksBefore: true,
});

const farms = createAppConfig({
  title: `Farms`,
  resizable: true,

  //shouldOpenWindow: false,
  //externalAction: () =>
  //  window.open('https://farm.yeti.ink', '_blank'),

  dockBreaksBefore: true,
});

const appstore = createAppConfig({
  title: 'Stake BTC',
  resizable: true,
});

export const appsConfig = {
  'launch-dapp': launchDapp,
  appstore,
  farms,
  liquidity,
  //finder,
  //'Docs': docs,
  'view-source': viewSource,
  vscode,
  wallpapers,
  //calculator,
  calendar,
  //safari,
  // 'system-preferences': systemPreferences,
};
