const PANDA_MATCH_URL = 'https://panda.ecs.kyoto-u.ac.jp/portal/site/*';
const PANDA_ALARM_NAME = 'PANDA_ALARM_NAME';
const PANDA_ALARM_CREATE_INFO = {'periodInMinutes': 15};

chrome.alarms.create(PANDA_ALARM_NAME, PANDA_ALARM_CREATE_INFO);

chrome.alarms.onAlarm.addListener((alarm)=>{
  if (alarm.name !== PANDA_ALARM_NAME) return;
  chrome.tabs.query({url: PANDA_MATCH_URL}).then(tabs => {
    if (!tabs.length) return;
    chrome.tabs.reload(tabs[0].id);
  });
});
