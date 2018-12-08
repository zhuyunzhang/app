/**
 * xgRequest.js
 */

import XgHttp from "./xgHttp";

export default {
  todayOnHistory: urlPar => XgHttp("GET", "/japi/toh", { urlParams: urlPar })
};
