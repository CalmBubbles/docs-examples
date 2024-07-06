diaManager.config.sprites.items.push(new DialogueSprite("proto", "img/Faces/proto_gasp2.png"));

async function Main ()
{
    await diaManager.SetActive(true);
    await diaManager.Type("[Never gonna give you up.]", 1, new DialogueData({
        portrait: "proto",
        audio: "robot",
        delayAfter: 0.25
    }));
}