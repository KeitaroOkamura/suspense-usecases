import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Tabs, TabList, TabItem, TabPanel } from "~/components/Tabs";
import { ExampleOfInput, ExampleOfScrollPosition } from "~/components/Example";
import { Freeze } from "~/components/Freeze";

const UseCase2: NextPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleTabClick = useCallback(
    (index: number) => setSelectedIndex(index),
    [setSelectedIndex]
  );

  const isTabSelected = useCallback(
    (index: number) => selectedIndex === index,
    [selectedIndex]
  );

  return (
    <Tabs>
      <TabList>
        <TabItem
          tabIndex={1}
          selected={isTabSelected(1)}
          onClick={handleTabClick}
        >
          Tab 1
        </TabItem>
        <TabItem
          tabIndex={2}
          selected={isTabSelected(2)}
          onClick={handleTabClick}
        >
          Tab 2
        </TabItem>
      </TabList>

      <Freeze freeze={!isTabSelected(1)}>
        <TabPanel>
          <ExampleOfScrollPosition />
        </TabPanel>
      </Freeze>
      <Freeze freeze={!isTabSelected(2)}>
        <TabPanel>
          <ExampleOfInput />
        </TabPanel>
      </Freeze>
    </Tabs>
  );
};

export default UseCase2;
