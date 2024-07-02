diaManager.config.audios.items.push(new DialogueAudioClip("sans", "audio/sans.wav"));

diaManager.config.sprites = new DialogueSpriteArray(
    [
        { name: "sans", src: "neutral.png" },
        { name: "sans_blink", src: "blink.png" }
    ],
    "img/faces/sans"
);

async function Main ()
{
    await Loader.LoadStyle("custom-styles/move-animation");

    SetFont(1);
    await diaManager.SetActive(true);
    SetAsterisk();
    await diaManager.Type("we're running out of words to say.", 1, new DialogueData({
        audio: "sans",
        portrait: "sans"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();

    diaManager.animation.text.onClear = new DialogueAnimationPreset({
        animation: "css",
        animationParams: [new Property("animation", "1s ease-in move-animation, move-step-animation infinite ease-in-out 0.15s")],
        duration: 1,
        wait: false
    });

    await diaManager.Type("literally.", 1, new DialogueData({
        audio: "sans",
        portrait: "sans_blink"
    }));
    await DialogueLoop.Delay(0.5);
    await diaManager.ClearText();
    await DialogueLoop.Delay(2);
    await diaManager.SetActive(false);
}