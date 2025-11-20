export type TabData = {
  date: string
  items: Array<{
    time: string
    country: string
    event: string
  }>
}

export const tabsData: Record<string, TabData> = {
  Yesterday: {
    date: '27 March 2025',
    items: [
      { time: '12:00', country: 'JPN', event: 'BoJ Monetary Policy Meeting Minutes' },
      { time: '14:30', country: 'USA', event: 'CPI Release' },
      { time: '16:00', country: 'EUR', event: 'ECB Press Conference' },
    ],
  },
  Today: {
    date: '28 March 2025',
    items: [
      { time: '12:00', country: 'JPN', event: 'BoJ Monetary Policy Meeting Minutes' },
      { time: '12:00', country: 'JPN', event: 'BoJ Policy Statement' },
      { time: '12:00', country: 'JPN', event: 'BoJ Governor Speech' },
    ],
  },
  Tomorrow: {
    date: '29 March 2025',
    items: [
      { time: '09:00', country: 'CHN', event: 'Industrial Production' },
      { time: '10:30', country: 'AUS', event: 'Retail Sales' },
    ],
  },
  'This Week': {
    date: 'Week of 24 Mar 2025',
    items: [
      { time: '12:00', country: 'JPN', event: 'BoJ Minutes' },
      { time: '14:30', country: 'USA', event: 'GDP QoQ' },
      { time: '10:00', country: 'GBR', event: 'Unemployment Rate' },
    ],
  },
  'Next Week': {
    date: 'Week of 31 Mar 2025',
    items: [
      { time: '08:00', country: 'IND', event: 'Factory Orders' },
      { time: '13:00', country: 'CAN', event: 'Bank Announcement' },
    ],
  },
  'This Month': {
    date: 'March 2025',
    items: [
      { time: '00:00', country: 'Global', event: 'Monthly Summary' },
    ],
  },
}
