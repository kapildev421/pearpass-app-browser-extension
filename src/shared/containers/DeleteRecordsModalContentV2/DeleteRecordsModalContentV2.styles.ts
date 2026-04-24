import { rawTokens } from '@tetherto/pearpass-lib-ui-kit'

export const createStyles = () => ({
  body: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: `${rawTokens.spacing8}px`,
    width: '100%'
  },
  itemsListHeader: {
    marginBottom: `${rawTokens.spacing16}px`
  },
  itemRow: {
    display: 'flex' as const,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: `${rawTokens.spacing12}px`,
    width: '100%'
  },
  itemText: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: `${rawTokens.spacing4}px`,
    minWidth: 0,
    flex: 1
  },
  itemsList: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: `${rawTokens.spacing16}px`,
    width: '100%',
    maxHeight: '180px',
    overflowY: 'auto' as const,
    paddingLeft: `${rawTokens.spacing12}px`
  },
  confirmText: {
    marginTop: `${rawTokens.spacing16}px`,
    width: '100%'
  }
})
