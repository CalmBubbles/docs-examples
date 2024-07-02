async function Main ()
{
    await diaManager.SetActive(true);

    // Unaffected by the change
    await diaManager.Type("A simple use of styles is making text have a ", 1);

    // The change
    diaManager.style.color = "red";

    // Affected by it
    await diaManager.Type("red color.", 1);
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("Even after clear, ", 1);
    await DialogueLoop.Delay(0.5);
    await diaManager.Type("the text is red.", 1);

    diaManager.style.color = "inherit";

    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("Until of course, ", 1);
    await DialogueLoop.Delay(0.5);
    await diaManager.Type("we change it back.", 1);
}