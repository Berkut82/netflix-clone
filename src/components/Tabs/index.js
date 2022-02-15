import React, { useState } from 'react';
import Tabs from './Tabs';
import { tabLabels } from './constant';

const TabComponent = () => {
  const [activeTab, setActive] = useState(tabLabels.CANCEL_AT_ANY_TIME);

  const onClickTab = (tab) => {
    setActive(tab);
  };

  return (
    <div>
      <Tabs activeTabName={activeTab} onClickTab={onClickTab} />
    </div>
  );
};

export default TabComponent;
