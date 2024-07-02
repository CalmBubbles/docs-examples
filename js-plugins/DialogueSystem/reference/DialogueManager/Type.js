diaManager.config.audios.items.push(new DialogueAudioClip("default", "audio/text.ogg"));
diaManager.config.sprites.items.push(new DialogueSprite("sus", "img/amogus.png"));

async function Main ()
{
    await diaManager.SetActive(true);
    await diaManager.Type("This method is probably the reason why you are using this plugin.", 1, new DialogueData({
        portrait: "sus",
        audio: "default"
    }));
}