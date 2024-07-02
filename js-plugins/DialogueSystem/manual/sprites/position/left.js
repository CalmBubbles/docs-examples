diaManager.config.audios = new DialogueAudioArray(
    [
        { name : "zera", src : "zera.ogg" },
        { name : "yoki", src : "yoki.ogg" },
        { name : "claire", src : "claire.ogg" }
    ],
    "audio"
);

diaManager.config.sprites = new DialogueSpriteArray(
    [
        { name : "zera_smile", src : "zera/Smile.png" },
        { name : "zera", src : "zera/Neutral.png" },
        { name : "zera_look", src : "zera/Look.png" },
        { name : "yoki", src : "yoki/Annoyed.png" },
        { name : "yoki_bigbrain", src : "yoki/Think.png" },
        { name : "claire", src : "claire/Happy.png" }
    ],
    "img/faces"
);

async function Main ()
{
    const justAudioZera = new DialogueData({ audio: "zera" });
    const justAudioYoki = new DialogueData({ audio: "yoki" });
    const justAudioClaire = new DialogueData({ audio: "claire" });

    await diaManager.SetActive(true);
    await diaManager.Type("Why do most RPGs have their portrait images in the left?", 1, new DialogueData({
        portrait: "zera_smile",
        audio: "zera"
    }));
    await DialogueLoop.Delay(1.7);
    await diaManager.ClearText();
    await diaManager.Type("Is it a practice?", 1, justAudioZera);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Is it tradition?", 1, justAudioZera);
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("Or is it because of design limitations?", 1, justAudioZera);
    await DialogueLoop.Delay(1.9);
    await diaManager.ClearText();
    await diaManager.Type("But in any way, I'm still definitely extremely handsome.", 1, new DialogueData({
        portrait: "zera",
        audio: "zera"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("And you should totally agree to that... ", 1, new DialogueData({
        portrait: "zera_look",
        audio: "zera",
        delayAfter: 0.8
    }));
    await diaManager.Type("Yoki.", 1, justAudioZera);
    await DialogueLoop.Delay(2.4);
    await diaManager.ClearText();
    await diaManager.Type("Dude... ", 1, new DialogueData({
        portrait: "yoki",
        audio: "yoki",
        delayAfter: 0.5
    }));
    await diaManager.Type("I literally have no idea what you're talking about.", 1, justAudioYoki);
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("Besides, ", 1, new DialogueData({
        portrait: "yoki_bigbrain",
        audio: "yoki",
        delayAfter: 0.4
    }));
    await diaManager.Type("you look like a rat in any angle.", 1, justAudioYoki);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("So ", 1, new DialogueData({
        portrait: "claire",
        audio: "claire",
        delayAfter: 0.3
    }));
    diaManager.soundInterval = 2;
    await diaManager.Type("trueeeeee...", 0.9, justAudioClaire);
    diaManager.soundInterval = 3;
    await DialogueLoop.Delay(3);
    await diaManager.ClearText();
    await diaManager.Type("...", 0.01, new DialogueData({
        portrait: "zera",
        audio: "zera"
    }));
    await DialogueLoop.Delay(4);
    await diaManager.SetActive(false);
}