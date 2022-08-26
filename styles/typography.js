import { viewports } from '../styles/theme/settings'

export const cssTextHeadlineH1 = {
  lineHeight: '62px',
  fontWeight: 700,
  fontSize: '52px',
  color: '#4F5152',
  [`@media (${viewports.minXxs})`]: {
    fontSize: '63px',
    lineHeight: '73px',
  },
  [`@media (${viewports.minXs})`]: {
    fontSize: '78px',
    lineHeight: '88px',
  }
}

export const cssTextHeadlineHighlight = {
  // minHeight: '118px',
  lineHeight: '62px',
  fontWeight: 700,
  fontSize: '52px',

  [`@media (${viewports.minXxs})`]: {
    fontSize: '63px',
    lineHeight: '73px', //'60px',
    // minHeight: '134px',
  },
  [`@media (${viewports.minXs})`]: {
    fontSize: '78px',
    lineHeight: '88px',
  },
}
