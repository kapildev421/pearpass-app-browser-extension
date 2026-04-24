import { useState } from 'react'

import { Text, useTheme } from '@tetherto/pearpass-lib-ui-kit'

import { createStyles } from './RecordListV2.styles'
import { MainViewHeader } from '../../containers/MainViewHeader'
import { SORT_KEYS, type SortKey } from '../../../shared/constants/sortOptions'
import { SidebarV2 } from '../../../shared/containers/SidebarV2'

export const RecordListV2 = () => {
  const { theme } = useTheme()
  const styles = createStyles(theme.colors)

  const [sortKey, setSortKey] = useState<SortKey>(SORT_KEYS.LAST_UPDATED_NEWEST)
  const [isMultiSelectOn, setIsMultiSelectOn] = useState(false)

  return (
    <div style={styles.root} data-testid="record-list-v2-page">
      <SidebarV2 />
      <div style={styles.main}>
        <MainViewHeader
          sortKey={sortKey}
          setSortKey={setSortKey}
          isMultiSelectOn={isMultiSelectOn}
          setIsMultiSelectOn={setIsMultiSelectOn}
        />
        <div style={styles.placeholder}>
          <Text variant="labelEmphasized">Record List V2</Text>
        </div>
      </div>
    </div>
  )
}
