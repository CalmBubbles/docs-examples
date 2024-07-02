diaManager.config.sprites.items.push(new DialogueSprite("sus", "img/amogus.png"));

async function Main ()
{
    await diaManager.SetActive(true);
    await diaManager.Type("(There's nothing here but darkness.)", 1);
    await DialogueLoop.Delay(3);
    
    // Clear text
    await diaManager.ClearText();
    
    // Use portrait
    await diaManager.Type("AND ME.", 2, new DialogueData({ portrait : "sus" }));
    await DialogueLoop.Delay(1.5);
    
    // Clear text and portrait
    await diaManager.Clear();
    
    await diaManager.Type("So...", 0.1);
    await DialogueLoop.Delay(1);
    
    // Bind a method for when `Clear` is called
    diaManager.Once(DialogueEvent.Clear, () => alert("`Clear` is also called on manager disable."));
    
    // Disable manager
    await diaManager.SetActive(false);
};