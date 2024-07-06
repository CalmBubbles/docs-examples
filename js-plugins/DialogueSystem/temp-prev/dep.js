diaManager.config.audios.items.push(new DialogueAudioClip("claire", "audio/claire.ogg"));
diaManager.config.sprites.items.push(new DialogueSprite("claire", "img/faces/claire/Happy.png"));

async function Main ()
{
    await diaManager.SetActive(true);
    await diaManager.Type("Never gonna give you up.", 1, new DialogueData({
        audio: "claire",
        portrait: "claire"
    }));
}