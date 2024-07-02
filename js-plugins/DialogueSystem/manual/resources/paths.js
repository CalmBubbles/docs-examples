diaManager.config.sprites = new DialogueSpriteArray(
    [
        { name : "aimottle_unsure", src : "aimottle/Unsure.png" },
        { name : "aimottle_angry", src : "aimottle/Angry.png" },
        { name : "aimottle", src : "aimottle/Neutral.png" },
        { name : "claire_sigh", src : "claire/Sigh.png" },
        { name : "claire_dude", src : "claire/Aghast.png" },
        { name : "claire_mad", src : "claire/Mad.png" },
        { name : "claire_dizzy", src : "claire/Dizzy.png" },
        { name : "woof_eep", src : "woof/Sleep.png" },
        { name : "woof", src : "woof/Awake.png" },
        { name : "zera_look", src : "zera/Look.png" },
        { name : "zera_pout", src : "zera/Pout.png" },
        { name : "zera_smile", src : "zera/Smile.png" }
    ],

    // directory as text pointing to location
    "img/faces"
);

diaManager.config.audios = new DialogueAudioArray(
    [
        { name : "aimottle", src : "audio/aimottle.ogg" },
        { name : "claire", src : "audio/claire.ogg" },
        { name : "woof", src : "audio/woof.ogg" },
        { name : "zera", src : "audio/zera.ogg" }
    ],

    // directory as same as page's
    DialogueDirectoryType.Same
);

