import {
  useMemo,
  useReducer,
  createContext,
  useContext,
  useEffect
} from "react";
import { io } from "socket.io-client";

const GameContext = createContext();
const URL = "https://1ieee.sse.codesandbox.io/";
const socket = io(URL, { autoConnect: false });

export const GameContainer = (props) => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "SET_USERNAME":
          return {
            ...prevState,
            userName: action.userName
          };
        case "SET_ONLINE_USERS":
          return {
            ...prevState,
            onlineUsers: action.onlineUsers
          };
        default:
          return prevState;
      }
    },
    {
      onlineUsers: 0,
      isConnected: false,
      userName: null
    }
  );

  const gameContext = useMemo(
    () => ({
      ...state,
      connect: () => {
        socket.connect();
      },
      setUserName: (userName) => {
        socket.emit("userName", userName);

        dispatch({
          type: "SET_USERNAME",
          userName
        });
      }
    }),
    [state]
  );

  useEffect(() => {
    socket.on("onlineUsers", (onlineUsers) => {
      dispatch({
        type: "SET_ONLINE_USERS",
        onlineUsers
      });
    });
  });

  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};
