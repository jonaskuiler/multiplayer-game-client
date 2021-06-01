import { useEffect } from "react";
import { Flex, Text, Box } from "rebass/styled-components";
import styled from "styled-components";
import { useGameContext } from "./GameContext";

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
`;

export const GameUI = () => {
  const gameContext = useGameContext();

  useEffect(() => {
    gameContext.connect();
  });

  return (
    <Container flexDirection="column">
      <Flex px={2} color="white" bg="black" alignItems="center">
        <Text p={2} fontWeight="bold">
          Shoot 'em up
        </Text>
        <Box mx="auto" />
        {gameContext.isConnected && (
          <Text p={2} fontWeight="bold">
            {gameContext.onlineUsers} online users
          </Text>
        )}
      </Flex>
    </Container>
  );
};