async function Main ()
{
    const justAudioAimottle = new DialogueData({ audio: "aimottle" });
    const justAudioClaire = new DialogueData({ audio: "claire" });
    const justAudioWoof = new DialogueData({ audio: "woof" });
    const justAudioZera = new DialogueData({ audio: "zera" });

    await diaManager.SetActive(true);
    await diaManager.Type("Why do we even need an example for this topic?", 1, new DialogueData({
        portrait: "aimottle_unsure",
        audio: "aimottle"
    }));
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("Its literally used in almost every example.", 1, justAudioAimottle);
    await DialogueLoop.Delay(1.7);
    await diaManager.ClearText();
    await diaManager.Type("Probably because not all of it was.. ", 1, new DialogueData({
        portrait: "claire_sigh",
        audio: "claire",
        delayAfter: 0.4
    }));
    await diaManager.Type("used..?", 1, justAudioClaire);
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("No one is insane like you to check through every example... ", 1, new DialogueData({
        audio: "claire",
        delayAfter: 0.5
    }));
    await diaManager.Type("duh.", 1, justAudioClaire);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Shut up!", 1.2, new DialogueData({
        portrait: "aimottle_angry",
        audio: "aimottle"
    }));
    await DialogueLoop.Delay(1.7);
    await diaManager.ClearText();
    await diaManager.Type("Just get on with it before this beast wakes up.", 1, new DialogueData({
        portrait: "claire_sigh",
        audio: "claire"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("mmm", 0.7, new DialogueData({
        portrait: "woof_eep",
        delayAfter: 0.2,
        audio: "woof"
    }));
    await diaManager.Type("fghm,", 1, new DialogueData({
        audio: "woof",
        delayAfter: 0.4
    }));
    diaManager.soundInterval = 2;
    await diaManager.Type("mghgfff,,", 0.5, new DialogueData({
        audio: "woof",
        delayAfter: 0.6
    }));
    diaManager.soundInterval = 3;
    await diaManager.Type("...", 0.04, justAudioWoof);
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("Fine, fine...", 1, new DialogueData({
        portrait: "aimottle_unsure",
        audio: "aimottle"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(2);
    await diaManager.SetActive(true);
    await diaManager.Type("Okay...\n", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle",
        delayAfter: 0.6
    }));
    await diaManager.Type("As you can see, ", 1, new DialogueData({
        audio: "aimottle",
        delayAfter: 0.3
    }));
    await diaManager.Type("most examples here are using text directories.", 1, justAudioAimottle);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("Text dirs work just like normal web file management.", 1, justAudioAimottle);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("...", 0.05, new DialogueData({
        portrait: "zera_look",
        audio: "zera"
    }));
    await diaManager.ClearText();
    await diaManager.Type("By default, ", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle",
        delayAfter: 0.4
    }));
    await DialogueLoop.Delay(0.35);
    await diaManager.Type("dirs are DialogueDirectoryType.Root.", 1, justAudioAimottle);
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("On that value, files will be fetched from the root directory.", 1, justAudioAimottle);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("I'll just scoot here", 1, new DialogueData({
        portrait: "zera_pout",
        audio: "zera"
    }));
    await diaManager.Type("...", 0.06, justAudioZera);
    await DialogueLoop.Delay(0.4);
    await diaManager.ClearText();
    await diaManager.Type("For this page, it's \"calmbubbles.github.io\"", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle"
    }));
    await DialogueLoop.Delay(1.1);
    await diaManager.ClearText();
    await diaManager.Type("...", 1, new DialogueData({
        portrait: "claire_dude",
        audio: "claire"
    }));
    await DialogueLoop.Delay(0.7);
    await diaManager.ClearText();
    await diaManager.Type("And for DialogueDirectoryType.Same\n...", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    diaManager.soundInterval = 2;
    await diaManager.Type("Behind you...", 0.1, new DialogueData({
        portrait: "claire_dude",
        audio: "claire"
    }));
    diaManager.soundInterval = 3;
    await DialogueLoop.Delay(0.9);
    await diaManager.ClearText();
    await diaManager.Type("It'll fetch files from the page's location.", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle"
    }));
    await DialogueLoop.Delay(1.6);
    await diaManager.ClearText();
    await diaManager.Type("That's all... ", 1, new DialogueData({
        audio: "aimottle",
        portrait: "aimottle_unsure",
        delayAfter: 0.6
    }));
    await diaManager.Type("I think.", 1, justAudioAimottle);
    await DialogueLoop.Delay(2.5);
    await diaManager.ClearText();
    await diaManager.Type("Wakey wakey little one...", 1, new DialogueData({
        portrait: "zera_smile",
        audio: "zera"
    }));
    await DialogueLoop.Delay(1.8);
    await diaManager.ClearText();
    await diaManager.Type("...", 0.04, new DialogueData({
        portrait: "woof_eep",
        audio: "woof"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("YAAaawwwwwnnnn.....", 0.7, justAudioWoof);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type(".....?", 0.04, justAudioWoof);
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("GOOOOOOOO", 0.9, new DialogueData({
        portrait: "woof",
        audio: "woof"
    }));
    await diaManager.ClearText();
    diaManager.Finish();
    await diaManager.Type("I'm out...", 1, new DialogueData({ portrait: "zera_smile" }));
    await DialogueLoop.Delay(0.2);
    await diaManager.ClearText();
    diaManager.Finish();
    await diaManager.Type("GOOOOOOOOOOOOOOOOD ", 1, new DialogueData({ portrait: "woof" }));
    await diaManager.Type("MORNI-", 2, justAudioWoof);
    await diaManager.ClearText();
    diaManager.audioSource.volume = 1.3;
    diaManager.soundInterval = 1;
    await diaManager.Type("SHOOT!", 2, new DialogueData({
        audio: "aimottle",
        portrait: "aimottle_unsure"
    }));
    await diaManager.ClearText();
    await diaManager.Type("RUN!", 2, new DialogueData({
        portrait: "claire_dude",
        audio: "claire"
    }));
    diaManager.audioSource.volume = 0.7;
    diaManager.soundInterval = 3;
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("WHY THE HECK DID YOU NOT TELL ME?!!", 2, new DialogueData({
        audio: "aimottle",
        portrait: "aimottle_angry"
    }));
    await DialogueLoop.Delay(0.4);
    await diaManager.ClearText();
    await diaManager.Type("I WAS ABOUT-", 2, new DialogueData({
        portrait: "claire_dizzy",
        audio: "claire"
    }));
    await diaManager.ClearText();
    await diaManager.Type("YOU WERE TOO FOCUSED!!", 2, new DialogueData({
        portrait: "claire_mad",
        audio: "claire"
    }));
    await DialogueLoop.Delay(0.5);
    await diaManager.ClearText();
    await diaManager.Type("NOW PUT THAT FOCUS ON RUNNING!", 2, new DialogueData({
        portrait: "claire_dizzy",
        audio: "claire"
    }));
    await DialogueLoop.Delay(4);
    await diaManager.SetActive(false);
}