diaManager.config.audios.items.push(new DialogueAudioClip("sans", "audio/sans.wav"));

diaManager.config.sprites = new DialogueSpriteArray(
    [
        { name: "sans_lookdown", src: "custom_lookdown.png" },
        { name: "sans", src: "neutral.png" },
        { name: "sans_chuckle", src: "chuckle.png" },
        { name: "sans_blink", src: "blink.png" }
    ],
    "img/faces/sans"
)

async function Main ()
{
    const justAudio = new DialogueData({ audio: "sans" });

    diaManager.dialogueLine.style.width = "calc(var(--scaler) * 1160vw)";
    SetFont(1);
    await diaManager.SetActive(true);
    SetAsterisk();
    await diaManager.Type("woah. ", 1, new DialogueData({
        audio: "sans",
        portrait: "sans_lookdown"
    }));
    await DialogueLoop.Delay(0.6);
    await diaManager.Type("what are my words doing down here?", 1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("you've got to fix this man.", 1, new DialogueData({
        audio: "sans",
        portrait: "sans"
    }));
    await DialogueLoop.Delay(1);

    if (!confirm())
    {
        await diaManager.ClearText();
        await diaManager.Type("can't?", 1, justAudio);
        await DialogueLoop.Delay(1.4);
        await diaManager.ClearText();
        await diaManager.Type("well too bad.\n", 1, new DialogueData({
            audio: "sans",
            portrait: "sans_blink"
        }));
        await DialogueLoop.Delay(0.7);
        SetAsterisk(true);
        await diaManager.Type("won't be staying here for long, ", 1, justAudio);
        await DialogueLoop.Delay(0.2);
        await diaManager.Type("so that's your loss.", 1, justAudio);
        await DialogueLoop.Delay(1.4);
        await diaManager.SetActive(false);
        
        return;
    }

    diaManager.dialogueLine.style.width = "";
    await diaManager.ClearText();
    await diaManager.Type("this feels better.", 1, new DialogueData({
        audio: "sans",
        portrait: "sans_chuckle"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("aight, ", 1, new DialogueData({
        audio: "sans",
        portrait: "sans"
    }));
    await DialogueLoop.Delay(0.5);
    await diaManager.Type("move on to the next part of this manual.", 1, justAudio);
    await DialogueLoop.Delay(2.1);
    await diaManager.SetActive(false);
}