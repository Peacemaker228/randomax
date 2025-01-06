import * as Tabs from '@radix-ui/react-tabs'
import { About } from '../../components/Account/About'
import styles from './styles.module.css'
import { Orders } from '../../components/Account/Orders'

export const Account = () => {
  return (
    <Tabs.Root defaultValue={'tab1'} className={styles.account}>
      <Tabs.List>
        <Tabs.Trigger value={'tab1'} className={styles.trigger}>
          О пользователе
        </Tabs.Trigger>
        <Tabs.Trigger value={'tab2'} className={styles.trigger}>
          Заказы
        </Tabs.Trigger>
        <Tabs.Content value={'tab1'} className={styles.content}>
          <About />
        </Tabs.Content>
        <Tabs.Content value={'tab2'} className={styles.content}>
          <Orders />
        </Tabs.Content>
      </Tabs.List>
    </Tabs.Root>
  )
}
