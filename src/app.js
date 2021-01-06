import React, { useState, useCallback } from "react";
import { Box, Flex, Image, Heading, Button } from "@chakra-ui/core";
import { useSpring, animated, interpolate } from "react-spring";
import "./styles.css";

const AnimatedImage = animated(Image);
const AnimatedBox = animated(Box);
const AnimatedFlex = animated(Flex);

export default function App() {
  /*const { o } = useSpring({
    from: { o: 0 },
    o: 1
  });*/

  /*const {o, xyz, color} = useSpring({
    from: {o: 0, xyz: [0, 0, 0], color: 'red'},
    o: 1,
    xyz: [10, 20, 5],
    color: 'green'
  })*/

  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }));
  const onScroll = useCallback((e) => {
    set({ scroll: e.target.scrollTop / window.innerHeight });
    //console.log(`window.innerHeight: ${window.innerHeight}`);
    //console.log(`e.target.scrollTop: ${e.target.scrollTop}`);
    console.log(`scroll.value: ${scroll.getValue()}`);
  }, []);

  return (
    <div className="container" onScroll={onScroll}>
      <div
        style={{
          position: "relative",
          height: "200vh",
          overflow: "hidden",
          width: "100%"
        }}
      >
        <animated.div
          id="header"
          style={{
            position: "fixed",
            width: "100%",
            height: scroll.interpolate([0, 0.8], ["200px", "100px"]),
            backgroundColor: scroll.interpolate([0, 0.8], ["tomato", "purple"])
          }}
        ></animated.div>
        <div id="body">asdf</div>
      </div>
    </div>
  );
}
