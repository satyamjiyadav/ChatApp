import { useContext, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/Chat/UserChats";
import { AuthContext } from "../context/AuthContext";
import PotentialChats from "../components/Chat/PotentialChats";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoding, userChatsError } =useContext(ChatContext);
console.log(userChats);
  return (
    <Container>
        <PotentialChats />
      {userChats?.length < 1 ? null : (
        <Stack direction="horizontal" gap={4} className="align-items-start">
          <Stack className="message-box flex-grow-0 pe-3" gap={3}>
            {isUserChatsLoding && <p>Loading chats.....</p>}
            {userChats?.map((chat, index) => {
              return (
                <div key={index}>
                  <UserChat chat={chat} user={user} />
                </div>
              );
            })}
          </Stack>

          <p>ChatBox</p>
        </Stack>
      )}
    </Container>
  );
};

export default Chat;
