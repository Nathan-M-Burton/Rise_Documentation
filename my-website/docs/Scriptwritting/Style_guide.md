---
sidebar_position: 2
---

# Style Guide


## Introduction


The goal of this section is to establish a clear and efficient system for formatting scripts, optimizing both the writing and production phases of video creation. This style guide will create a common syntax, ensuring compatibility across the entire video production ecosystem.

Why a standardized structure is important:

* **Consistency:** A common structure ensures that video production teams work seamlessly across departments, avoiding the need for script rewrites.
* **Collaboration:** Standardized formatting allows for seamless collaboration and maintains a consistent style and tone throughout videos.

We cover general guidelines for writing scripts compatible with voiceover software and introduce new syntax and commands for use in Rise's script preparation software.

## General Formatting Notes

While preparing a script for voiceover software shares similarities with standard writing, there are crucial differences that, if overlooked, can lead to issues. Remember, you're writing for a machine, not just a human reader. This means your role extends beyond conveying information; you're also crafting the tone and flow within the text.

### Key considerations:

* **Simple Sentence Structures:** Avoid complex grammar and long sentences, as they can sound unnatural when read aloud.
* **Visualize the Output:** Keep in mind how your writing will translate visually. Consider how the text will appear on screen alongside images or other elements.
* **Newlines vs. Indents:** Use newlines (pressing Enter/Return) to separate paragraphs, not indents.
* **Lists and Bullet Points:** Lists and bullet points should be avoided whenever possible. They are difficult for voiceover technology to read correctly and will need to be rewritten for compatibility. Write the elements you would like to be listed in full sentences. You can specify that the list elements should be shown on screen in an overlay comment. 
* **Tricky Terms:** Acronyms, numbers, and emails are another tricky point for voiceover software. Numbers should be written as full words ("One" is preferred over "1"). 
Acronyms and emails should be either written phonetically or marked in text. You can learn more about phonetic spelling **here** or you can simply mark the terms you think might cause issues using a `[Phonetic Command]`.


### Punctuation is Your Friend

Voiceover software doesn't have the same context as a human reader. Punctuation becomes a powerful tool to guide the software's reading and create the desired verbal flow.

* **Commas for Pauses:** Use commas to indicate pauses in the reading, not just for grammatical correctness. A double comma (,,) or an ellipsis (...) can denote longer pauses.

* **Quotation Marks:** Quotation marks can be placed around a word to add emphasis. 

* **Over-Punctuate:** When unsure, err on the side of adding more punctuation. Punctuation is the only in-text contextual indicator of flow that WellSaidLabs has, so it is the most direct method of verbal control.






## The Script Preparation Tool (SPT)

### Why use SPT?

The SPT is a new program I am developing to streamline the use of AI voice-over software in video production. When a properly formatted script is processed, the SPT produces two documents:

1. **Optimized Script:** Text ready for WellsaidLabs with minimal editing. Production instructions are removed, and problematic terms are replaced with phonetic spellings. 
2. **Production Instructions:** A guide for the video production team.

Over time, the SPT will improve efficiency and virtually eliminate the need to rewrite scripts for voice-over software.


### Key terms:

* **Section Headings:** Start major sections on a new line and enclose the title in asterisks: `*Title*`
* **Commands:** All commands are in square brackets and allow for specific functionality within `SPT`. Do not use square brackets for anything else in your script. `[Command]`
* **Overlay Commands:** Indicates visual elements (images or text) that should appear on screen. `Overlay commands` should be included directly before the first word where the overlay should appear.
* **Text reference:** Marks a specific selection of text in your script as a graphic to be displayed.
* **Phonetic Commands:** Indicates an email, phone number, or acronym that may cause trouble for the voiceover software. This command will either replace the problem term with a known phonetic spelling or flag the term for review by the video production team. New terms will be added to the software's dictionary as time goes on, greatly improving efficiency for the production team. 

### Overlay Command Structure:

```
[Type, Source, Additional Instructions]
```

* **Command Type:** `image`, or `text`
Either select image or text based on the graphic you would like to display. 
* **Source:**
     * **Images:** For image graphics, ensure that your file names are formatted as "script_title_number" where "number" is the order in which the graphics appear in the video (e.g., "risevideo_1.jpg"). Reuse the same number for the same image throughout the script. For source, simply put the graphic number (e.g., [image, 1, none])
     * **Text:** Text has two options. If you want to directly add text as a graphic, simply enclose the text in quotation marks in the source section of the command. If you are using a reference tag, you need only enter the graphic number in the source parameter. 
* **Additional Instructions:** Specify animations, durations, or any other special instructions for the graphic.

### Reference Tags:

Reference tags allow you to indicate parts of your text that should be shown on screen. This is particularly useful for long sections of text where including the entire quote in the overlay command would be impractical. To create a reference tag, enclose the desired text with:

`[ref, graphic number]`

The graphic number should correspond to the order in which all of your graphics are shown on screen:

```
[ref, graphic number] Text to display [ref, graphic number]
```
Example: `[ref, 2] The cat loves to chase ducks [ref, 2]` indicates this text should be the second graphic element in the video.

### Phonetic Commands:

As previously mentioned, there are a few types of terms that cause consistent issues for voiceover software. Particularly email addresses, phone numbers, and acronyms. We address this using `Phonetic Commands`, which will replace marked terms with known replacements that work with WellsaidLabs. To use a `phonetic command`, place `[phonetic]` on either side of the desired term.

     ```
     [phonetic] problematic term [phonetic]
     ```


### Putting the Pieces Together

**Scenario A: Image Overlay**

Script Title: "The Joys of Duckhood"

Image File Name: "The Joys of Duckhood_1.jpg"

Overlay Comment:

```
[image, 1, none]
```

**Scenario B: Animated Text Overlay**

Overlay Comment using direct text:

```
[text, "Go Ducks!", Type the text on screen in sync with the speaker]
```

Overlay Comment using `reference tag` (where "[ref, 5]Go Ducks![ref, 5]" appears in the script):

```
[text, 5, Type the text on screen in sync with the speaker]
```

Remember to place overlay comments directly before the word where the visual element should appear.


