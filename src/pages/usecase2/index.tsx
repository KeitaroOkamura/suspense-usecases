import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Layout } from "~/components/Layout";
import { Tabs, TabList, TabItem, TabPanel } from "~/components/Tabs";

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
    <Layout>
      <Tabs>
        <TabList>
          <TabItem
            tabIndex={1}
            selected={isTabSelected(1)}
            onClick={handleTabClick}
          >
            Title 1
          </TabItem>
          <TabItem
            tabIndex={2}
            selected={isTabSelected(2)}
            onClick={handleTabClick}
          >
            Title 2
          </TabItem>
        </TabList>

        <TabPanel show={isTabSelected(1)}>
          <div className="overscroll-contain overflow-y-auto h-80">
            <div className="h-96 bg-slate-200">
              <p>Any content 1</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel show={isTabSelected(2)}>
          <p>Any content 2</p>
          <input
            className="caret-blue-500 focus:caret-indigo-500"
            type="text"
          />
        </TabPanel>
      </Tabs>
    </Layout>
  );
};

export default UseCase2;
