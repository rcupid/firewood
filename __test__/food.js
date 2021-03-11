import { platform } from 'yike-utils';

const getConfig = () => {
  let plat = 'yikeWAP';
  let zpID = 'PYK-YK';

  if (platform.isInApp) {
    if (platform.isInZybApp) {
      plat = 'zybAPP';
    } else if (platform.isInYikeApp) {
      plat = 'yikeAPP';
    }
  }
  const config = {
    plat: plat,
    zpID: zpID,
    debug: true,
    env: process.env.NODE_ENV === 'production' ? 'production' : 'development'
  }
  return config;
}
export default getConfig;


https://www.zuoyebang.com/static/hy/yike-sell-app-vue/outapp-payment.html?courseinfo=[{%22courseId%22:2188374,%22couponId%22:0}]