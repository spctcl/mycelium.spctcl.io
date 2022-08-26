import { viewports } from '../styles/theme/settings'

export const cssTextHeadlineH1 = {
  fontSize: '52px',
  color: '#4F5152',
  fontWeight: 700,
  lineHeight: '53px',
  [`@media (${viewports.minXxs})`]: {
    fontSize: '62px',
    lineHeight: '60px',
  },
  [`@media (${viewports.minXs})`]: {
    fontSize: '78px',
    lineHeight: '74px',
  }
}

export const cssTextHeadlineHighlight = {
  // minHeight: '118px',
  lineHeight: '55px',
  fontWeight: 700,
  fontSize: '52px',
  marginTop: '4px',
  paddingBottom: '8px',

  [`@media (${viewports.minXxs})`]: {
    fontSize: '63px',
    lineHeight: '67px', //'60px',
    // minHeight: '134px',
  },
  [`@media (${viewports.minXs})`]: {
    fontSize: '78px',
    lineHeight: '74px',
    paddingBottom: '14px',
  },
}
