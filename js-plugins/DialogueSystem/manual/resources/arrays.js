diaManager.config.sprites = new DialogueSpriteArray(
    [
        {
            name: "proto", // name
            src: "proto1.png" // source file
        },
        { name: "protoc", src: "proto1c.png" },
        { name: "proto_damn", src: "proto_jealous.png" },
        { name: "proto_stare", src: "proto_gasp2.png" },
        { name: "proto_e", src: "proto_gasp1.png" },
        { name: "rue", src: "rue.png" },
        { name: "rue_oh", src: "rue_oh.png" },
        { name: "rue_talk", src: "rue_talk.png" }
    ],

    // file path/directory
    "img/Faces"
);

async function Main ()
{
    const justAudio = new DialogueData({ audio: "default" });
    const justAudioBot = new DialogueData({ audio: "robot" });

    await diaManager.SetActive(true);
    await diaManager.Type("[...]", 1, new DialogueData({
        portrait: "proto",
        audio: "robot"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("Where", 1.1, new DialogueData({
        portrait: "rue_oh",
        audio: "default"
    }));
    await diaManager.Type("...", 0.1, new DialogueData({
        audio: "default",
        delayAfter: 0.4
    }));
    await diaManager.Type(" What is this place?", 1, new DialogueData({
        portrait: "rue_talk",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("[It appears we are inside a part of a global network.]", 1, new DialogueData({
        portrait: "proto",
        audio: "robot"
    }));
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type(".....? ", 0.05, new DialogueData({
        portrait: "rue",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.8);
    await diaManager.ClearText();
    await diaManager.Type("[The internet, ", 1, new DialogueData({
        portrait: "protoc",
        audio: "robot",
        delayAfter: 0.6
    }));
    await diaManager.Type("specifically a website.]", 1, justAudioBot);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Ah. ", 1, new DialogueData({
        portrait: "rue",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("So where's Cedric?", 1, justAudio);
    await DialogueLoop.Delay(2);
    await diaManager.Clear();
    await diaManager.Type("Over here!", 1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("Huh? ", 0.9, new DialogueData({
        portrait: "rue",
        audio: "default"
    }));
    await DialogueLoop.Delay(0.7);
    await diaManager.ClearText();
    diaManager.soundInterval = 2;
    await diaManager.Type("W-", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.1
    }));
    diaManager.soundInterval = 4;
    await diaManager.Type("where?", 1, justAudio);
    await DialogueLoop.Delay(1.4);
    await diaManager.Clear();
    await diaManager.Type("Right he-", 1.2, justAudio);
    await diaManager.ClearText();
    await diaManager.Type("WHERE IS MY FACE??", 2, justAudio);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("WHERE ", 2, new DialogueData({
        audio: "default",
        delayAfter: 0.2
    }));
    await diaManager.Type("THE ", 2, new DialogueData({
        audio: "default",
        delayAfter: 0.5
    }));
    await diaManager.Type("HELL IS MY FACE??", 2, justAudio);
    await DialogueLoop.Delay(1.1);
    await diaManager.ClearText();
    await diaManager.Type("[Goddamn CalmBubbles forgetting about Cedric's face.]", 1, new DialogueData({
        portrait: "proto_damn",
        audio: "robot"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("[I know you're there.]", 1, new DialogueData({
        portrait: "proto_stare",
        audio: "robot"
    }));
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("[If you're going to borrow us, ", 1, new DialogueData({
        audio: "robot",
        portrait: "proto_e",
        delayAfter: 0.5
    }));
    await diaManager.Type("do it correctly.]", 1, justAudioBot);
    await DialogueLoop.Delay(4);
    await diaManager.SetActive(false);
}