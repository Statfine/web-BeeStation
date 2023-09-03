import { QuestionCircleOutlined } from '@ant-design/icons';
import { SelectLang as UmiSelectLang } from '@umijs/max';
import { Switch } from 'antd';

export type SiderTheme = 'light' | 'dark';

import styles from './style.less';

export type SelectThemeProps = {
  onThemeChange: (checked: boolean) => void;
};
export const SelectTheme = (props: SelectThemeProps) => {
  return (
    <Switch
      className={styles.headerSwitch}
      checkedChildren={<span>🌞</span>}
      unCheckedChildren={<span>🌜</span>}
      defaultChecked
      onChange={(checked) => props.onThemeChange(checked)}
    />
  );
};
export const SelectLang = () => {
  return (
    <UmiSelectLang
      style={{
        padding: 4,
      }}
    />
  );
};

export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://pro.ant.design/docs/getting-started');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};
