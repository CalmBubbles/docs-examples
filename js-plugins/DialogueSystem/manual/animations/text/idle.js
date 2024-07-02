diaManager.config.audios.items.push(new DialogueAudioClip("sans", "audio/sans.wav"));

diaManager.config.sprites = new DialogueSpriteArray(
    [
        { name: "sans_chuckle", src: "chuckle.png" },
        { name: "sans_blink", src: "blink.png" },
        { name: "sans", src: "neutral.png" },
        { name: "sans_chuckle2", src: "chuckle2.png" }
    ],
    "img/faces/sans"
);

async function Main ()
{
    await Loader.LoadStyle("custom-styles/rgb-animation");

    const justAudio = new DialogueData({ audio: "sans" });

    SetFont(1);
    await diaManager.SetActive(true);
    SetAsterisk();
    await diaManager.Type("rgb text", 1, new DialogueData({
        audio: "sans",
        portrait: "sans_chuckle",
        animation: "css",
        animationParams: [new Property("animation", "rgb-animation infinite linear 1s")]
    }));
    await diaManager.Type(", ", 1, justAudio);
    await DialogueLoop.Delay(0.6);
    await diaManager.Type("anyone?", 1, justAudio);
    await DialogueLoop.Delay(3);
    await diaManager.ClearText();
    await diaManager.Type("if people weren't sensitive these days, ", 1, new DialogueData({
        audio: "sans",
        portrait: "sans_blink"
    }));
    await DialogueLoop.Delay(0.3);
    await diaManager.Type("i could've said ga-", 1, justAudio);
    await diaManager.ClearText();
    await diaManager.Type("gamer...\n", 1, new DialogueData({
        audio: "sans",
        portrait: "sans"
    }));
    await DialogueLoop.Delay(1);
    SetAsterisk(true);
    await diaManager.Type("yeah", 0.4, justAudio);
    await diaManager.Type("...\n", 0.04);
    SetAsterisk(true, true);
    await diaManager.Type("definitely ", 0.4, new DialogueData({
        audio: "sans",
        portrait: "sans_chuckle2"
    }));
    await DialogueLoop.Delay(0.5);
    await diaManager.Type("gamer.", 0.4, justAudio);
    await DialogueLoop.Delay(2.5);
    await diaManager.ClearText();
    SetAsterisk();
    await diaManager.Type("...", 0.03);
    await DialogueLoop.Delay(4);
    await diaManager.SetActive(false);
}