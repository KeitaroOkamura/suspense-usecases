import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Tabs, TabList, TabItem, TabPanel } from "~/components/Tabs";
import { ExampleOfInput, ExampleOfScrollPosition } from "~/components/Example";

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

      <TabPanel show={isTabSelected(1)}>
        <ExampleOfScrollPosition />
      </TabPanel>
      <TabPanel show={isTabSelected(2)}>
        <ExampleOfInput />
      </TabPanel>
    </Tabs>
  );
};

export default UseCase2;
