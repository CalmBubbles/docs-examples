

diaManager.animation.box.onEnable = new DialogueAnimation({
    animation : "box",
    duration : 0.25
});

async function Main ()
{
    // These `Type` calls will not run
    await diaManager.Type("...", 0.04);
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("h-", 1);
    await DialogueLoop.Delay(0.4);
    await diaManager.Type("help...", 0.7);
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("I can't... ", 0.6);
    await DialogueLoop.Delay(0.8);
    await diaManager.Type("breathe...", 0.6);
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("...", 0.02);
    await DialogueLoop.Delay(3);
    
    // Enable the system
    await diaManager.SetActive(true);
    
    // These will run
    await diaManager.Type("...", 0.04);
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("Finally...", 1);
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("I can finally breathe.", 0.8);
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("I hope this example goes w-", 1);
    
    // Disable the system
    await diaManager.SetActive(false);
    
    // Internal screaming
    await diaManager.Type("HEEEELLLLLLLLLLLPPPPPP!!!", 1.4);
}