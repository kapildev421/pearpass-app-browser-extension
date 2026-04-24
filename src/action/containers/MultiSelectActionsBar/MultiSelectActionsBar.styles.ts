import type { ThemeColors } from '@tetherto/pearpass-lib-ui-kit'
import { rawTokens } from '@tetherto/pearpass-lib-ui-kit'

import { HEADER_MIN_HEIGHT } from '../MainViewHeader/MainViewHeader.styles'

export const createStyles = (colors: ThemeColors) => ({
  container: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
    gap: `${rawTokens.spacing8}px`,
    height: `${HEADER_MIN_HEIGHT}px`,
    paddingInline: `${rawTokens.spacing12}px`,
    borderBottom: `1px solid ${colors.colorBorderPrimary}`,
    backgroundColor: colors.colorSurfacePrimary,
    boxSizing: 'border-box' as const,
    flexShrink: 0
  },

  label: {
    overflow: 'hidden' as const,
    textOverflow: 'ellipsis' as const,
    whiteSpace: 'nowrap' as const,
    minWidth: 0
  },

  actions: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: `${rawTokens.spacing4}px`,
    flexShrink: 0
  },

  destructiveDivider: {
    width: '1px',
    height: '12px',
    backgroundColor: colors.colorBorderPrimary,
    marginInline: `${rawTokens.spacing4}px`,
    flexShrink: 0
  }
})
