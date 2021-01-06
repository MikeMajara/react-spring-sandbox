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
    <Flex className="container" onScroll={onScroll}>
      <div
        style={{
          position: "relative",
          height: "200vh",
          overflow: "hidden",
          width: "100%"
        }}
      >
        <AnimatedBox
          id="header"
          style={{
            position: "fixed",
            width: "100%",
            height: scroll.interpolate(
              [0, 0.2, 1],
              ["200px", "100px", "100px"]
            ),
            backgroundColor: scroll.interpolate([0, 0.8], ["tomato", "purple"]),
            boxShadow: scroll.interpolate(
              [0, 0.2, 1],
              [
                "0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
                "0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)",
                "0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)"
              ]
            )
          }}
          boxShadow="xl"
        >
          <AnimatedImage
            src="/home-icon.png"
            style={{
              height: scroll.interpolate(
                [0, 0.2, 1],
                ["180px", "80px", "80px"]
              ),
              margin: "10px"
            }}
          ></AnimatedImage>
        </AnimatedBox>
        <div id="body">asdf</div>
      </div>
    </Flex>
  );
}
