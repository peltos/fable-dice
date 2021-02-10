import { Message } from "discord.js";
import StoryModel from "../models/StoryModel";
import CONFIG from "../../config";

const StartCommand = async (message: Message, Stories: StoryModel[]) => {
    // current message
    const timeTaken = Date.now() - message.createdTimestamp;
    await message
      .reply(`The story starts here! chose the route you want! ${timeTaken}`)
      .then(async (msg) => {
        Stories.push({
          id: (msg as Message).id,
          reactions: [],
        });
        await (msg as Message).react(CONFIG.REACT_ONE);
        await (msg as Message).react(CONFIG.REACT_TWO);
        await (msg as Message).react(CONFIG.REACT_THREE);
        await (msg as Message).react(CONFIG.REACT_FOUR);
      });
  return Stories
}

export default StartCommand;