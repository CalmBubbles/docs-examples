diaManager.config.audios.items.push(new DialogueAudioClip("sans", "audio/sans.wav"));
diaManager.config.sprites.items.push(new DialogueSprite("sans", "img/faces/sans/neutral.png"));

async function Main ()
{
    await diaManager.SetActive(true);
    SetAsterisk();
    SetFont(1);
    await diaManager.Type("Never gonna give you up.", 1, new DialogueData({
        audio: "sans",
        portrait: "sans"
    }));
}