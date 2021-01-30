import React, { memo, useState } from "react";
import { useSpring, a } from "react-spring";

import { Icon } from "@iconify/react";
import carIcon from "@iconify-icons/fa-solid/car";

import { useMeasure, usePrevious } from "./helpers";
import { Frame, Title, Content, toggle } from "../../styles/styles";
import * as Icons from "../../assets/icons/IconTree";

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  });

  const IconT =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];

  return (
    <Frame>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <IconT
          style={{ ...toggle, opacity: children ? 1 : 0.3 }}
          onClick={() => setOpen(!isOpen)}
        />
        {name === "Cars" ? <Icon icon={carIcon} className="mr-2" /> : null}
        <Title style={style}>{name}</Title>
      </div>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  );
});

export default function VehicleMenu() {
  const styles = {
    title: {
      fontFamily: "Roobert",
      fontSize: "2.25rem",
      fontWeight: 600,
    },
  };

  return (
    <div
      className="
          flex-none bg-yellow-500
          w-80 py-4"
    >
      <aside>
        <div
          className="
            px-4"
        >
          <Tree name="Vehicles" defaultOpen style={styles.title}>
            <Tree name="Cars">
              <Tree name="Car 1" />
              <Tree name="Car 2" />
              <Tree name="Car 3" />
              <Tree name="Car 4" />
              <Tree name="Car 5" />
            </Tree>
            <Tree name="Trucks">
              <Tree name="Truck 1" />
              <Tree name="Truck 2">
                <Tree name="Truck name here (kot)" />
                <Tree name="Misc contents here">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 200,
                      padding: 10,
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "white",
                        borderRadius: 5,
                      }}
                    />
                  </div>
                </Tree>
              </Tree>
            </Tree>
            <Tree name="Motorcars" />
          </Tree>
        </div>
      </aside>
    </div>
  );
}
