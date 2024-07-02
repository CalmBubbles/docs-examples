diaManager.config.sprites = new DialogueSpriteArray(
    [
        { name: "george", src: "george6.png" },
        { name: "george_smile", src: "george6_smile.png" },
        { name: "george_shrug", src: "george6_shrug.png" },
        { name: "george_point", src: "george6_point.png" },
        { name: "george_fingerguns", src: "george6_fingerguns.png" },
        { name: "niko", src: "niko.png" },
        { name: "niko2", src: "niko2.png" },
        { name: "niko_what", src: "niko_what.png" },
        { name: "niko_pancakes", src: "niko_pancakes.png" },
        { name: "niko_boombasticsideye", src: "niko6.png" },
        { name: "niko_speak", src: "niko_speak.png" },
        { name: "niko_eyeclosed", src: "niko_eyeclosed2.png" },
        { name: "alula_speak", src: "alula_speak.png" },
        { name: "calamus", src: "calamus_shock.png" }
    ],
    "img/Faces"
);

async function Main ()
{
    const justAudio = new DialogueData({ audio: "default" });

    await diaManager.SetActive(true);
    await diaManager.Type("Wazzup vlog... ", 1, new DialogueData({
        portrait: "george_smile",
        audio: "default",
        delayAfter: 0.25
    }));
    await diaManager.Type("welcome to my guys.", 1.2, justAudio);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Today's vid, ", 1, new DialogueData({
        portrait: "george",
        audio: "default",
        delayAfter: 0.5
    }));
    await diaManager.Type("we gonna be", 1, new DialogueData({
        portrait: "george_smile",
        audio: "default"
    }));
    await diaManager.Type(".....", 0.04, justAudio);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Sorting books", 1, new DialogueData({
        portrait: "george",
        audio: "default"
    }));
    await diaManager.Type("...", 0.08, new DialogueData({
        audio: "default",
        delayAfter: 0.5
    }));
    await diaManager.Type(" aaaaaaaaaaagain.", 0.75, new DialogueData({
        portrait: "george_shrug",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Aight, ", 1, new DialogueData({
        portrait: "george",
        audio: "default",
        delayAfter: 0.25
    }));
    await diaManager.Type("let's sta-", 1.4, justAudio);
    await diaManager.ClearText();
    await diaManager.Type("Yoooooooooooooooooo", 1, new DialogueData({
        portrait: "george_point",
        audio: "default"
    }));
    await diaManager.Type("...", 0.02, new DialogueData({
        audio: "default",
        delayAfter: 0.25
    }));
    await diaManager.Type(" cat.", 1, justAudio);
    await DialogueLoop.Delay(3);
    await diaManager.ClearText();
    await diaManager.Type(".....?", 0.04, new DialogueData({
        portrait: "niko",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("Ca- ", 1, new DialogueData({
        portrait: "george_point",
        audio: "default"
    }));
    await diaManager.ClearText();
    await diaManager.Type("I'm not a cat.", 1, new DialogueData({
        portrait: "niko_speak",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Sure thing bud.", 1, new DialogueData({
        portrait: "george_point",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("Soooooooooo", 0.75, new DialogueData({
        portrait: "niko_boombasticsideye",
        audio: "default"
    }));
    await diaManager.Type("..... ", 0.1, justAudio);
    await diaManager.Type("what are you working on?", 1, new DialogueData({
        portrait: "niko2",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Bing chillin'.", 1, new DialogueData({
        portrait: "george",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.1);
    await diaManager.ClearText();
    await diaManager.Type("Chilling", 0.5, new DialogueData({
        portrait: "niko_what",
        audio: "default"
    }));
    await diaManager.Type("...?", 0.08, justAudio);
    await DialogueLoop.Delay(0.75);
    await diaManager.ClearText();
    await diaManager.Type("Bing chillin'.", 1, new DialogueData({
        portrait: "george_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(0.8);
    await diaManager.ClearText();
    await diaManager.Type("So, ", 1, new DialogueData({
        portrait: "george",
        audio: "default",
        delayAfter: 0.25
    }));
    await diaManager.Type("ya wanna join my vlog?", 1.05, justAudio);
    await DialogueLoop.Delay(0.5);
    await diaManager.ClearText();
    await diaManager.Type("You're vlogging?", 1, new DialogueData({
        portrait: "niko_pancakes",
        audio: "default"
    }));
    await DialogueLoop.Delay(0.8);
    await diaManager.ClearText();
    await diaManager.Type("Ya know em?", 1, new DialogueData({
        portrait: "george_smile",
        audio: "default",
        delayAfter: 0.25
    }));
    await DialogueLoop.Delay(0.34);
    await diaManager.ClearText();
    await diaManager.Type("Mhm! ", 1, new DialogueData({
        portrait: "niko_pancakes",
        audio: "default"
    }));
    await DialogueLoop.Delay(0.7);
    await diaManager.ClearText();
    await diaManager.Type("Eyyyyyyyyy.", 1, new DialogueData({
        portrait: "george_fingerguns",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("Here, ", 1, new DialogueData({
        portrait: "george_smile",
        audio: "default",
        delayAfter: 0.2
    }));
    await diaManager.Type("have the camera.", 1, justAudio);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("*breaths in*", 1, new DialogueData({
        portrait: "niko_eyeclosed",
        audio: "default"
    }));
    await DialogueLoop.Delay(3);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(4);
    await diaManager.SetActive(true);
    await diaManager.Type("U ok lil bu-", 1, new DialogueData({
        portrait: "george",
        audio: "default"
    }));
    await diaManager.ClearText();
    await diaManager.Type("This video is sponsored by... ", 1.4, new DialogueData({
        portrait: "niko",
        audio: "default",
        delayAfter: 0.25
    }));
    await diaManager.Type("Ra-", 1, new DialogueData({
        portrait: "niko_speak",
        audio: "default",
    }));
    await diaManager.ClearText();
    await diaManager.Type("NO! ", 1.5, new DialogueData({
        portrait: "george",
        audio: "default",
    }));
    await diaManager.ClearText();
    await diaManager.Type("Heh. ", 1, new DialogueData({
        portrait: "alula_speak",
        audio: "default",
    }));
    await diaManager.ClearText();
    await diaManager.Type("NIKO NO!", 1.5, new DialogueData({
        portrait: "calamus",
        audio: "default"
    }));
    await DialogueLoop.Delay(0.5);
    await diaManager.ClearText();
    await diaManager.Type("Whatever you do, ", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.25
    }));
    await diaManager.Type("DO NOT ", 1.4, new DialogueData({
        audio: "default",
        delayAfter : 0.5
    }));
    await diaManager.Type("MENTION ", 1.4, new DialogueData({
        audio: "default",
        delayAfter : 0.6
    }));
    await diaManager.Type("THAT.", 1.4, new DialogueData({
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Why?", 1, new DialogueData({
        portrait: "niko",
        audio: "default"
    }));
    await DialogueLoop.Delay(0.8);
    await diaManager.ClearText();
    await diaManager.Type("Just don't.", 1.4, new DialogueData({
        portrait: "calamus",
        audio: "default"
    }));
    await DialogueLoop.Delay(0.8);
    await diaManager.ClearText();
    await diaManager.Type("You really shouldn't.", 1, new DialogueData({
        portrait: "alula_speak",
        audio: "default"
    }));
    await DialogueLoop.Delay(0.8);
    await diaManager.ClearText();
    await diaManager.Type("They're right bruh.", 1, new DialogueData({
        portrait: "george",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Okay.\n", 1, new DialogueData({
        portrait: "niko",
        audio: "default"
    }));
    await DialogueLoop.Delay(5);
    await diaManager.SetActive(false);
}